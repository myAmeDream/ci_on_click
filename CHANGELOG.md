# Change Log

All notable changes to the "ci-on-click" extension will be documented in this file.

## [0.0.1] - 2026-02-07

### Added
- Initial release of CI on Click extension
- Status bar buttons for quick command execution
- Command palette integration with "CI: Show All Commands"
- Configurable command list with name, command, and icon
- Support for custom working directory
- Option to show/hide status bar buttons
- Pre-configured default commands for build.sh (ut, clean, vg, ci)
- Terminal integration for command execution
- Multi-language README (English/Chinese)
- Example build.sh script for testing

### Features
- Execute up to 4 commands via status bar buttons
- Execute any configured command via quick pick menu
- Automatic terminal creation and reuse
- VS Code icon support for command buttons
- Project-level and user-level configuration
- Working directory variable substitution (${workspaceFolder})
