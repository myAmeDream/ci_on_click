import * as vscode from 'vscode';

interface CommandConfig {
    name: string;
    command: string;
    icon?: string;
}

class CommandItem extends vscode.TreeItem {
    constructor(public readonly config: CommandConfig) {
        super(config.name, vscode.TreeItemCollapsibleState.None);
        this.tooltip = config.command;
        this.description = config.command;
        this.command = {
            command: 'ci-on-click.executeCommand',
            title: config.name,
            arguments: [config]
        };
        this.iconPath = new vscode.ThemeIcon(config.icon || 'terminal');
    }
}

class CommandsTreeDataProvider implements vscode.TreeDataProvider<CommandItem> {
    private _onDidChangeTreeData = new vscode.EventEmitter<void>();
    readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: CommandItem): vscode.TreeItem {
        return element;
    }

    getChildren(): CommandItem[] {
        const config = vscode.workspace.getConfiguration('ci-on-click');
        const commands = config.get<CommandConfig[]>('commands', []);
        return commands.map(cmd => new CommandItem(cmd));
    }
}

function getWorkingDirectory(): string {
    const config = vscode.workspace.getConfiguration('ci-on-click');
    const workingDir = config.get<string>('workingDirectory', '${workspaceFolder}');
    if (workingDir.includes('${workspaceFolder}')) {
        const folders = vscode.workspace.workspaceFolders;
        if (folders && folders.length > 0) {
            return workingDir.replace('${workspaceFolder}', folders[0].uri.fsPath);
        }
    }
    return workingDir;
}

function executeCommand(commandText: string, commandName: string) {
    const workingDir = getWorkingDirectory();
    let terminal = vscode.window.terminals.find(t => t.name === 'CI on Click');
    if (!terminal) {
        terminal = vscode.window.createTerminal({ name: 'CI on Click', cwd: workingDir });
    }
    terminal.show();
    terminal.sendText(commandText);
    vscode.window.showInformationMessage(`Executing: ${commandName}`);
}

export function activate(context: vscode.ExtensionContext) {
    const provider = new CommandsTreeDataProvider();
    context.subscriptions.push(
        vscode.window.registerTreeDataProvider('ci-on-click.commandsView', provider)
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('ci-on-click.executeCommand', (config: CommandConfig) => {
            executeCommand(config.command, config.name);
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('ci-on-click.refreshCommands', () => {
            provider.refresh();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('ci-on-click.openSettings', () => {
            vscode.commands.executeCommand('workbench.action.openSettings', 'ci-on-click');
        })
    );

    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('ci-on-click')) {
                provider.refresh();
            }
        })
    );
}

export function deactivate() {}
