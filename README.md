# CI on Click

一个 VS Code 插件，让你通过点击按钮来执行预定义的命令，无需手动输入命令行。

A VS Code extension that allows you to execute predefined commands with a single click, eliminating the need to manually type commands.

## 功能特性 / Features

- ✅ 点击状态栏按钮执行预定义命令 / Click status bar buttons to execute predefined commands
- ✅ 在终端中自动执行命令 / Automatically execute commands in the terminal
- ✅ 支持自定义配置不同项目的命令 / Support custom command configuration for different projects
- ✅ 提供命令快速选择面板 / Provide command quick pick panel
- ✅ 支持 Linux/Ubuntu 环境 / Support Linux/Ubuntu environment

## 安装 / Installation

### 从源码安装 / Install from Source

1. 克隆仓库 / Clone the repository:
```bash
git clone https://github.com/myAmeDream/ci_on_click.git
cd ci_on_click
```

2. 安装依赖 / Install dependencies:
```bash
npm install
```

3. 编译扩展 / Compile the extension:
```bash
npm run compile
```

4. 打包扩展 (可选) / Package the extension (optional):
```bash
npm install -g @vscode/vsce
vsce package
```

5. 在 VS Code 中安装 / Install in VS Code:
   - 按 `F5` 启动开发模式，或 / Press `F5` to start in development mode, or
   - 使用 "Extensions: Install from VSIX..." 命令安装 .vsix 文件 / Use "Extensions: Install from VSIX..." to install the .vsix file

## 使用方法 / Usage

### 默认命令 / Default Commands

插件预配置了以下命令 / The extension comes pre-configured with the following commands:

1. **Build UT** - 执行 `./build.sh ut`
2. **Build Clean** - 执行 `./build.sh clean`
3. **Build VG** - 执行 `./build.sh vg`
4. **Build CI** - 执行 `./build.sh ci`

### 执行命令的方式 / Ways to Execute Commands

1. **状态栏按钮 / Status Bar Buttons**: 点击状态栏左侧的按钮 / Click buttons on the left side of the status bar
2. **命令面板 / Command Palette**: 
   - 按 `Ctrl+Shift+P` (Linux/Windows) 或 `Cmd+Shift+P` (Mac)
   - 输入 "CI: Show All Commands" 查看所有可用命令 / Type "CI: Show All Commands" to see all available commands
   - 选择要执行的命令 / Select a command to execute

### 自定义配置 / Custom Configuration

#### 项目级配置 / Project-level Configuration

在项目根目录创建 `.vscode/settings.json` 文件 / Create a `.vscode/settings.json` file in your project root:

```json
{
  "ci-on-click.commands": [
    {
      "name": "Build UT",
      "command": "./build.sh ut",
      "icon": "$(beaker)"
    },
    {
      "name": "Build Clean",
      "command": "./build.sh clean",
      "icon": "$(trash)"
    },
    {
      "name": "Build VG",
      "command": "./build.sh vg",
      "icon": "$(bug)"
    },
    {
      "name": "Build CI",
      "command": "./build.sh ci",
      "icon": "$(rocket)"
    },
    {
      "name": "Run Tests",
      "command": "npm test",
      "icon": "$(testing)"
    }
  ],
  "ci-on-click.workingDirectory": "${workspaceFolder}",
  "ci-on-click.showStatusBarButtons": true
}
```

#### 用户级配置 / User-level Configuration

打开 VS Code 设置 (`Ctrl+,`)，搜索 "CI on Click" 进行配置。
Open VS Code settings (`Ctrl+,`) and search for "CI on Click" to configure.

### 配置选项 / Configuration Options

- **ci-on-click.commands**: 命令列表数组 / Array of command configurations
  - `name`: 命令显示名称 / Display name of the command
  - `command`: 要执行的实际命令 / Actual command to execute
  - `icon`: (可选) VS Code 图标标识符 / (Optional) VS Code icon identifier (e.g., `$(beaker)`, `$(rocket)`)

- **ci-on-click.workingDirectory**: 命令执行的工作目录 / Working directory for commands
  - 默认: `${workspaceFolder}` (项目根目录) / Default: `${workspaceFolder}` (project root)

- **ci-on-click.showStatusBarButtons**: 是否在状态栏显示按钮 / Whether to show buttons in the status bar
  - 默认: `true`

### 可用图标 / Available Icons

你可以使用任何 VS Code 内置图标，例如 / You can use any VS Code built-in icons, such as:
- `$(beaker)` - 测试 / Test
- `$(rocket)` - 启动 / Launch
- `$(bug)` - 调试 / Debug
- `$(trash)` - 清理 / Clean
- `$(gear)` - 配置 / Configuration
- `$(play)` - 运行 / Run
- `$(stop)` - 停止 / Stop
- `$(refresh)` - 刷新 / Refresh

更多图标请参考: https://code.visualstudio.com/api/references/icons-in-labels

## 开发 / Development

### 构建 / Build

```bash
npm run compile
```

### 监视模式 / Watch Mode

```bash
npm run watch
```

### 调试 / Debug

1. 在 VS Code 中打开项目 / Open the project in VS Code
2. 按 `F5` 启动扩展开发主机 / Press `F5` to launch Extension Development Host
3. 在新窗口中测试扩展 / Test the extension in the new window

## 示例场景 / Example Scenarios

### C/C++ 项目 / C/C++ Project

```json
{
  "ci-on-click.commands": [
    {
      "name": "Build",
      "command": "make",
      "icon": "$(tools)"
    },
    {
      "name": "Clean",
      "command": "make clean",
      "icon": "$(trash)"
    },
    {
      "name": "Run Tests",
      "command": "make test",
      "icon": "$(beaker)"
    }
  ]
}
```

### Python 项目 / Python Project

```json
{
  "ci-on-click.commands": [
    {
      "name": "Run Tests",
      "command": "pytest",
      "icon": "$(beaker)"
    },
    {
      "name": "Lint",
      "command": "pylint .",
      "icon": "$(checklist)"
    },
    {
      "name": "Format",
      "command": "black .",
      "icon": "$(paintcan)"
    }
  ]
}
```

### Node.js 项目 / Node.js Project

```json
{
  "ci-on-click.commands": [
    {
      "name": "Build",
      "command": "npm run build",
      "icon": "$(tools)"
    },
    {
      "name": "Test",
      "command": "npm test",
      "icon": "$(beaker)"
    },
    {
      "name": "Start Dev",
      "command": "npm run dev",
      "icon": "$(play)"
    }
  ]
}
```

## 贡献 / Contributing

欢迎提交问题和拉取请求！/ Issues and pull requests are welcome!

## 许可证 / License

MIT
