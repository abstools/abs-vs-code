# Change Log

All notable changes to the "abs" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

### Added

### Changed

### Removed

### Fixed

## [0.0.8]

### Added

- Add snippets for `map`, `filter`, `foldl`, `foldr`.

## [0.0.7]

### Changed

- Change default value of `abs.backend` to `--java`.  This default
  value means that developing ABS can be done without installing
  Erlang.

### Fixed

- Fix command execution for deployed plugin.

## [0.0.6]

### Added

- Expressions inside template strings (delimited by `$`) now have a
  different color than the surrounding string content.

### Fixed

- Strings and template strings are now colored properly.  (#5)

## [0.0.5]

### Added

- Added a command "ABS: Compile File" to compile the current file.

- Added extension options:
  - `abs.compileCommand`: the command to invoke the ABS compiler.
  - `abs.backend`: The default target language to use.
  - `abs.compileOptions`: An array of additional arguments for the compiler.

## [0.0.4]

### Added

- Add snippets for common language constructs.

## [0.0.3]

### Added

Automate release, publish `.vsix` files on github.

## [0.0.2]

Released 2023-03-16

### Added

- Added support for template strings.

- Refined auto-closing behavior for strings (`"`) and template strings (`` ` ``)

## [0.0.1]

- Initial release

[Unreleased]: https://github.com/abstools/abs-vs-code/compare/HEAD...v0.0.8
[0.0.8]: https://github.com/abstools/abs-vs-code/compare/v0.0.8...v0.0.7
[0.0.7]: https://github.com/abstools/abs-vs-code/compare/v0.0.7...v0.0.6
[0.0.6]: https://github.com/abstools/abs-vs-code/compare/v0.0.6...v0.0.5
[0.0.5]: https://github.com/abstools/abs-vs-code/compare/v0.0.5...v0.0.4
[0.0.4]: https://github.com/abstools/abs-vs-code/compare/v0.0.4...v0.0.3
[0.0.3]: https://github.com/abstools/abs-vs-code/compare/v0.0.3...v0.0.2
[0.0.2]: https://github.com/abstools/abs-vs-code/compare/v0.0.2...v0.0.1
[0.0.1]: https://github.com/abstools/abs-vs-code/commit/11b912290b0e26f521b4bc57608d690bff13ce17
