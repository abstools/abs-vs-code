import * as vscode from 'vscode';
import * as cp from 'child_process';
import * as path from 'path';
import * as which from 'which';

export function activate(context: vscode.ExtensionContext) {

    const diagnosticCollection = vscode.languages.createDiagnosticCollection('ABS diagnostics');

    const compileCommandHandler = () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        const document = editor.document;
        const config = vscode.workspace.getConfiguration('abs');
        const compileCommand = config.get<string>('compileCommand');
        const backend = config.get<string>('backend');
        const compileOptions = config.get<string[]>('compileOptions');
        const optionsString = compileOptions ? compileOptions.join(' ') : '';
        if (!compileCommand) {
            vscode.window.showErrorMessage('Please set the ABS compile command.', {title: 'Open Settings'})
                .then((selection) => {
                    if (selection) {
                        vscode.commands.executeCommand('workbench.action.openSettings', 'abs.compileCommand');
                    }});
            return;
        }
        // Check if the command exists
        const commandExists = !!which.sync(compileCommand, { nothrow: true });
        if (!commandExists) {
            vscode.window.showErrorMessage(`The command "${compileCommand}" does not exist or cannot be executed.`, {title: 'Open Settings'})
                .then((selection) => {
                    if (selection) {
                        vscode.commands.executeCommand('workbench.action.openSettings', 'abs.compileCommand');
                    }});
            return;
        }

        // We specify `backend` at the end here so that users can call the
        // compiler with `compileCommand` = "java", `compileOptions` =
        // ["-jar", "/path/to/absfrontend.jar"].
        const compileCommandline = `${compileCommand} ${optionsString} ${backend} "${document.fileName}"`;
        const compileOutput = vscode.window.createOutputChannel('ABS Compile Output');
        compileOutput.clear();
        compileOutput.appendLine(`Starting ABS compilation with command ${compileCommandline} ...`);
        diagnosticCollection.clear();

        cp.exec(compileCommandline,
                { cwd: path.dirname(document.fileName)},
                (err, stdout, stderr) => {
                    compileOutput.appendLine(stdout);
                    compileOutput.appendLine(stderr);
                    compileOutput.show(true);
                    if (err) {
                        let diagnostics : vscode.Diagnostic[] = [];
                        const errors = stderr.split('\n');
                        for (const error of errors) {
                            const match = error.match(/:(\d+):(\d+):(Warning: )?(.*)/);
                            if (match) {
                                const line = Number(match[1]) - 1;
                                const lineLength = document.lineAt(line).text.length;
                                // const character = Number(match[2]) - 1;
                                const warning = Boolean(match[3]);
                                const message = match[4];

                                diagnostics.push(new vscode.Diagnostic(
                                    new vscode.Range(line, 0, line, lineLength),
                                    message,
                                    warning ? vscode.DiagnosticSeverity.Warning : vscode.DiagnosticSeverity.Error));
                            }
                        }
                        diagnosticCollection.set(document.uri, diagnostics);
                    } else {
                        compileOutput.appendLine("ABS compilation finished.");
                    }
                });
    }

    context.subscriptions.push(vscode.commands.registerCommand("abs.compile", compileCommandHandler));
}

export function deactivate() {}
