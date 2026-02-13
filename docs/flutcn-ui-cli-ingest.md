================================================
FILE: README.md
================================================

# Flutcn UI CLI

![Dart](https://img.shields.io/badge/Dart-3.6.2-blue.svg) ![License](https://img.shields.io/badge/License-MIT-green.svg) ![GitHub](https://img.shields.io/github/stars/OmarElhassaniAlaoui/flutcn_ui)

**Flutcn UI** is a command-line interface (CLI) tool designed to streamline Flutter development by automating the setup of UI themes and the addition of pre-defined widgets. It integrates with your Flutter project to provide a consistent design system, leveraging customizable themes and a widget registry.

## Features

- **Project Initialization**: Set up your Flutter project with a theme directory, widget directory, and configuration file.
- **Smart Widget Management**:
  - Add individual widgets or select multiple from an interactive list
  - Overwrite confirmation for existing files
  - Batch operations for multiple components
- **Customizable Themes**: Choose from base color palettes (e.g., Zinc, Slate, Gray) and styles (e.g., New York).
- **Interactive Experience**:
  - Visual spinners for long operations
  - Conflict resolution prompts
  - Color-coded output messages

## Prerequisites

- **Dart SDK**: Version 3.6.2 or higher.
- **Flutter**: Installed and configured (required for Flutter projects where the CLI is used).

## Installation

### From Source

Clone the repository and install locally:

```bash
git clone https://github.com/OmarElhassaniAlaoui/flutcn_ui.git
cd flutcn_ui
dart pub get
dart pub global activate --source path .
```

### From Pub

Install globally with:

```bash
dart pub global activate flutcn_ui
```

Ensure the Dart `pub` cache bin directory (e.g., `~/.pub-cache/bin`) is in your system's PATH.

## Usage

Run `flutcn_ui` commands from the root of your Flutter project (where `pubspec.yaml` exists).

### Initialize a Project

Set up Flutcn UI in your project:

```bash
flutcn_ui init [--default]
```

- **Without `--default`**: Prompts for:
  - **Theme Path**: Where theme files are stored (default: `lib/themes`)
  - **Widgets Path**: Where widget files are stored (default: `lib/widgets`)
  - **Style**: UI style (options: `new-york`, `default`)
  - **Base Color**: Color palette (options: `zinc`, `slate`, `gray`, etc.)
- **With `--default`**: Uses defaults:
  - Theme Path: `lib/themes`
  - Widgets Path: `lib/widgets`
  - Style: `new-york`
  - Base Color: `zinc`

**Output**:

- Creates theme files with selected palette and theme
- Generates configuration file `flutcn.config.json`

**Examples**:

```bash
# Interactive setup
flutcn_ui init

# Quick start with defaults
flutcn_ui init --default
```

### Add Widgets

Add components from the registry:

**Single Widget**:

```bash
flutcn_ui add <widget-name>
```

**Multiple Widgets (Interactive)**:

```bash
flutcn_ui add
# Then select from the widget list using spacebar
```

**Features**:

- Automatically detects existing files
- Prompts to overwrite, skip, or cancel
- Preserves your customizations when skipping

**Examples**:

```bash
# Add a single widget
flutcn_ui add button

# Multi-select interface
flutcn_ui add
? Select widgets: (Use space to choose)
✔ [•] button
  [ ] card
  [•] avatar
```

### List Available Widgets

Discover components in the registry:

```bash
flutcn_ui list
```

**Output**:

- Interactive multi-select interface
- Batch download capability
- Shows download progress and results

## Configuration

The `flutcn.config.json` file controls project settings:

```json
{
  "widgetsPath": "lib/widgets",
  "themePath": "lib/themes",
  "style": "new-york",
  "baseColor": "zinc"
}
```

**Note**: Manual edits are possible, but re-running `init` is recommended for major changes.

## Dependencies

The generated theme requires the `google_fonts` package. Add to `pubspec.yaml`:

```yaml
dependencies:
  google_fonts: ^6.0.0
```

Run `flutter pub get` after adding this dependency.

## Troubleshooting

- **Existing File Conflicts**:
  - Use overwrite/skip prompts during add operations
  - Delete existing files manually if needed
- **Component Not Found**:
  - Verify registry connectivity
  - Check available widgets with `flutcn_ui list`
- **Configuration Issues**:
  - Re-initialize with `flutcn_ui init`
  - Validate JSON syntax in `flutcn.config.json`

## Development

### Project Structure

- `bin/`: CLI entry points and commands
- `lib/src/core/`: Utilities and constants
- `lib/src/data/`: Data layer services
- `lib/src/domain/`: Business logic and entities

### Recent Improvements

- ✔ Interactive multi-widget selection
- ✔ File conflict resolution system
- ✔ Batch operation progress tracking
- ✔ Enhanced error handling

## Roadmap ✨

- [ ] Delete unused widgets command
- [ ] Version diff checking
- [ ] Component update system
- [ ] Template override support

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push to branch (`git push origin feature-name`)
5. Open a Pull Request

For major changes, please open an issue first to discuss proposed changes.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- Inspired by [Shadcn UI](https://ui.shadcn.com/)'s design philosophy
- Built with Dart's powerful CLI capabilities
- Supported by the Flutter community's innovations

## Maintainers ✨

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/OmarElhassaniAlaoui"> 
        <img src="https://avatars.githubusercontent.com/u/102819564?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>Omar Elhassani Alaoui</b></sub>
      </a>
    </td>
  </tr>
</table>

================================================
FILE: analysis_options.yaml
================================================

# This file configures the static analysis results for your project (errors,

# warnings, and lints).

#

# This enables the 'recommended' set of lints from `package:lints`.

# This set helps identify many issues that may lead to problems when running

# or consuming Dart code, and enforces writing Dart using a single, idiomatic

# style and format.

#

# If you want a smaller set of lints you can change this to specify

# 'package:lints/core.yaml'. These are just the most critical lints

# (the recommended set includes the core lints).

# The core lints are also what is used by pub.dev for scoring packages.

include: package:lints/recommended.yaml

# Uncomment the following section to specify additional rules.

# linter:

# rules:

# - camel_case_types

# analyzer:

# exclude:

# - path/to/excluded/files/\*\*

# For more information about the core and recommended set of lints, see

# https://dart.dev/go/core-lints

# For additional information about configuring this file, see

# https://dart.dev/guides/language/analysis-options

================================================
FILE: CHANGELOG.md
================================================

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.5] - 2026-02-12

### Fixed

- Fix `InitUseCase` silently discarding repository failures (always returned success)
- Catch `http.ClientException` for DNS/network failures (shows friendly offline message)
- Remove blanket try-catch in `init()` that swallowed all error context
- Move config file creation to last step in init (prevents broken half-initialized state)
- Fix `Directory('flutcn.config.json')` check that always returned false

### Added

- Config field validation with clear error messages in `fromJson()`
- Centralized `ConfigReader` utility replacing inline JSON parsing in commands
- HTTP request timeouts (30 seconds) and offline detection
- Granular exception-to-failure mapping in repository
- Friendly error messages in spinner helper
- Unit tests for entities, repository, and use cases (40 tests)

### Changed

- Use cases pass through `Either` from repositories (no unwrapping in domain layer)

## [1.1.4] - 2026-02-11

### Fixed

- Remove `google_fonts` from CLI dependencies (not used directly, caused Dart SDK version conflict in CI)

## [1.1.3] - 2026-02-11

### Fixed

- Make `ApiService.get()` prepend `baseUrl` consistently with other HTTP methods
- Correct `widgetsPath` parameter typo in config file creation
- Rename misspelled files: `qestions.dart`, `checko_box_chooser.dart`, `app_pallete.dart`
- Make `ListUseCase` return `Either<Failure, T>` instead of throwing exceptions

### Added

- CI/CD workflows for automated releases and pub.dev publishing
- Version bump script (`scripts/bump_version.sh`)
- Dark/light theme toggle in example app

### Changed

- Widget URL construction uses relative paths instead of hardcoded base URLs
- Migrated deprecated Flutter APIs in example app (Material 3)

## [1.1.2] - 2025-03-28

### Changed

- Improve output formatting and cleanup code in commands and constants

## [1.1.1] - 2025-03-27

### Fixed

- Remove development mode checks and use production URLs consistently

### Changed

- Update ListCommand to include style in widget link

## [1.1.0] - 2025-03-25

### Added

- Interactive multi-widget selection in `list` command
- File overwrite confirmation prompts
- Skipped downloads tracking
- Enhanced conflict resolution system

### Changed

- Improved README documentation
- Better error handling for network operations
- Color-coded terminal output

### Fixed

- Concurrent spinner display issues
- File existence check reliability

================================================
FILE: CLAUDE.md
================================================

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flutcn UI is a CLI tool for Flutter developers that automates UI theme setup and widget management. It fetches pre-built components from a remote registry (https://flutcnui.netlify.app) and integrates them into Flutter projects with customizable themes.

## Common Commands

### Development & Testing

```bash
# Install dependencies
dart pub get

# Install CLI globally from source
dart pub global activate --source path .

# Run the CLI (when installed globally)
flutcn_ui init
flutcn_ui add <widget-name>
flutcn_ui list

# Run the CLI directly from source (without global install)
dart run bin/flutcn_ui.dart init
dart run bin/flutcn_ui.dart add button
dart run bin/flutcn_ui.dart list

# Linting
dart analyze

# Run tests (when they exist)
dart test

# Build runner (if code generation is added)
dart run build_runner build --delete-conflicting-outputs
```

### Testing CLI Commands Locally

The CLI must be run from within a Flutter project directory (where `pubspec.yaml` exists). For testing:

```bash
cd example
dart run ../bin/flutcn_ui.dart init --default
dart run ../bin/flutcn_ui.dart add button
```

## Architecture

### Clean Architecture Layers

The codebase follows Clean Architecture principles with clear separation:

**1. Domain Layer** (`lib/src/domain/`)

- **Entities**: Pure business objects (e.g., `WidgetEntity`, `InitConfigEntity`)
- **Repositories**: Abstract interfaces defining contracts
- **Use Cases**: Business logic encapsulated in single-responsibility classes
- Dependencies: None (most inner layer)

**2. Data Layer** (`lib/src/data/`)

- **Models**: Data transfer objects that extend entities with JSON serialization
- **Repositories**: Concrete implementations of domain repository interfaces
- **Interfaces**: Abstract data source contracts (e.g., `CommandInterface`)
- **Services**: Implementation of interfaces (e.g., `CommandInterfaceImpl`, `ApiService`)
- Dependencies: Only on domain layer

**3. Presentation Layer** (`bin/`)

- **Commands**: CLI command implementations using `args` package
- **Injection Container**: Dependency injection setup using GetIt
- Dependencies: On both domain and data layers (outer layer)

### Key Patterns

**Dependency Injection with GetIt**

- Registration happens in `bin/injection_container.dart`
- Use `sl<Type>()` to retrieve dependencies in commands
- Layer order: Use Cases → Repository → Data Sources → Services

**Functional Error Handling**

- Uses `dartz` package for `Either<Failure, Success>` pattern
- Left side: Failure (error cases)
- Right side: Success value
- Repositories return `Either<Failure, T>`, use cases pass through `Either`
- Commands unwrap `Either` with `.fold()` inside spinner actions

**Entity-Model Pattern**

- Entities: Pure domain objects in `domain/entities/`
- Models: Data layer objects with `toModel()` and `fromJSON()` in `data/models/`
- Models extend entities and add serialization capabilities

### Data Flow Example

```
CLI Command (bin/commands/)
    ↓
Use Case (domain/usecases/)
    ↓
Repository Interface (domain/repository/)
    ↓
Repository Implementation (data/repository/)
    ↓
Data Interface (data/interfaces/)
    ↓
Data Service Implementation (data/services/)
    ↓
API Service (core/services/)
```

## Core Components

### API Service

- Abstract `ApiService` interface in `lib/src/core/services/api_service.dart`
- HTTP implementation in `lib/src/data/services/api_service.dart`
- Base URLs configured in `lib/src/core/constants/api_constants.dart`
- Fetches widgets and themes from `https://flutcnui.netlify.appregistry/`

### Configuration File

- Generated at project root: `flutcn.config.json`
- Stores: widgets path, theme path, style, base color
- Must exist before running `add` or `list` commands

### Spinner Helper

- Located in `lib/src/core/utils/spinners.dart`
- Provides visual feedback for long-running operations
- Pattern: `_spinnerHelper.runWithSpinner(message, onSuccess, onError, action)`

## Adding New Commands

1. Create command class in `bin/commands/<command_name>.dart` extending `Command`
2. Implement required fields: `name`, `description`
3. Override `run()` method
4. Register in `bin/flutcn_ui.dart` with `runner.addCommand(YourCommand())`
5. Create corresponding use case in `lib/src/domain/usecases/`
6. Add repository method if needed
7. Register use case in `bin/injection_container.dart`

## Widget Registry Integration

Widgets are fetched from the remote registry API:

- Registry base URL: `https://flutcnui.netlify.appregistry/`
- Widget list endpoint: `/widgets`
- Individual widget files: returned in widget metadata
- Theme files: `/colorScheme/{style}/{baseColor}` and `/theme/{style}`

## File Structure Conventions

When CLI runs `init`:

- Creates `flutcn.config.json` in project root
- Creates theme directory (default: `lib/themes/`)
- Generates `app_theme.dart` and `app_palette.dart`
- Optionally adds `google_fonts` dependency to `pubspec.yaml`

When CLI runs `add`:

- Creates widget directory (default: `lib/widgets/`)
- Writes widget files with `.dart` extension
- Checks for existing files and prompts for overwrite

## Code Style

- Use Clean Architecture layer separation strictly
- All business logic belongs in use cases, not commands
- Repository methods return `Either<Failure, T>`
- Use cases pass through `Either` from repositories (no unwrapping in domain layer)
- Commands unwrap `Either` with `.fold()` inside spinner actions for user-facing messages
- Prefer composition over inheritance
- Use dependency injection for all external dependencies

## Branching Strategy (Git Flow)

- **Production branch:** `main`
- **Development branch:** `dev`
- **Feature branches:** `feat/<name>` — branch from `dev`, merge back to `dev`
- **Bugfix branches:** `bugfix/<name>` — branch from `dev`, merge back to `dev`
- **Release branches:** `release/v<version>` — branch from `dev`, merge to `main` and `dev`
- **Hotfix branches:** `hotfix/v<version>` — branch from `main`, merge to `main` and `dev`

Always commit before running `git flow release/hotfix finish` — finishing without committing leaves changes staged on the target branch with no tag created.

## CI/CD

### Workflows (`.github/workflows/`)

| Workflow      | Trigger               | Purpose                                                              |
| ------------- | --------------------- | -------------------------------------------------------------------- |
| `ci.yml`      | PR to `main` or `dev` | `dart analyze`, `dart format` check                                  |
| `release.yml` | Push to `main`        | Extract version from `pubspec.yaml`, create git tag & GitHub release |
| `publish.yml` | Tag push `v*`         | Verify version consistency, `dart analyze`, publish to pub.dev       |

### Release Process

1. Bump version in `pubspec.yaml` (use `scripts/bump_version.sh` or manually)
2. Update `CHANGELOG.md` with new version section
3. Merge to `main` (via git flow release/hotfix finish)
4. `release.yml` creates the tag and GitHub release automatically
5. Tag push triggers `publish.yml` which publishes to pub.dev

### CI Notes

- CI uses Dart SDK `3.6.2` (not Flutter) — `example/` is temporarily excluded during `dart pub get` since it's a Flutter project requiring Flutter SDK
- Publishing requires `PUB_CREDENTIALS` GitHub secret (pub.dev OAuth2 credentials)
- If using git flow (which creates tags locally), `release.yml` may skip tag creation — push tags explicitly or create GitHub releases manually

================================================
FILE: pubspec.yaml
================================================
name: flutcn_ui
description: A UI component library for Flutter inspired by shadcn/ui, providing modular and customizable widgets.
version: 1.1.5
homepage: https://flutcnui.netlify.appdocs
repository: https://github.com/OmarElhassaniAlaoui/flutcn_ui
issue_tracker: https://github.com/OmarElhassaniAlaoui/flutcn_ui/issues
environment:
sdk: ^3.6.2

# Add regular dependencies here.

dependencies:
args: ^2.6.0
cli_spin: ^1.0.1
dartz: ^0.10.1
equatable: ^2.0.7
get_it: ^9.0.0
http: ^1.3.0
io: ^1.0.5
path: ^1.8.0
prompts: ^2.0.0
dev_dependencies:
build_runner: ^2.4.6
lints: ^5.0.0
test: ^1.24.0
false_secrets:

- /bin/\*\*

executables:
flutcn_ui: flutcn_ui

================================================
FILE: lib/src/core/constants/api*constants.dart
================================================
class ApiConstants {
ApiConstants.*();

static const String baseDevUrl = 'http://localhost:3000/registry/';
static const String baseProdUrl = 'https://flutcnui.netlify.appregistry/';
}

================================================
FILE: lib/src/core/constants/app*constants.dart
================================================
class AppConstants {
AppConstants.*();
static const String baseUrl = 'https://flutcn.com/api/v1';

}

================================================
FILE: lib/src/core/constants/file*paths.dart
================================================
class FilePaths {
FilePaths.*();

static const String widgetPath = 'lib/widgets';
static const String themePath = 'lib/themes';
}

================================================
FILE: lib/src/core/constants/questions.dart
================================================
import 'package:flutcn_ui/src/core/utils/highlighter.dart';

class Questions {
Questions.\_();

static final Map<String, String> initCommandQuestions = {
'theme_path':
'Which path do you choose for setup ${"theme".highlight('\x1B[36m')} ?',
'widgets_path':
'Which path do you choose for ${"widgets".highlight('\x1B[36m')} ?',
};

static final Map<String, Map<String, dynamic>> initCommandListQuestions = {
'style': {
"question": 'Which ${"style".highlight('\x1B[36m')} do you want to use?',
"options": [
"new-york",
"default",
]
},
'base_color': {
"question": "Which ${"color".highlight('\x1B[36m')} do you want to use?",
"options": [
"Zinc",
"Slate",
"Gray",
]
},
'state_management': {
"question":
"Which ${"state managment".highlight('\x1B[36m')} do you want to use?",
"options": [
"Bloc",
"Provider",
"Riverpod",
]
},
};
}

================================================
FILE: lib/src/core/errors/exceptions.dart
================================================
class ServerException implements Exception {
final String message;

ServerException({required this.message});

@override
String toString() => 'ServerException: $message';
}

class EmptyCacheException implements Exception {}

class OfflineException implements Exception {}

class ComponentNotFoundException implements Exception {
final String message;

ComponentNotFoundException({required this.message});

@override
String toString() => 'ComponentNotFoundException: $message';
}

class ThemeNotFoundException implements Exception {
final String message;

ThemeNotFoundException({required this.message});

@override
String toString() => 'ThemeNotFoundException: $message';
}

class DependencyNotFoundException implements Exception {
final String message;

DependencyNotFoundException({required this.message});

@override
String toString() => 'DependencyNotFoundException: $message';
}

class CircularDependencyException implements Exception {
final String message;

CircularDependencyException({required this.message});

@override
String toString() => 'CircularDependencyException: $message';
}

class InvalidConfigFileException implements Exception {
final String message;

InvalidConfigFileException({required this.message});

@override
String toString() => 'InvalidConfigFileException: $message';
}

class InvalidComponentFileException implements Exception {
final String message;

InvalidComponentFileException({required this.message});

@override
String toString() => 'InvalidComponentFileException: $message';
}
class InitializationException implements Exception {
final String message;
InitializationException([this.message = 'Failed to initialize project']);
}
// Add more exceptions as needed for other operations (e.g., file system errors, JSON parsing errors)

================================================
FILE: lib/src/core/errors/failures.dart
================================================
import 'package:equatable/equatable.dart';

abstract class Failure extends Equatable {
final String message; // Add a message property

Failure({required this.message}); // Constructor with message

@override
List<Object?> get props => [message]; // Include message in props
}

class OfflineFailure extends Failure {
OfflineFailure({required super.message});
}

class ServerFailure extends Failure {
ServerFailure({required super.message});
}

class ComponentNotFoundFailure extends Failure {
ComponentNotFoundFailure({required super.message});
}

class ThemeNotFoundFailure extends Failure {
ThemeNotFoundFailure({required super.message});
}

class DependencyNotFoundFailure extends Failure {
DependencyNotFoundFailure({required super.message});
}

class CircularDependencyFailure extends Failure {
CircularDependencyFailure({required super.message});
}

class InvalidConfigFileFailure extends Failure {
InvalidConfigFileFailure({required super.message});
}

class InvalidComponentFileFailure extends Failure {
InvalidComponentFileFailure({required super.message});
}

class GenericFailure extends Failure {
GenericFailure({required super.message});
}
class InitializationFailure extends Failure {
InitializationFailure() : super(message: 'Failed to initialize project');
}

================================================
FILE: lib/src/core/helpers/check_mode.dart
================================================
bool isDevMode() {
const bool isDebug = bool.fromEnvironment('dart.vm.product') == false;
return isDebug;
}

================================================
FILE: lib/src/core/services/api_service.dart
================================================
class ApiResponse {
ApiResponse(
this.body, [
this.status,
this.message,
]);

dynamic body;
int? status;
String? message;
}

abstract class ApiService {
Future<ApiResponse> get(
String endpoint, {
Map<String, dynamic>? query,
Map<String, dynamic>? headers,
});

Future<ApiResponse> post(
String endpoint, {
Map<String, dynamic>? data,
Map<String, dynamic>? headers,
});

Future<ApiResponse> update(
String endpoint, {
Map<String, dynamic>? data,
Map<String, dynamic>? query,
Map<String, dynamic>? headers,
});

Future<ApiResponse> put(
String endpoint, {
Map<String, dynamic>? data,
Map<String, dynamic>? query,
Map<String, dynamic>? headers,
});

Future<ApiResponse> delete(
String endpoint, {
Map<String, dynamic>? query,
Map<String, dynamic>? headers,
});
}

================================================
FILE: lib/src/core/usecase/usecase.dart
================================================
import 'package:dartz/dartz.dart';
import 'package:flutcn_ui/src/core/errors/failures.dart';

abstract class UseCase<T, Params> {
Future<Either<Failure, T>> call({Params params});
}

class NoParams {
const NoParams();
}

================================================
FILE: lib/src/core/utils/checkbox_chooser.dart
================================================
import 'dart:io';

class MultiCheckboxListChooser {
final List<String> options;
final Set<int> selectedIndices = {};
int \_selectedIndex = 0;
final bool \_isWindows = Platform.isWindows;

MultiCheckboxListChooser({required this.options});

Set<String> choose() {
\_setupConsole();
\_renderList();

    while (true) {
      final input = _getInput();
      if (input == -1) continue;

      if (input == 10) {
        // Enter key
        _cleanupConsole();
        return selectedIndices.map((index) => options[index]).toSet();
      }

      if (input == 32) {
        // Space bar
        _toggleSelection();
      } else if (input == _upArrow) {
        _selectedIndex = (_selectedIndex - 1).clamp(0, options.length - 1);
      } else if (input == _downArrow) {
        _selectedIndex = (_selectedIndex + 1).clamp(0, options.length - 1);
      }

      _renderList();
    }

}

void \_toggleSelection() {
if (selectedIndices.contains(\_selectedIndex)) {
selectedIndices.remove(\_selectedIndex);
} else {
selectedIndices.add(\_selectedIndex);
}
}

void \_renderList() {
final buffer = StringBuffer();
for (var i = 0; i < options.length; i++) {
final isSelected = selectedIndices.contains(i);
final isCurrent = i == \_selectedIndex;

      // Checkbox with green color for selected items
      final checkbox = isSelected ? '\x1B[32m[•]\x1B[0m' : '[ ]';

      // Text with cyan color for current item
      final text = isCurrent ? '\x1B[36m${options[i]}\x1B[0m' : options[i];

      buffer.writeln('$checkbox $text');
    }
    _moveCursorUp(options.length);
    stdout.write(buffer.toString());

}

void \_moveCursorUp(int lines) => stdout.write('\x1B[${lines}A');
int get \_upArrow => \_isWindows ? 72 : 65;
int get \_downArrow => \_isWindows ? 80 : 66;

void \_setupConsole() {
stdin.echoMode = false;
stdin.lineMode = false;
stdout.writeln('\n' \* options.length); // Create space for the list
}

void \_cleanupConsole() {
stdin.echoMode = true;
stdin.lineMode = true;
}

int \_getInput() {
final input = stdin.readByteSync();
if (\_isWindows) return input;

    // Handle Linux/Mac arrow keys (3-byte sequence)
    if (input == 27) {
      if (stdin.readByteSync() == 91) {
        return stdin.readByteSync();
      }
    }
    return input;

}
}

================================================
FILE: lib/src/core/utils/config_reader.dart
================================================
import 'dart:convert';
import 'dart:io';

import 'package:flutcn_ui/src/core/errors/exceptions.dart';
import 'package:flutcn_ui/src/domain/entities/init_config_entity.dart';

class ConfigReader {
static const String configFileName = 'flutcn.config.json';

/// Reads and validates the config file, returning a typed entity.
static Future<InitConfigEntity> readConfig() async {
final file = File(configFileName);

    if (!file.existsSync()) {
      throw InvalidConfigFileException(
        message:
            'Config file not found. Run "flutcn_ui init" first.',
      );
    }

    try {
      final content = await file.readAsString();
      final json = jsonDecode(content) as Map<String, dynamic>;
      return InitConfigEntity.fromJson(json); // Validation happens here
    } on FormatException catch (e) {
      throw InvalidConfigFileException(
        message: 'Invalid JSON in $configFileName: ${e.message}',
      );
    } on InvalidConfigFileException {
      rethrow;
    } catch (e) {
      throw InvalidConfigFileException(
        message: 'Error reading $configFileName: $e',
      );
    }

}

/// Checks whether the config file exists.
static bool configExists() {
return File(configFileName).existsSync();
}
}

================================================
FILE: lib/src/core/utils/highlighter.dart
================================================
extension Highlighter on String {
String highlight(String color) {
const String reset = '\x1B[0m';
return '$color$this$reset';
}
}

================================================
FILE: lib/src/core/utils/spinners.dart
================================================
import 'package:cli_spin/cli_spin.dart';
import 'package:flutcn_ui/src/core/errors/exceptions.dart';

class SpinnerHelper {

CliSpin? \_spinner;

/// Starts a spinner with a given message
void start(String message) {
\_spinner = CliSpin(
text: message,
spinner: CliSpinners.dots,
color: CliSpinnerColor.green,
)..start();
}

/// Stops the spinner and displays a success message
void success(String message) {
\_spinner?.success(message);
}

/// Stops the spinner and displays an error message
void error(String message) {
\_spinner?.fail(message);
}

/// Runs an asynchronous action with a spinner
Future<void> runWithSpinner({
required String message,
required Future<void> Function() action,
String? onSuccess,
String? onError,
}) async {
start(message);
try {
await action();
success(onSuccess ?? message);
} catch (e) {
error('$onError: ${\_friendlyMessage(e)}');
rethrow;
}
}

String \_friendlyMessage(Object e) {
if (e is OfflineException) {
return 'No internet connection. Check your network and try again.';
} else if (e is ServerException) {
return e.message;
} else if (e is ComponentNotFoundException) {
return e.message;
} else if (e is ThemeNotFoundException) {
return e.message;
} else if (e is InvalidConfigFileException) {
return e.message;
} else if (e is InitializationException) {
return e.message;
}
return e.toString();
}
}

================================================
FILE: lib/src/data/interfaces/command.dart
================================================
import 'package:flutcn_ui/src/data/models/init_config_model.dart';
import 'package:flutcn_ui/src/data/models/widget_model.dart';

abstract class CommandInterface {
Future<void> init({
required InitConfigModel config,
});

Future<WidgetModel> add({
required WidgetModel widget,
});

Future<List<WidgetModel>> list();
}

================================================
FILE: lib/src/data/models/init_config_model.dart
================================================
import 'package:flutcn_ui/src/domain/entities/init_config_entity.dart';

class InitConfigModel extends InitConfigEntity {
const InitConfigModel({
required super.themePath,
required super.widgetsPath,
required super.style,
required super.baseColor,
required super.installGoogleFonts,
// required super.stateManagement,
});

factory InitConfigModel.fromJson(Map<String, dynamic> json) {
// Validation is handled by InitConfigEntity.fromJson()
final entity = InitConfigEntity.fromJson(json);
return InitConfigModel(
themePath: entity.themePath,
widgetsPath: entity.widgetsPath,
style: entity.style,
baseColor: entity.baseColor,
installGoogleFonts: entity.installGoogleFonts,
);
}

@override
Map<String, dynamic> toJson() => {
'themePath': themePath,
'widgetsPath': widgetsPath,
'style': style,
'baseColor': baseColor,
'installGoogleFonts': installGoogleFonts,
// 'stateManagement': stateManagement,
};
}

================================================
FILE: lib/src/data/models/theme_model.dart
================================================
import 'package:flutcn_ui/src/data/models/widget_file_model.dart';
import 'package:flutcn_ui/src/domain/entities/theme_entity.dart';

class ThemeModel extends ThemeEntity {
const ThemeModel({
required super.name,
required super.description,
required super.image,
required super.link,
required List<WidgetFileModel> super.files,
});
}

================================================
FILE: lib/src/data/models/widget_file_model.dart
================================================
import 'package:flutcn_ui/src/domain/entities/widget_file_entity.dart';

class WidgetFileModel extends WidgetFile {
const WidgetFileModel({
required super.name,
required super.dir,
required super.content,
});
}

================================================
FILE: lib/src/data/models/widget_model.dart
================================================
import 'package:flutcn_ui/src/domain/entities/widget_entity.dart';

class WidgetModel extends WidgetEntity {
const WidgetModel({
super.name,
super.link,
super.content,
super.style,
});

factory WidgetModel.fromJSON(Map<String, dynamic> json) {
return WidgetModel(
name: json['name'],
link: json['link'],
content: json['content'],
style: json['style'],
);
}

@override
Map<String, dynamic> toJson() => {
'name': name,
'link': link,
'content': content,
'style': style,
};
}

================================================
FILE: lib/src/data/repository/command_repository_impl.dart
================================================
import 'package:dartz/dartz.dart';
import 'package:flutcn_ui/src/core/errors/exceptions.dart';
import 'package:flutcn_ui/src/data/models/widget_model.dart';
import 'package:flutcn_ui/src/domain/entities/init_config_entity.dart';
import 'package:flutcn_ui/src/domain/entities/widget_entity.dart';
import '../../core/errors/failures.dart';
import '../../domain/repository/command_repository.dart';
import '../interfaces/command.dart';

class CommandRepositoryImpl implements CommandRepository {
final CommandInterface commandInterface;

CommandRepositoryImpl(this.commandInterface);

@override
Future<Either<Failure, Unit>> initializeProject({
required InitConfigEntity config,
}) async {
try {
await commandInterface.init(
config: config.toModel(),
);
return const Right(unit);
} on OfflineException {
return Left(OfflineFailure(message: 'No internet connection'));
} on ThemeNotFoundException catch (e) {
return Left(ThemeNotFoundFailure(message: e.message));
} on ServerException catch (e) {
return Left(ServerFailure(message: e.message));
} on InvalidConfigFileException catch (e) {
return Left(InvalidConfigFileFailure(message: e.message));
} catch (e) {
return Left(InitializationFailure());
}
}

@override
Future<Either<Failure, WidgetEntity>> add(
{required WidgetEntity widget}) async {
try {
WidgetModel result = await commandInterface.add(
widget: widget.toModel(),
);
return Right(result);
} on OfflineException {
return Left(OfflineFailure(message: 'No internet connection'));
} on ComponentNotFoundException catch (e) {
return Left(ComponentNotFoundFailure(message: e.message));
} on ServerException catch (e) {
return Left(ServerFailure(message: e.message));
} catch (e) {
return Left(GenericFailure(message: e.toString()));
}
}

@override
Future<Either<Failure, List<WidgetModel>>> list() async {
try {
final widgets = await commandInterface.list();
return Right(widgets);
} on OfflineException {
return Left(OfflineFailure(message: 'No internet connection'));
} on ServerException catch (e) {
return Left(ServerFailure(message: e.message));
} catch (e) {
return Left(GenericFailure(message: e.toString()));
}
}
}

================================================
FILE: lib/src/data/services/api_service.dart
================================================
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:flutcn_ui/src/core/errors/exceptions.dart';
import 'package:flutcn_ui/src/core/services/api_service.dart';
import 'package:http/http.dart' as http;

class HttpServiceImpl extends ApiService {
final String baseUrl;
final Map<String, String> defaultHeaders;
static const \_timeout = Duration(seconds: 30);

HttpServiceImpl({
required this.baseUrl,
this.defaultHeaders = const {
"Content-Type": "application/json",
},
});

@override
Future<ApiResponse> get(
String endpoint, {
Map<String, dynamic>? query,
Map<String, dynamic>? headers,
}) async {
final uri = Uri.parse('$baseUrl$endpoint');
final response = await \_withErrorHandling(
() => http.get(uri, headers: {...defaultHeaders, ...?headers}),
);
return \_httpToApiResponse(response);
}

@override
Future<ApiResponse> post(
String endpoint, {
Map<String, dynamic>? data,
Map<String, dynamic>? headers,
}) async {
final uri = Uri.parse('$baseUrl$endpoint');
final response = await \_withErrorHandling(
() => http.post(
uri,
headers: {...defaultHeaders, ...?headers},
body: jsonEncode(data),
),
);
return \_httpToApiResponse(response);
}

@override
Future<ApiResponse> update(
String endpoint, {
Map<String, dynamic>? data,
Map<String, dynamic>? query,
Map<String, dynamic>? headers,
}) async {
final uri = Uri.parse('$baseUrl$endpoint').replace(queryParameters: query);
final response = await \_withErrorHandling(
() => http.patch(
uri,
headers: {...defaultHeaders, ...?headers},
body: jsonEncode(data),
),
);
return \_httpToApiResponse(response);
}

@override
Future<ApiResponse> put(
String endpoint, {
Map<String, dynamic>? data,
Map<String, dynamic>? query,
Map<String, dynamic>? headers,
}) async {
final uri = Uri.parse('$baseUrl$endpoint').replace(queryParameters: query);
final response = await \_withErrorHandling(
() => http.put(
uri,
headers: {...defaultHeaders, ...?headers},
body: jsonEncode(data),
),
);
return \_httpToApiResponse(response);
}

@override
Future<ApiResponse> delete(
String endpoint, {
Map<String, dynamic>? query,
Map<String, dynamic>? headers,
}) async {
final uri = Uri.parse('$baseUrl$endpoint').replace(queryParameters: query);
final response = await \_withErrorHandling(
() => http.delete(uri, headers: {...defaultHeaders, ...?headers}),
);
return \_httpToApiResponse(response);
}

/// Wraps an HTTP call with timeout and offline detection.
Future<http.Response> \_withErrorHandling(
Future<http.Response> Function() request,
) async {
try {
return await request().timeout(\_timeout);
} on SocketException {
throw OfflineException();
} on http.ClientException {
// The http package wraps SocketException in ClientException
// for DNS failures, connection refused, etc.
throw OfflineException();
} on TimeoutException {
throw ServerException(message: 'Request timed out after ${\_timeout.inSeconds} seconds');
}
}

ApiResponse \_httpToApiResponse(http.Response response) {
dynamic data;
final contentType = response.headers['content-type'];

    if (contentType?.contains('application/json') == true) {
      data = jsonDecode(response.body);
    } else {
      data = response.body;
    }

    return ApiResponse(
      data,
      response.statusCode,
      response.reasonPhrase,
    );

}
}

================================================
FILE: lib/src/data/services/command_interface_impl.dart
================================================
import 'dart:convert';
import 'dart:io';
import 'package:flutcn_ui/src/core/services/api_service.dart';
import 'package:flutcn_ui/src/data/models/init_config_model.dart';
import 'package:flutcn_ui/src/data/models/widget_model.dart';
import '../interfaces/command.dart';
import '../../core/errors/exceptions.dart';
import 'package:flutcn_ui/src/core/utils/spinners.dart';

class CommandInterfaceImpl implements CommandInterface {
final ApiService apiService;

CommandInterfaceImpl({required this.apiService});
final SpinnerHelper \_spinnerHelper = SpinnerHelper();
@override
Future<void> init({
required InitConfigModel config,
}) async {
// Create necessary directories
await \_createDirectory(config.themePath);
await \_createDirectory(config.widgetsPath);

    // Fetch theme files from registry (can throw OfflineException,
    // ThemeNotFoundException, etc. — these propagate to the repository)
    await _fetchAndCreateTheme(
      themePath: config.themePath,
      style: config.style,
      baseColor: config.baseColor.toLowerCase(),
    );

    if (config.installGoogleFonts) {
      await _addGoogleFontsDependency();
    }

    // Config file created LAST — only written if all operations above succeeded.
    // This prevents a broken half-initialized state where config exists
    // but theme files are missing.
    await _createConfigFile(config);

}

Future<void> \_createDirectory(String path) async {
final directory = Directory(path);
if (!directory.existsSync()) {
await directory.create(recursive: true);
}
}

Future<void> \_createConfigFile(InitConfigModel config) async {
final file = File('flutcn.config.json');
if (!file.existsSync()) {
final encoder = const JsonEncoder.withIndent(' ');
await file.writeAsString(encoder.convert(config.toJson()));
}
}

Future<void> \_fetchAndCreateTheme({
required String themePath,
required String style,
required String baseColor,
}) async {
// Use spinner to indicate theme fetching
await \_spinnerHelper.runWithSpinner(
message: 'Fetching theme files',
onSuccess: "Fetched theme files",
onError: "Error fetching theme files",
action: () async {
// Fetch palette colors from API
final paletteResponse = await apiService.get(
'/colorScheme/$style/$baseColor',
headers: {'Content-Type': 'text/plain'},
);

        // Fetch theme definition from API
        final themeResponse = await apiService.get(
          '/theme/$style',
          headers: {'Content-Type': 'text/plain'},
        );

        if (paletteResponse.status != 200) {
          throw ThemeNotFoundException(
            message:
                'Color scheme not found for style "$style" and color "$baseColor" (HTTP ${paletteResponse.status})',
          );
        }

        if (themeResponse.status != 200) {
          throw ThemeNotFoundException(
            message:
                'Theme not found for style "$style" (HTTP ${themeResponse.status})',
          );
        }

        final appThemeFile = File('$themePath/app_theme.dart');
        final appPaletteFile = File('$themePath/app_palette.dart');

        if (!appThemeFile.existsSync()) {
          await appThemeFile.create(recursive: true);
          await appPaletteFile.create(recursive: true);
          await appThemeFile.writeAsString(themeResponse.body.toString());
          await appPaletteFile.writeAsString(paletteResponse.body.toString());
        }
      },
    );

}

// Future<void> \_createDefaultTheme() async {
// final file = File('lib/themes/default_theme.dart');
// if (!file.existsSync()) {
// await file.create(recursive: true);
// await file.writeAsString(FilePaths.defaultThemePath);
// }
// }

Future<void> \_addGoogleFontsDependency() async {
await \_spinnerHelper.runWithSpinner(
message: 'Installing google_fonts dependency',
onSuccess: "Added google_fonts to pubspec.yaml",
onError: "Error adding google_fonts dependency",
action: () async {
final pubspecFile = File('pubspec.yaml');
if (!pubspecFile.existsSync()) {
throw InitializationException('pubspec.yaml not found');
}

        String content = await pubspecFile.readAsString();
        const dependency = '  google_fonts: ^6.0.0';

        if (!content.contains('google_fonts:')) {
          if (content.contains('dependencies:')) {
            content = content.replaceFirst(
              RegExp(r'dependencies:\s*\n'),
              'dependencies:\n$dependency\n',
            );
          } else {
            content += '\ndependencies:\n$dependency\n';
          }
          await pubspecFile.writeAsString(content);
        }
      },
    );

}

// Future<void> \_createTheme({
// String? themePath,
// required String paletteColors,
// required String appTheme,
// }) async {
// final appThemeFile = File('${themePath ?? 'lib/themes'}/app_theme.dart');
  //   final appPalleteFile =
  //       File('${themePath ?? 'lib/themes'}/app_palette.dart');
// if (!appThemeFile.existsSync()) {
// await appThemeFile.create(recursive: true);
// await appPalleteFile.create(recursive: true);
// await appThemeFile.writeAsString(appTheme);
// await appPalleteFile.writeAsString(paletteColors);
// }
// }

// NOTE: we don't need this for now

// Future<void> \_setupStateManagement(InitConfigModel config) async {
// final pubspecFile = File('pubspec.yaml');
// if (pubspecFile.existsSync()) {
// var content = await pubspecFile.readAsString();
// final dependencies = <String>[];

// switch (config.stateManagement.toLowerCase()) {
// case 'bloc':
// dependencies.add(' flutter_bloc: ^8.1.3');
// dependencies.add(' bloc: ^8.1.2');
// break;
// case 'provider':
// dependencies.add(' provider: ^6.0.5');
// break;
// case 'riverpod':
// dependencies.add(' flutter_riverpod: ^2.4.0');
// break;
// }

// if (dependencies.isNotEmpty) {
// if (!content.contains('dependencies:')) {
// content += '\ndependencies:\n';
// }
// for (final dep in dependencies) {
// if (!content.contains(dep)) {
// content = content.replaceFirst(
// RegExp(r'dependencies:.\*?\n'),
// 'dependencies:\n$dep\n',
// );
// }
// }
// await pubspecFile.writeAsString(content);

// print(
// '\n✓ Added ${config.stateManagement} dependencies to pubspec.yaml');
// print('Run "flutter pub get" to install the dependencies');
// }
// }
// }

@override
Future<WidgetModel> add({required WidgetModel widget}) async {
final response = await apiService.get(
widget.link!,
headers: {
'Content-Type': 'text/plain',
},
);

    if (response.status != 200) {
      throw ComponentNotFoundException(
        message: 'Widget "${widget.name}" not found (HTTP ${response.status})',
      );
    }

    return WidgetModel(
      name: widget.name,
      link: widget.link,
      content: response.body.toString(),
    );

}

@override
Future<List<WidgetModel>> list() async {
final response = await apiService.get('/widgets',
headers: {'Content-Type': 'application/json'});

    if (response.status != 200) {
      throw ServerException(
        message: 'Failed to fetch widgets (HTTP ${response.status})',
      );
    }

    final Map<String, dynamic> data = response.body;

    if (!data.containsKey('widgets')) {
      throw ServerException(
        message:
            'Unexpected API response: missing "widgets" key',
      );
    }

    final List<dynamic> widgetsJson = data['widgets'] ?? [];

    return widgetsJson
        .map((widgetJson) => WidgetModel.fromJSON(widgetJson))
        .toList();

}
}

================================================
FILE: lib/src/domain/entities/init_config_entity.dart
================================================
import 'package:equatable/equatable.dart';
import 'package:flutcn_ui/src/core/errors/exceptions.dart';
import 'package:flutcn_ui/src/data/models/init_config_model.dart';

class InitConfigEntity extends Equatable {
final String themePath;
final String widgetsPath;
final String style;
final String baseColor;
final bool installGoogleFonts;
// final String stateManagement;

const InitConfigEntity({
required this.themePath,
required this.widgetsPath,
required this.style,
required this.baseColor,
this.installGoogleFonts = false,
// required this.stateManagement,
});

@override
List<Object?> get props => [
themePath,
widgetsPath,
style,
baseColor,
installGoogleFonts,
// stateManagement,
];

factory InitConfigEntity.fromJson(Map<String, dynamic> json) {
\_validateRequiredString(json, 'themePath');
\_validateRequiredString(json, 'widgetsPath');
\_validateRequiredString(json, 'style');
\_validateRequiredString(json, 'baseColor');

    if (json.containsKey('installGoogleFonts') &&
        json['installGoogleFonts'] != null &&
        json['installGoogleFonts'] is! bool) {
      throw InvalidConfigFileException(
        message: 'Field "installGoogleFonts" must be a boolean in flutcn.config.json',
      );
    }

    return InitConfigEntity(
      themePath: json['themePath'] as String,
      widgetsPath: json['widgetsPath'] as String,
      style: json['style'] as String,
      baseColor: json['baseColor'] as String,
      installGoogleFonts: json['installGoogleFonts'] as bool? ?? false,
    );

}

static void \_validateRequiredString(Map<String, dynamic> json, String field) {
if (!json.containsKey(field) || json[field] == null) {
throw InvalidConfigFileException(
message: 'Missing required field "$field" in flutcn.config.json',
      );
    }
    if (json[field] is! String) {
      throw InvalidConfigFileException(
        message: 'Field "$field" must be a string in flutcn.config.json',
);
}
}

Map<String, dynamic> toJson() => {
'themePath': themePath,
'widgetsPath': widgetsPath,
'style': style,
'baseColor': baseColor,
'installGoogleFonts': installGoogleFonts,
// 'stateManagement': stateManagement,
};

InitConfigModel toModel() => InitConfigModel.fromJson(toJson());
}

================================================
FILE: lib/src/domain/entities/theme_entity.dart
================================================
import 'package:equatable/equatable.dart';
import 'package:flutcn_ui/src/domain/entities/widget_file_entity.dart';

class ThemeEntity extends Equatable {
final String name;
final String description;
final String image;
final String link;
final List<WidgetFile> files;

const ThemeEntity({
required this.name,
required this.description,
required this.image,
required this.link,
required this.files,
});

@override
List<Object?> get props => [name, description, image, link, files];
}

================================================
FILE: lib/src/domain/entities/widget_entity.dart
================================================
import 'package:equatable/equatable.dart';
import 'package:flutcn_ui/src/data/models/widget_model.dart';

class WidgetEntity extends Equatable {
final String? name;
final String? link;
final String? content;
final String? style;

const WidgetEntity({this.name, this.link, this.content, this.style});

WidgetModel toModel() => WidgetModel.fromJSON(toJson());

Map<String, dynamic> toJson() => {
'name': name,
'link': link,
'content': content,
'style': style,
};

@override
List<Object?> get props => [name, link, content, style];
}

================================================
FILE: lib/src/domain/entities/widget_file_entity.dart
================================================
import 'package:equatable/equatable.dart';

class WidgetFile extends Equatable {
final String name;
final String dir;
final String content;
const WidgetFile({
required this.name,
required this.dir,
required this.content,
});

@override
List<Object?> get props => [name, dir, content];
}

================================================
FILE: lib/src/domain/repository/command_repository.dart
================================================
import 'package:dartz/dartz.dart';
import 'package:flutcn_ui/src/domain/entities/init_config_entity.dart';
import 'package:flutcn_ui/src/domain/entities/widget_entity.dart';
import '../../core/errors/failures.dart';

abstract class CommandRepository {
Future<Either<Failure, Unit>> initializeProject({
required InitConfigEntity config,
});

Future<Either<Failure, WidgetEntity>> add({
required WidgetEntity widget,
});

Future<Either<Failure,List<WidgetEntity>>> list() ;
}

================================================
FILE: lib/src/domain/usecases/add_theme_usecase.dart
================================================
class AddThemeUsecase {}

================================================
FILE: lib/src/domain/usecases/add_usecase.dart
================================================
import 'package:dartz/dartz.dart';
import 'package:flutcn_ui/src/core/errors/failures.dart';
import 'package:flutcn_ui/src/domain/entities/widget_entity.dart';
import 'package:flutcn_ui/src/domain/repository/command_repository.dart';

class AddUseCase {
final CommandRepository repository;

AddUseCase(this.repository);

Future<Either<Failure, WidgetEntity>> call({
required WidgetEntity widget,
}) async {
return await repository.add(widget: widget);
}
}

================================================
FILE: lib/src/domain/usecases/init_usecase.dart
================================================
import 'package:dartz/dartz.dart';
import 'package:flutcn_ui/src/core/errors/failures.dart';
import 'package:flutcn_ui/src/domain/entities/init_config_entity.dart';
import 'package:flutcn_ui/src/domain/repository/command_repository.dart';

class InitUseCase {
final CommandRepository repository;

InitUseCase(this.repository);

Future<Either<Failure, Unit>> call({
required InitConfigEntity config,
}) async {
return await repository.initializeProject(config: config);
}
}

================================================
FILE: lib/src/domain/usecases/list_usecase.dart
================================================
import 'package:dartz/dartz.dart';
import 'package:flutcn_ui/src/core/errors/failures.dart';
import 'package:flutcn_ui/src/domain/entities/widget_entity.dart';
import 'package:flutcn_ui/src/domain/repository/command_repository.dart';

class ListUseCase {
final CommandRepository repository;

ListUseCase(this.repository);

Future<Either<Failure, List<WidgetEntity>>> call() async {
return await repository.list();
}
}

================================================
FILE: lib/src/domain/usecases/search_usecase.dart
================================================
class SearchUsecase {}

================================================
FILE: lib/src/domain/usecases/update_usecase.dart
================================================
class UpdateUsecase {}

================================================
FILE: reports/project_analysis.md
================================================

# Flutcn UI Project Analysis

> **Version analyzed:** 1.1.4 | **Dart files:** 43 | **LOC (lib/src/):** ~1,090 | **Branch:** dev

## 1. Project Overview

**flutcn_ui** is a command-line tool for Flutter, inspired by `shadcn/ui`. It fetches pre-built, customizable UI components from a remote registry (`https://flutcnui.netlify.app`) and integrates them into Flutter projects with theme support.

**Core capabilities:**

- `init` — Set up project with `flutcn.config.json`, generate theme files
- `add` — Download and install widgets (single or batch)
- `list` — Browse and install available widgets interactively

## 2. Architecture

The project follows **Clean Architecture** with three layers:

```
lib/src/
├── core/          # Shared utilities, constants, error types, base classes
├── data/          # API client, file I/O, models, repository implementations
└── domain/        # Entities, repository interfaces, use cases
```

### Data Flow

```
CLI Command (bin/commands/)
    ↓
Use Case (domain/usecases/)
    ↓
Repository Interface (domain/repository/)
    ↓
Repository Implementation (data/repository/)
    ↓
Data Source Interface (data/interfaces/)
    ↓
Data Source Implementation (data/services/)
    ↓
API Service (core/services/ → data/services/)
```

### Key Patterns

| Pattern                       | Implementation                                                                    |
| ----------------------------- | --------------------------------------------------------------------------------- |
| **Dependency Injection**      | GetIt service locator (`sl<Type>()`) registered in `bin/injection_container.dart` |
| **Functional Error Handling** | `Either<Failure, T>` from `dartz` — Left = error, Right = success                 |
| **Entity-Model Separation**   | Pure entities in domain, models extend entities with JSON serialization in data   |
| **Abstract Interfaces**       | `ApiService`, `CommandInterface`, `CommandRepository` — all coded to interfaces   |

### Layer Dependencies

```
Domain Layer → (no dependencies)
Data Layer   → Domain Layer, Core
CLI Commands → Domain Layer, Data Layer, Core
```

No circular dependencies detected.

## 3. Dependencies

**Dart SDK:** `^3.6.2`

### Runtime

| Package     | Version   | Purpose                                  |
| ----------- | --------- | ---------------------------------------- |
| `args`      | `^2.6.0`  | CLI argument parsing                     |
| `cli_spin`  | `^1.0.1`  | Spinner animations for async operations  |
| `dartz`     | `^0.10.1` | `Either<L, R>` functional error handling |
| `equatable` | `^2.0.7`  | Value equality for entities              |
| `get_it`    | `^8.0.3`  | Service locator / DI container           |
| `http`      | `^1.3.0`  | HTTP client for registry API             |
| `io`        | `^1.0.5`  | Console I/O utilities                    |
| `path`      | `^1.8.0`  | Cross-platform path manipulation         |
| `prompts`   | `^2.0.0`  | Interactive CLI prompts                  |

### Dev

| Package        | Version   | Purpose                                       |
| -------------- | --------- | --------------------------------------------- |
| `build_runner` | `^2.4.6`  | Code generation (prepared, not actively used) |
| `lints`        | `^5.0.0`  | `package:lints/recommended.yaml` lint rules   |
| `test`         | `^1.24.0` | Test framework (present but unused)           |

## 4. CLI Commands

### `init`

- Checks if project is already initialized (`flutcn.config.json` exists)
- Supports `--default` flag for quick setup (skips prompts)
- Interactive prompts: theme path, widgets path, style, base color, Google Fonts
- Creates directories, fetches theme files from registry, writes config
- Optionally adds `google_fonts` to `pubspec.yaml`

**Default config:**

```json
{
  "widgetsPath": "lib/widgets",
  "themePath": "lib/themes",
  "style": "new-york",
  "baseColor": "Zinc"
}
```

### `add`

- **Single mode:** `flutcn_ui add button` — downloads and writes widget directly
- **Multi-select mode:** `flutcn_ui add` — shows interactive checkbox UI
- Builds widget URL: `{registry}/widgets/{style}/{widgetName}`
- Writes `.dart` files to configured widgets directory
- Tracks successes and failures in batch mode

### `list`

- Fetches all available widgets from registry
- Shows interactive multi-select interface
- Checks for existing files before writing (overwrite/skip/cancel)
- Prints color-coded summary: green (success), yellow (skipped), red (failed)

## 5. API Integration

**Production base URL:** `https://flutcnui.netlify.appregistry/`

| Endpoint                           | Method | Purpose                           |
| ---------------------------------- | ------ | --------------------------------- |
| `/widgets`                         | GET    | List all available widgets        |
| `/widgets/{style}/{name}`          | GET    | Download individual widget source |
| `/colorScheme/{style}/{baseColor}` | GET    | Fetch color palette file          |
| `/theme/{style}`                   | GET    | Fetch theme definition file       |

- No authentication required (public API)
- Response wrapper: `ApiResponse` (body, statusCode, message)
- Dev URL available (`localhost:3000`) but not used in production builds

## 6. Configuration Management

**File:** `flutcn.config.json` (project root)

```json
{
  "widgetsPath": "lib/widgets",
  "themePath": "lib/themes",
  "style": "new-york",
  "baseColor": "zinc"
}
```

- Created by `init` command
- Required before `add` or `list` commands
- Entity (`InitConfigEntity`) supports JSON serialization
- **No schema validation** — config values are trusted as-is

## 7. Code Quality — Strengths

- **Clean Architecture** — proper layer separation, no layer violations
- **Functional error handling** — `Either<Failure, T>` consistently used across all use cases
- **Comprehensive failure types** — 10 specific failure classes for different error scenarios
- **Cross-platform CLI UX** — platform-aware keyboard handling (Windows vs. Mac/Linux key codes)
- **Visual feedback** — spinners, color-coded output, interactive selection
- **Singleton DI** — lazy registration prevents unnecessary initialization
- **CI/CD pipeline** — automated analysis, release tagging, and pub.dev publishing

## 8. Bugs & Issues (Fixed)

All bugs identified in the original analysis have been resolved in v1.1.3 and v1.1.4:

### ~~Bug: API Service `get()` missing base URL~~ — Fixed in v1.1.3

**File:** `lib/src/data/services/api_service.dart`

`get()` now correctly prepends `baseUrl`, consistent with all other HTTP methods.

### ~~Bug: Variable name typo~~ — Fixed in v1.1.3

**File:** `lib/src/data/services/command_interface_impl.dart`

`widgetsPaht` renamed to `widgetsPath`.

### ~~Issue: Filename typos~~ — Fixed in v1.1.3

| Old Name                  | New Name                |
| ------------------------- | ----------------------- |
| `qestions.dart`           | `questions.dart`        |
| `app_pallete.dart`        | `app_palette.dart`      |
| `checko_box_chooser.dart` | `checkbox_chooser.dart` |

### ~~Issue: Error handling inconsistency~~ — Fixed in v1.1.3

`ListUseCase` now returns `Either<Failure, List<WidgetEntity>>` consistently with `InitUseCase` and `AddUseCase`. Callers in `add.dart` and `list.dart` unwrap with `.fold()`.

### ~~Issue: google_fonts in CLI dependencies~~ — Fixed in v1.1.4

`google_fonts` was listed as a CLI dependency but never imported — it's only written as a string to the user's `pubspec.yaml`. Removed to fix Dart SDK version conflict in CI.

## 9. Unused & Commented-Out Code

### Empty use case files (placeholders)

- `lib/src/domain/usecases/add_theme_usecase.dart` — empty
- `lib/src/domain/usecases/search_usecase.dart` — empty
- `lib/src/domain/usecases/update_usecase.dart` — empty

### Legacy constant

- `lib/src/core/constants/app_constants.dart` — contains `baseUrl = 'https://flutcn.com/api/v1'` which is never referenced

### Commented-out state management

State management selection is prepared across multiple files but fully commented out:

- `InitConfigEntity` — `stateManagement` field commented
- `CommandInterfaceImpl` — switch statement for bloc/provider/riverpod commented
- `InitCommand` — state management prompt commented

## 10. Test Coverage

**Current state: Minimal**

- Only file: `example/test/widget_test.dart` (default Flutter template)
- No unit tests for use cases, repositories, or services
- No integration tests for CLI commands
- `test` package is in dev dependencies but unused

**Recommended test priorities:**

1. Use cases (pure business logic, easy to test)
2. Repository implementations (mock API service)
3. CLI commands (integration tests with mock DI)
4. API service (HTTP response handling)

## 11. CI/CD Pipeline

### Workflows (`.github/workflows/`)

| Workflow      | Trigger               | Purpose                                          |
| ------------- | --------------------- | ------------------------------------------------ |
| `ci.yml`      | PR to `main` or `dev` | Lint, analyze, format check                      |
| `release.yml` | Push to `main`        | Extract version, create git tag & GitHub release |
| `publish.yml` | Tag push `v*`         | Verify version, analyze, publish to pub.dev      |

**Notes:**

- CI excludes `example/` during `dart pub get` (Flutter project requires Flutter SDK, CI only has Dart)
- `release.yml` skips if tag already exists (relevant when using git flow which creates tags locally)
- Publish requires `PUB_CREDENTIALS` GitHub secret for pub.dev authentication

### Version Bump Script

`scripts/bump_version.sh` — updates version in `pubspec.yaml` and creates a CHANGELOG entry.

## 12. Improvement Recommendations

### ~~Priority 1 — Fix Bugs~~ — All Done (v1.1.3, v1.1.4)

- [x] Fix `get()` method in `HttpServiceImpl` to prepend `baseUrl`
- [x] Fix `widgetsPaht` typo in `command_interface_impl.dart`
- [x] Rename misspelled files (`qestions.dart`, `app_pallete.dart`, `checko_box_chooser.dart`)
- [x] Fix `ListUseCase` to return `Either` instead of throwing
- [x] Remove unused `google_fonts` from CLI dependencies

### Priority 2 — Code Hygiene

- [ ] Remove empty use case files or implement them
- [ ] Remove unused `AppConstants.baseUrl`
- [ ] Either implement state management feature or remove commented code

### Priority 3 — Reliability

- [ ] Add unit tests for use cases and repositories
- [ ] Add config file schema validation
- [ ] Add offline fallback / graceful error when registry is unreachable

### Priority 4 — Features

- [ ] `remove` command — uninstall widgets
- [ ] `update` command — update installed widgets
- [ ] Widget versioning — track installed versions
- [ ] `--path` option on `add` command — override default widget directory
- [ ] Dependency resolution for widget inter-dependencies

## 13. File Structure

```
flutcn_ui/
├── .github/workflows/
│   ├── ci.yml                         # PR analysis & format checks
│   ├── release.yml                    # Auto-tag & GitHub release on main push
│   └── publish.yml                    # Publish to pub.dev on tag push
├── bin/
│   ├── flutcn_ui.dart                 # CLI entry point
│   ├── injection_container.dart       # GetIt DI setup
│   └── commands/
│       ├── init.dart                  # Init command (131 LOC)
│       ├── add.dart                   # Add command (186 LOC)
│       └── list.dart                  # List command (164 LOC)
├── lib/src/
│   ├── core/
│   │   ├── constants/
│   │   │   ├── api_constants.dart     # API URLs (dev + prod)
│   │   │   ├── app_constants.dart     # Legacy unused constant
│   │   │   ├── file_paths.dart        # Default widget/theme paths
│   │   │   └── questions.dart         # CLI prompt definitions
│   │   ├── errors/
│   │   │   ├── exceptions.dart        # 8 custom exception classes
│   │   │   └── failures.dart          # 10 failure classes (Equatable)
│   │   ├── helpers/
│   │   │   └── check_mode.dart        # Dev/prod mode detection
│   │   ├── services/
│   │   │   └── api_service.dart       # Abstract API interface
│   │   ├── usecase/
│   │   │   └── usecase.dart           # Base UseCase<Type, Params>
│   │   └── utils/
│   │       ├── checkbox_chooser.dart  # Interactive multi-select UI
│   │       ├── highlighter.dart       # ANSI color extension
│   │       └── spinners.dart          # Async spinner wrapper
│   ├── data/
│   │   ├── interfaces/
│   │   │   └── command.dart           # Data source contract
│   │   ├── models/
│   │   │   ├── init_config_model.dart # Config with JSON support
│   │   │   ├── theme_model.dart       # Theme model
│   │   │   ├── widget_file_model.dart # Widget file model
│   │   │   └── widget_model.dart      # Widget model with JSON
│   │   ├── repository/
│   │   │   └── command_repository_impl.dart  # Either-wrapping adapter
│   │   └── services/
│   │       ├── api_service.dart       # HTTP implementation (109 LOC)
│   │       └── command_interface_impl.dart   # Core logic (276 LOC)
│   └── domain/
│       ├── entities/
│       │   ├── init_config_entity.dart
│       │   ├── theme_entity.dart
│       │   ├── widget_entity.dart
│       │   └── widget_file_entity.dart
│       ├── repository/
│       │   └── command_repository.dart # Abstract contract
│       └── usecases/
│           ├── add_theme_usecase.dart  # Empty placeholder
│           ├── add_usecase.dart
│           ├── init_usecase.dart
│           ├── list_usecase.dart
│           ├── search_usecase.dart     # Empty placeholder
│           └── update_usecase.dart     # Empty placeholder
├── example/                           # Demo Flutter app
│   ├── lib/
│   │   ├── main.dart
│   │   ├── home.dart                  # Widget showcase screen
│   │   ├── theme_notifier.dart        # Dark/light theme toggle
│   │   ├── showcase/                  # Widget demo screens
│   │   ├── themes/                    # Generated theme files
│   │   └── widgets/                   # Generated widget files
│   └── test/                          # Template test only
├── scripts/
│   └── bump_version.sh                # Version bump utility
├── reports/
│   └── project_analysis.md            # This file
├── pubspec.yaml
├── CHANGELOG.md
├── CLAUDE.md
├── analysis_options.yaml
└── README.md
```

================================================
FILE: scripts/bump_version.sh
================================================
#!/bin/bash
set -e

# Usage: ./scripts/bump_version.sh <major|minor|patch>

# Bumps the version in pubspec.yaml and prints next steps.

PUBSPEC="pubspec.yaml"
BUMP_TYPE="${1:-patch}"

if [[! -f "$PUBSPEC"]]; then
echo "Error: $PUBSPEC not found. Run this from the project root."
exit 1
fi

# Extract current version

CURRENT=$(grep '^version:' "$PUBSPEC" | sed 's/version: //')
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT"

case "$BUMP_TYPE" in
  major)
    MAJOR=$((MAJOR + 1))
MINOR=0
PATCH=0
;;
minor)
MINOR=$((MINOR + 1))
    PATCH=0
    ;;
  patch)
    PATCH=$((PATCH + 1))
;;
\*)
echo "Usage: $0 <major|minor|patch>"
echo ""
echo " major Breaking changes (CLI interface, config schema)"
echo " minor New features, commands, flags (backward-compatible)"
echo " patch Bug fixes, internal refactors"
exit 1
;;
esac

NEW_VERSION="$MAJOR.$MINOR.$PATCH"

# Update pubspec.yaml

sed -i '' "s/^version: .\*/version: $NEW_VERSION/" "$PUBSPEC"

echo "Bumped version: $CURRENT -> $NEW_VERSION"
echo ""
echo "Next steps:"
echo "  1. Update CHANGELOG.md with a [${NEW_VERSION}] section"
echo " 2. git add pubspec.yaml CHANGELOG.md"
echo " 3. git commit -m \"chore: Prepare release v${NEW_VERSION}\""
echo " 4. Open PR to main (or merge release branch)"

================================================
FILE: .github/workflows/ci.yml
================================================
name: CI

on:
pull_request:
branches: [main, dev]

jobs:
analyze:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4

      - uses: dart-lang/setup-dart@v1
        with:
          sdk: "3.6.2"

      - name: Install dependencies
        run: |
          # Temporarily exclude example/ (Flutter project, needs Flutter SDK)
          mv example /tmp/_example_bak
          dart pub get
          mv /tmp/_example_bak example

      - name: Analyze
        run: dart analyze lib bin

      - name: Check formatting
        run: dart format --output=none --set-exit-if-changed lib bin

================================================
FILE: .github/workflows/publish.yml
================================================
name: Publish to pub.dev

on:
push:
tags: - "v[0-9]+.[0-9]+.[0-9]+\*"

jobs:
publish:
runs-on: ubuntu-latest
steps: - name: Checkout repository
uses: actions/checkout@v4

      - name: Set up Dart
        uses: dart-lang/setup-dart@v1
        with:
          sdk: "3.6.2"

      - name: Verify version consistency
        env:
          GIT_TAG: ${{ github.ref_name }}
        run: |
          PUBSPEC_VERSION=$(grep '^version:' pubspec.yaml | sed 's/version: //')
          TAG_VERSION="${GIT_TAG#v}"
          if [ "$PUBSPEC_VERSION" != "$TAG_VERSION" ]; then
            echo "Error: pubspec.yaml version ($PUBSPEC_VERSION) does not match git tag ($TAG_VERSION)."
            exit 1
          fi
          echo "Versions match: $PUBSPEC_VERSION"

      - name: Install dependencies
        run: |
          # Temporarily exclude example/ (Flutter project, needs Flutter SDK)
          mv example /tmp/_example_bak
          dart pub get
          mv /tmp/_example_bak example

      - name: Analyze before publishing
        run: dart analyze lib bin

      - name: Configure pub.dev credentials
        env:
          PUB_CREDS: ${{ secrets.PUB_CREDENTIALS }}
        run: |
          mkdir -p "$HOME/.config/dart"
          echo "$PUB_CREDS" > "$HOME/.config/dart/pub-credentials.json"

      - name: Publish to pub.dev
        run: dart pub publish --force

================================================
FILE: .github/workflows/release.yml
================================================
name: Release

on:
push:
branches: [main]

jobs:
tag-and-release:
runs-on: ubuntu-latest
permissions:
contents: write
steps: - uses: actions/checkout@v4
with:
fetch-depth: 0

      - name: Extract version and check tag
        id: info
        run: |
          VERSION=$(grep '^version:' pubspec.yaml | sed 's/version: //')
          TAG="v$VERSION"
          echo "version=$VERSION" >> "$GITHUB_OUTPUT"
          echo "tag=$TAG" >> "$GITHUB_OUTPUT"
          if git rev-parse "$TAG" >/dev/null 2>&1; then
            echo "tag_exists=true" >> "$GITHUB_OUTPUT"
          else
            echo "tag_exists=false" >> "$GITHUB_OUTPUT"
          fi

      - name: Extract changelog and create tag
        if: steps.info.outputs.tag_exists == 'false'
        env:
          PKG_VERSION: ${{ steps.info.outputs.version }}
          PKG_TAG: ${{ steps.info.outputs.tag }}
        run: |
          NOTES=$(awk "/^## \[${PKG_VERSION}\]/{found=1; next} /^## \[/{if(found) exit} found{print}" CHANGELOG.md)
          if [ -z "$NOTES" ]; then
            NOTES="Release ${PKG_TAG}"
          fi
          echo "$NOTES" > /tmp/release_notes.md

          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git tag -a "$PKG_TAG" -m "Release $PKG_TAG"
          git push origin "$PKG_TAG"

      - name: Create GitHub Release
        if: steps.info.outputs.tag_exists == 'false'
        uses: softprops/action-gh-release@v2
        with:
          tag_name: ${{ steps.info.outputs.tag }}
          body_path: /tmp/release_notes.md
          generate_release_notes: true
