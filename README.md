# Abs support for Visual Studio Code

This repository adds support for the Abs language in Visual Studio Code.

## Features

Syntax highlighting only, for now.

## Installing

To install the latest released version:

1. download the `.vsix` file from
   https://github.com/abstools/abs-vs-code/releases/latest
2. open the Extensions list and choose "Install from VSIX..." from the menu:

   <picture>
   <img alt="First click 'Extensions', then the horizontal dots menu at the top of the list, then 'Install from VSIX...'" src="images/installing.png">
   </picture>

3. Choose the file downloaded in Step 1

### Running an unreleased version

To use the extension from a git checkout, copy the `abs/` subdirectory into
your `~/.vscode/extensions` directory, e.g., with the following commands:

    cd ~/.vscode/extensions
    cp -r /path/to/abs-vs-code/abs abs

## Development

To run the current source, open the `abs/` subfolder inside VS Code and press
`F5` (Run -> Start Debugging).

To create a `.vsix` package, install [node](https://nodejs.org/en) then run
the following commands:

    npm install
    cd abs
    vsce package

