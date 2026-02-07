# 项目结构说明 / Project Structure

```
ci_on_click/
├── .vscode/                    # VS Code 配置文件 / VS Code configuration files
│   ├── launch.json            # 调试配置 / Debug configuration
│   ├── settings.json          # 项目设置（包含默认命令配置）/ Project settings (with default commands)
│   └── tasks.json             # 任务配置 / Task configuration
├── src/                        # 源代码目录 / Source code directory
│   └── extension.ts           # 扩展主入口文件 / Extension main entry point
├── out/                        # 编译输出目录（由 .gitignore 忽略）/ Compiled output (ignored by .gitignore)
│   ├── extension.js           # 编译后的 JavaScript 文件 / Compiled JavaScript
│   └── extension.js.map       # Source map 文件 / Source map file
├── node_modules/               # npm 依赖（由 .gitignore 忽略）/ npm dependencies (ignored by .gitignore)
├── .gitignore                  # Git 忽略文件配置 / Git ignore configuration
├── .vscodeignore              # VS Code 打包时忽略的文件 / Files to ignore when packaging
├── build.sh                    # 演示构建脚本 / Demo build script
├── CHANGELOG.md                # 版本更新日志 / Version changelog
├── example.settings.json       # 配置示例文件 / Example settings file
├── LICENSE                     # MIT 许可证 / MIT License
├── package.json                # npm 包配置和扩展元数据 / npm package config and extension metadata
├── package-lock.json           # npm 依赖锁定文件（由 .gitignore 忽略）/ npm lock file (ignored by .gitignore)
├── PROJECT_STRUCTURE.md        # 本文件 / This file
├── QUICKSTART.md               # 快速开始指南 / Quick start guide
├── README.md                   # 项目说明文档 / Project documentation
├── tsconfig.json               # TypeScript 编译配置 / TypeScript compiler configuration
└── verify-extension.sh         # 扩展验证脚本 / Extension verification script
```

## 文件说明 / File Descriptions

### 核心文件 / Core Files

#### src/extension.ts
扩展的主要逻辑文件，包含：
The main logic file for the extension, containing:
- `activate()` 函数：扩展激活时执行 / Function executed when extension activates
- `deactivate()` 函数：扩展停用时执行 / Function executed when extension deactivates
- 命令注册和执行逻辑 / Command registration and execution logic
- 状态栏按钮管理 / Status bar button management
- 终端集成 / Terminal integration

#### package.json
扩展的配置文件，定义了：
The extension's configuration file, defining:
- 扩展的元数据（名称、版本、描述等）/ Extension metadata (name, version, description, etc.)
- 命令定义（contributes.commands）/ Command definitions (contributes.commands)
- 配置项定义（contributes.configuration）/ Configuration settings (contributes.configuration)
- 依赖项 / Dependencies
- 脚本命令 / Script commands

#### tsconfig.json
TypeScript 编译器配置，指定：
TypeScript compiler configuration, specifying:
- 编译目标（ES2020）/ Compilation target (ES2020)
- 输出目录（out/）/ Output directory (out/)
- 源码目录（src/）/ Source directory (src/)
- 编译选项 / Compiler options

### 配置文件 / Configuration Files

#### .vscode/settings.json
项目级 VS Code 设置，包含默认命令配置：
Project-level VS Code settings, containing default command configurations:
```json
{
  "ci-on-click.commands": [
    { "name": "Build UT", "command": "./build.sh ut", "icon": "$(beaker)" },
    { "name": "Build Clean", "command": "./build.sh clean", "icon": "$(trash)" },
    { "name": "Build VG", "command": "./build.sh vg", "icon": "$(bug)" },
    { "name": "Build CI", "command": "./build.sh ci", "icon": "$(rocket)" }
  ]
}
```

#### .vscode/launch.json
调试配置，用于 F5 启动扩展开发主机。
Debug configuration for launching Extension Development Host with F5.

#### .vscode/tasks.json
任务配置，定义了 npm watch 任务。
Task configuration, defining the npm watch task.

### 文档文件 / Documentation Files

#### README.md
项目的主要文档，包含：
Main project documentation, containing:
- 功能介绍 / Feature introduction
- 安装说明 / Installation instructions
- 使用方法 / Usage guide
- 配置示例 / Configuration examples
- 中英双语 / Bilingual (Chinese/English)

#### QUICKSTART.md
快速开始指南，提供详细的：
Quick start guide, providing detailed:
- 安装步骤 / Installation steps
- 使用示例 / Usage examples
- 配置教程 / Configuration tutorials
- 故障排除 / Troubleshooting
- 进阶用法 / Advanced usage

#### CHANGELOG.md
版本更新日志，记录每个版本的变更。
Version changelog, recording changes in each version.

#### PROJECT_STRUCTURE.md
本文件，说明项目结构。
This file, explaining the project structure.

### 工具文件 / Tool Files

#### build.sh
演示构建脚本，提供四个示例命令：
Demo build script, providing four example commands:
- `ut` - 运行单元测试 / Run unit tests
- `clean` - 清理构建 / Clean build
- `vg` - 运行 Valgrind / Run Valgrind
- `ci` - 运行 CI 流程 / Run CI pipeline

#### verify-extension.sh
验证脚本，检查：
Verification script, checking:
- Node.js 和 npm 安装 / Node.js and npm installation
- 依赖安装情况 / Dependency installation
- 编译状态 / Compilation status
- build.sh 可用性 / build.sh availability

#### example.settings.json
配置示例文件，展示不同项目类型的配置：
Example settings file, showing configurations for different project types:
- C/C++ 项目 / C/C++ projects
- Python 项目 / Python projects
- Node.js 项目 / Node.js projects
- Make 项目 / Make-based projects

### 忽略文件 / Ignore Files

#### .gitignore
Git 版本控制忽略配置，排除：
Git version control ignore configuration, excluding:
- `node_modules/` - npm 依赖 / npm dependencies
- `out/` - 编译输出 / Compiled output
- `*.vsix` - 打包文件 / Package files
- `package-lock.json` - 锁定文件 / Lock file

#### .vscodeignore
VS Code 扩展打包时忽略的文件：
Files to ignore when packaging the VS Code extension:
- 源代码（src/）/ Source code (src/)
- 配置文件（tsconfig.json, .eslintrc.json）/ Configuration files
- 测试文件 / Test files
- Source maps（*.map）/ Source maps

## 开发工作流 / Development Workflow

### 1. 安装依赖 / Install Dependencies
```bash
npm install
```

### 2. 开发模式 / Development Mode
```bash
npm run watch   # 监视文件变化，自动编译 / Watch for changes and auto-compile
```

### 3. 编译 / Compile
```bash
npm run compile  # 编译 TypeScript / Compile TypeScript
```

### 4. 调试 / Debug
按 F5 在 VS Code 中启动调试。
Press F5 to start debugging in VS Code.

### 5. 打包 / Package
```bash
npm install -g @vscode/vsce
vsce package
```

### 6. 安装 / Install
在 VS Code 中通过 "Extensions: Install from VSIX..." 安装生成的 .vsix 文件。
Install the generated .vsix file in VS Code via "Extensions: Install from VSIX...".

## 扩展架构 / Extension Architecture

### 激活流程 / Activation Flow
1. VS Code 启动时加载扩展 / VS Code loads the extension on startup
2. 调用 `activate()` 函数 / Call the `activate()` function
3. 注册命令处理器 / Register command handlers
4. 创建状态栏按钮 / Create status bar buttons
5. 监听配置变化 / Listen for configuration changes

### 命令执行流程 / Command Execution Flow
1. 用户点击按钮或选择命令 / User clicks button or selects command
2. 触发相应的命令处理器 / Trigger corresponding command handler
3. 读取配置获取命令详情 / Read configuration to get command details
4. 创建或复用终端 / Create or reuse terminal
5. 在终端中执行命令 / Execute command in terminal
6. 显示通知消息 / Show notification message

### 配置管理 / Configuration Management
- 使用 VS Code 的 workspace.getConfiguration API / Use VS Code's workspace.getConfiguration API
- 支持项目级和用户级配置 / Support project-level and user-level configuration
- 配置变化时自动更新 UI / Automatically update UI when configuration changes

## 自定义和扩展 / Customization and Extension

### 添加新命令 / Adding New Commands
在 `.vscode/settings.json` 或用户设置中添加：
Add to `.vscode/settings.json` or user settings:
```json
{
  "ci-on-click.commands": [
    {
      "name": "你的命令",
      "command": "你的命令行",
      "icon": "$(icon-name)"
    }
  ]
}
```

### 修改工作目录 / Changing Working Directory
```json
{
  "ci-on-click.workingDirectory": "/path/to/your/directory"
}
```

### 隐藏状态栏按钮 / Hiding Status Bar Buttons
```json
{
  "ci-on-click.showStatusBarButtons": false
}
```

## 技术栈 / Technology Stack

- **语言 / Language**: TypeScript
- **框架 / Framework**: VS Code Extension API
- **构建工具 / Build Tool**: TypeScript Compiler (tsc)
- **包管理 / Package Manager**: npm
- **打包工具 / Packaging Tool**: @vscode/vsce

## 依赖项 / Dependencies

### 开发依赖 / Development Dependencies
- `@types/vscode` - VS Code API 类型定义 / VS Code API type definitions
- `@types/node` - Node.js 类型定义 / Node.js type definitions
- `typescript` - TypeScript 编译器 / TypeScript compiler
- `eslint` - 代码检查工具 / Code linting tool
- `@typescript-eslint/*` - TypeScript ESLint 插件 / TypeScript ESLint plugins

## 贡献指南 / Contributing Guidelines

1. Fork 项目 / Fork the project
2. 创建特性分支 / Create a feature branch
3. 提交变更 / Commit changes
4. 推送到分支 / Push to branch
5. 创建 Pull Request / Create a Pull Request

## 许可证 / License

MIT License - 详见 LICENSE 文件 / See LICENSE file for details
