import * as vscode from 'vscode';

interface CommandConfig {
    name: string;
    command: string;
    icon?: string;
}

export function activate(context: vscode.ExtensionContext) {
    console.log('CI on Click extension is now active!');

    // Status bar items storage
    const statusBarItems: vscode.StatusBarItem[] = [];

    // Function to get workspace folder path
    function getWorkingDirectory(): string {
        const config = vscode.workspace.getConfiguration('ci-on-click');
        const workingDir = config.get<string>('workingDirectory', '${workspaceFolder}');
        
        if (workingDir.includes('${workspaceFolder}')) {
            const workspaceFolders = vscode.workspace.workspaceFolders;
            if (workspaceFolders && workspaceFolders.length > 0) {
                return workingDir.replace('${workspaceFolder}', workspaceFolders[0].uri.fsPath);
            }
        }
        return workingDir;
    }

    // Function to execute a command in terminal
    function executeCommand(commandText: string, commandName: string) {
        const workingDir = getWorkingDirectory();
        
        // Create or reuse terminal
        let terminal = vscode.window.terminals.find(t => t.name === 'CI on Click');
        if (!terminal) {
            terminal = vscode.window.createTerminal({
                name: 'CI on Click',
                cwd: workingDir
            });
        }
        
        terminal.show();
        terminal.sendText(commandText);
        
        vscode.window.showInformationMessage(`Executing: ${commandName}`);
    }

    // Function to create status bar buttons
    function createStatusBarButtons() {
        // Clear existing buttons
        statusBarItems.forEach(item => item.dispose());
        statusBarItems.length = 0;

        const config = vscode.workspace.getConfiguration('ci-on-click');
        const showButtons = config.get<boolean>('showStatusBarButtons', true);
        
        if (!showButtons) {
            return;
        }

        const commands = config.get<CommandConfig[]>('commands', []);
        
        // Create status bar buttons for each command (limit to first 4)
        commands.slice(0, 4).forEach((cmd, index) => {
            const statusBarItem = vscode.window.createStatusBarItem(
                vscode.StatusBarAlignment.Left,
                100 - index
            );
            
            statusBarItem.text = cmd.icon ? `${cmd.icon} ${cmd.name}` : cmd.name;
            statusBarItem.command = `ci-on-click.runCommand${index + 1}`;
            statusBarItem.tooltip = `Click to execute: ${cmd.command}`;
            statusBarItem.show();
            
            statusBarItems.push(statusBarItem);
        });
    }

    // Register command handlers
    for (let i = 1; i <= 4; i++) {
        const disposable = vscode.commands.registerCommand(`ci-on-click.runCommand${i}`, () => {
            const config = vscode.workspace.getConfiguration('ci-on-click');
            const commands = config.get<CommandConfig[]>('commands', []);
            
            if (commands.length >= i) {
                const cmd = commands[i - 1];
                executeCommand(cmd.command, cmd.name);
            } else {
                vscode.window.showWarningMessage(`Command ${i} is not configured`);
            }
        });
        context.subscriptions.push(disposable);
    }

    // Register show all commands handler
    const showCommandsDisposable = vscode.commands.registerCommand('ci-on-click.showCommands', async () => {
        const config = vscode.workspace.getConfiguration('ci-on-click');
        const commands = config.get<CommandConfig[]>('commands', []);
        
        if (commands.length === 0) {
            vscode.window.showWarningMessage('No commands configured. Please configure commands in settings.');
            return;
        }

        const items = commands.map(cmd => ({
            label: cmd.icon ? `${cmd.icon} ${cmd.name}` : cmd.name,
            description: cmd.command,
            command: cmd
        }));

        const selected = await vscode.window.showQuickPick(items, {
            placeHolder: 'Select a command to execute'
        });

        if (selected) {
            executeCommand(selected.command.command, selected.command.name);
        }
    });
    context.subscriptions.push(showCommandsDisposable);

    // Create initial status bar buttons
    createStatusBarButtons();

    // Watch for configuration changes
    const configChangeDisposable = vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('ci-on-click')) {
            createStatusBarButtons();
        }
    });
    context.subscriptions.push(configChangeDisposable);

    // Cleanup
    context.subscriptions.push({
        dispose: () => {
            statusBarItems.forEach(item => item.dispose());
        }
    });
}

export function deactivate() {
    console.log('CI on Click extension is deactivated');
}
