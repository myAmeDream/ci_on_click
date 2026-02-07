# Visual Usage Guide / 可视化使用指南

## 界面预览 / Interface Preview

### 1. 状态栏按钮视图 / Status Bar Buttons View

当扩展激活后，你会在 VS Code 底部状态栏的**左侧**看到以下按钮：
When the extension is activated, you'll see these buttons on the **left side** of the status bar at the bottom of VS Code:

```
┌─────────────────────────────────────────────────────────────────────┐
│  VS Code Status Bar (底部状态栏)                                      │
├─────────────────────────────────────────────────────────────────────┤
│  [🧪 Build UT] [🗑️ Build Clean] [🐛 Build VG] [🚀 Build CI]  ...    │
│         ▲              ▲              ▲              ▲               │
│      点击这里       点击这里       点击这里       点击这里              │
└─────────────────────────────────────────────────────────────────────┘
```

**特点 / Features:**
- 🖱️ 鼠标悬停显示完整命令 / Hover to see full command
- 🎨 自定义图标（VS Code 内置图标）/ Custom icons (VS Code built-in)
- ⚡ 一键执行命令 / One-click command execution
- 🔄 配置更改自动更新 / Auto-update on config change

### 2. 命令面板视图 / Command Palette View

按 `Ctrl+Shift+P` (或 Mac 上的 `Cmd+Shift+P`)，输入 "CI"：
Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) and type "CI":

```
┌─────────────────────────────────────────────────────────────────────┐
│  > CI                                                                │
├─────────────────────────────────────────────────────────────────────┤
│  ▸ CI: Show All Commands                                            │
│  ▸ CI: Run Command 1                                                │
│  ▸ CI: Run Command 2                                                │
│  ▸ CI: Run Command 3                                                │
│  ▸ CI: Run Command 4                                                │
└─────────────────────────────────────────────────────────────────────┘
```

选择 "CI: Show All Commands" 后：
After selecting "CI: Show All Commands":

```
┌─────────────────────────────────────────────────────────────────────┐
│  > Select a command to execute                                       │
├─────────────────────────────────────────────────────────────────────┤
│  🧪 Build UT                                    ./build.sh ut        │
│  🗑️ Build Clean                                 ./build.sh clean     │
│  🐛 Build VG                                    ./build.sh vg        │
│  🚀 Build CI                                    ./build.sh ci        │
└─────────────────────────────────────────────────────────────────────┘
       ▲                                                  ▲
    命令名称                                          实际命令
  (Display Name)                               (Actual Command)
```

### 3. 终端执行视图 / Terminal Execution View

点击按钮后，命令会在终端中执行：
After clicking a button, the command executes in the terminal:

```
┌─────────────────────────────────────────────────────────────────────┐
│  TERMINAL: CI on Click                                          [×]  │
├─────────────────────────────────────────────────────────────────────┤
│  $ ./build.sh ut                                                     │
│  ==========================================                           │
│  Running Unit Tests...                                               │
│  ==========================================                           │
│  ✓ Test suite: Authentication                                        │
│  ✓ Test suite: Data Processing                                       │
│  ✓ Test suite: API Endpoints                                         │
│                                                                       │
│  All tests passed! ✅                                                │
│  $                                                                   │
└─────────────────────────────────────────────────────────────────────┘
```

**终端特性 / Terminal Features:**
- 🔄 自动创建或复用终端 / Auto-create or reuse terminal
- 📍 在正确的工作目录执行 / Execute in correct working directory
- 👀 实时查看命令输出 / See command output in real-time
- 📝 命令历史记录 / Command history available

### 4. 通知消息 / Notification Messages

执行命令时会显示通知：
Notifications appear when executing commands:

```
┌─────────────────────────────────────────────────────────────────────┐
│  ℹ️  Executing: Build UT                                        [×]  │
└─────────────────────────────────────────────────────────────────────┘
```

## 配置界面 / Configuration Interface

### 项目设置 / Project Settings (`.vscode/settings.json`)

```json
{
  // 命令配置 / Commands configuration
  "ci-on-click.commands": [
    {
      "name": "Build UT",           // 按钮显示名称 / Button display name
      "command": "./build.sh ut",   // 要执行的命令 / Command to execute
      "icon": "$(beaker)"           // 图标（可选）/ Icon (optional)
    },
    {
      "name": "Build Clean",
      "command": "./build.sh clean",
      "icon": "$(trash)"
    }
  ],
  
  // 工作目录 / Working directory
  "ci-on-click.workingDirectory": "${workspaceFolder}",
  
  // 显示状态栏按钮 / Show status bar buttons
  "ci-on-click.showStatusBarButtons": true
}
```

### VS Code 设置界面 / VS Code Settings UI

在 VS Code 设置中搜索 "CI on Click"：
Search for "CI on Click" in VS Code settings:

```
┌─────────────────────────────────────────────────────────────────────┐
│  Settings                                                            │
├─────────────────────────────────────────────────────────────────────┤
│  Search settings: CI on Click                                  [🔍] │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  CI on Click                                                          │
│  ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│  ☑ Show Status Bar Buttons                                          │
│    Show command buttons in the status bar                            │
│                                                                       │
│  Working Directory                                                    │
│    ${workspaceFolder}                                                │
│    Working directory for commands                                    │
│                                                                       │
│  Commands                                                             │
│    [Edit in settings.json]                                           │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

## 使用场景演示 / Usage Scenarios

### 场景 1: 快速运行单元测试 / Scenario 1: Quick Unit Test Run

```
操作步骤 / Steps:
1. 👆 点击状态栏的 "🧪 Build UT" 按钮
   Click "🧪 Build UT" button in status bar

2. 👁️ 观察终端自动打开并执行 ./build.sh ut
   Watch terminal open and execute ./build.sh ut

3. ✅ 查看测试结果
   View test results

用时 / Time: < 1 秒 (vs 手动输入 ~5-10 秒)
         < 1 second (vs manual typing ~5-10 seconds)
```

### 场景 2: 清理构建产物 / Scenario 2: Clean Build Artifacts

```
操作步骤 / Steps:
1. 👆 点击 "🗑️ Build Clean" 按钮
   Click "🗑️ Build Clean" button

2. 🧹 自动执行清理命令
   Automatically execute clean command

3. ✅ 清理完成
   Cleaning complete

比手动操作节省时间 / Saves time vs manual operation
```

### 场景 3: 运行完整 CI 流程 / Scenario 3: Run Full CI Pipeline

```
操作步骤 / Steps:
1. 👆 点击 "🚀 Build CI" 按钮
   Click "🚀 Build CI" button

2. 📊 观察 CI 流程执行:
   Watch CI pipeline execution:
   - Linting ✓
   - Building ✓
   - Testing ✓
   - Reporting ✓

3. ✅ CI 完成
   CI complete
```

### 场景 4: 使用命令面板 / Scenario 4: Using Command Palette

```
操作步骤 / Steps:
1. ⌨️ 按 Ctrl+Shift+P
   Press Ctrl+Shift+P

2. 🔍 输入 "CI: Show"
   Type "CI: Show"

3. 👆 选择 "CI: Show All Commands"
   Select "CI: Show All Commands"

4. 📋 从列表中选择要执行的命令
   Select command to execute from list

5. ✅ 命令执行
   Command executes

适合需要在多个命令中选择的场景
Good for scenarios where you need to choose from multiple commands
```

## 自定义示例 / Customization Examples

### Python 开发者 / Python Developer

```json
{
  "ci-on-click.commands": [
    {
      "name": "Run Tests",
      "command": "pytest -v",
      "icon": "$(beaker)"
    },
    {
      "name": "Coverage",
      "command": "pytest --cov --cov-report=html",
      "icon": "$(graph)"
    },
    {
      "name": "Lint",
      "command": "pylint src/ tests/",
      "icon": "$(checklist)"
    },
    {
      "name": "Format",
      "command": "black . && isort .",
      "icon": "$(paintcan)"
    }
  ]
}
```

**状态栏效果 / Status Bar Effect:**
```
[🧪 Run Tests] [📊 Coverage] [☑️ Lint] [🎨 Format]
```

### Node.js/TypeScript 开发者 / Node.js/TypeScript Developer

```json
{
  "ci-on-click.commands": [
    {
      "name": "Dev Server",
      "command": "npm run dev",
      "icon": "$(play)"
    },
    {
      "name": "Build",
      "command": "npm run build",
      "icon": "$(tools)"
    },
    {
      "name": "Test Watch",
      "command": "npm run test:watch",
      "icon": "$(eye)"
    },
    {
      "name": "Lint Fix",
      "command": "npm run lint:fix",
      "icon": "$(wrench)"
    }
  ]
}
```

**状态栏效果 / Status Bar Effect:**
```
[▶️ Dev Server] [🔧 Build] [👁️ Test Watch] [🔨 Lint Fix]
```

### C/C++ 开发者 / C/C++ Developer

```json
{
  "ci-on-click.commands": [
    {
      "name": "Make",
      "command": "make -j$(nproc)",
      "icon": "$(tools)"
    },
    {
      "name": "Clean",
      "command": "make clean",
      "icon": "$(trash)"
    },
    {
      "name": "Debug Build",
      "command": "make DEBUG=1",
      "icon": "$(bug)"
    },
    {
      "name": "Run",
      "command": "./bin/myapp",
      "icon": "$(play)"
    }
  ]
}
```

**状态栏效果 / Status Bar Effect:**
```
[🔧 Make] [🗑️ Clean] [🐛 Debug Build] [▶️ Run]
```

## 图标参考 / Icon Reference

常用图标速查表 / Quick Icon Reference:

```
构建 / Build:
$(tools)    🔧  - 工具 / Tools
$(gear)     ⚙️  - 配置 / Configuration
$(package)  📦  - 打包 / Package

测试 / Testing:
$(beaker)   🧪  - 测试 / Test
$(bug)      🐛  - 调试 / Debug
$(check)    ✓   - 检查 / Check

运行 / Run:
$(play)     ▶️  - 播放/运行 / Play/Run
$(rocket)   🚀  - 启动 / Launch
$(pulse)    💗  - 运行中 / Running

清理 / Cleanup:
$(trash)    🗑️  - 删除/清理 / Delete/Clean
$(close)    ×   - 关闭 / Close
$(refresh)  🔄  - 刷新 / Refresh

分析 / Analysis:
$(graph)    📊  - 图表 / Chart
$(search)   🔍  - 搜索 / Search
$(eye)      👁️  - 查看 / View

编辑 / Edit:
$(edit)     ✏️  - 编辑 / Edit
$(paintcan) 🎨  - 格式化 / Format
$(checklist)☑️  - 检查列表 / Checklist

文件 / Files:
$(file)     📄  - 文件 / File
$(folder)   📁  - 文件夹 / Folder
$(save)     💾  - 保存 / Save
```

更多图标请访问 / More icons at:
https://code.visualstudio.com/api/references/icons-in-labels

## 故障排除可视化 / Visual Troubleshooting

### 问题: 看不到状态栏按钮 / Issue: Status bar buttons not visible

**检查清单 / Checklist:**
```
□ 扩展是否已激活？
  □ Extension activated?
  检查 / Check: Help → Toggle Developer Tools → Console
  应该看到 / Should see: "CI on Click extension is now active!"

□ 配置是否正确？
  □ Configuration correct?
  检查 / Check: .vscode/settings.json 中的 ci-on-click.commands

□ showStatusBarButtons 是否为 true？
  □ showStatusBarButtons set to true?
  检查 / Check: ci-on-click.showStatusBarButtons 设置

□ 是否需要重启 VS Code？
  □ Need to restart VS Code?
  尝试 / Try: 重新加载窗口 / Reload Window (Ctrl+Shift+P → Reload Window)
```

### 问题: 命令执行失败 / Issue: Command execution fails

**诊断步骤 / Diagnostic Steps:**
```
1. ��️ 检查终端输出 / Check terminal output
   ┌─────────────────────────────────────────┐
   │ TERMINAL: CI on Click                   │
   ├─────────────────────────────────────────┤
   │ $ ./build.sh ut                         │
   │ bash: ./build.sh: Permission denied     │ ← 权限问题 / Permission issue
   └─────────────────────────────────────────┘
   
   解决 / Solution: chmod +x build.sh

2. 🔍 检查工作目录 / Check working directory
   命令应该在正确的目录执行
   Commands should execute in correct directory
   
   解决 / Solution: 设置 ci-on-click.workingDirectory

3. 🧪 在终端手动测试 / Test manually in terminal
   在终端中直接运行命令，看是否有效
   Run command directly in terminal to verify
```

## 开发者工具视图 / Developer Tools View

### 查看扩展日志 / Viewing Extension Logs

```
打开开发者工具 / Open Developer Tools:
Help → Toggle Developer Tools

在 Console 中查看日志 / View logs in Console:
┌─────────────────────────────────────────────────────────────────────┐
│  Console                                               [🔍] Filter    │
├─────────────────────────────────────────────────────────────────────┤
│  CI on Click extension is now active!                                │
│  Command registered: ci-on-click.runCommand1                         │
│  Command registered: ci-on-click.runCommand2                         │
│  Command registered: ci-on-click.runCommand3                         │
│  Command registered: ci-on-click.runCommand4                         │
│  Command registered: ci-on-click.showCommands                        │
│  Status bar buttons created: 4                                       │
└─────────────────────────────────────────────────────────────────────┘
```

## 总结 / Summary

这个可视化指南展示了：
This visual guide demonstrates:

✅ 状态栏按钮的外观和位置 / Status bar button appearance and location
✅ 命令面板的使用方式 / Command palette usage
✅ 终端执行的过程 / Terminal execution process
✅ 配置文件的结构 / Configuration file structure
✅ 不同使用场景的操作流程 / Operation flow for different scenarios
✅ 常用图标参考 / Common icon reference
✅ 故障排除的可视化步骤 / Visual troubleshooting steps

**现在你可以开始使用了！/ You can start using it now!** 🚀

```
快速开始三步走 / Quick Start in 3 Steps:
1. 📂 打开项目 / Open project:        code .
2. 🔨 编译 / Compile:                 npm run compile
3. 🐛 测试 / Test:                    Press F5

祝使用愉快！/ Happy coding! 🎉
```
