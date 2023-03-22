# Abs support for Visual Studio Code

This repository adds support for the Abs language in Visual Studio Code.  To
install the latest release (currently
https://github.com/abstools/abs-vs-code/releases/download/v0.0.3/abs-0.0.3.vsix),
open the Extensions list and choose "Install from VSIX..." from the menu:

<picture>
<img alt="First click 'Extensions', then the horizontal dots menu at the top of the list, then 'Install from VSIX...'" src="images/installing.png">
</picture>

To run the extension from a git checkout, copy the `abs/` subdirectory into
your `~/.vscode/extensions` directory, e.g., with the following commands:

    cd ~/.vscode/extensions
    cp -r /path/to/project/abs-vs-code/abs abs

To create a `.vsix` package from the current directory, install node then run
the following commands:

    npm install
    cd abs
    vsce package

## Features

Syntax highlighting only, for now.
