# CSS Variables Highlighter

**CSS Variables Highlighter** is a VS Code extension that highlights CSS variables with their respective colors, making it easier to visualize and work with them in your stylesheets.

## Features

✅ Highlights CSS variables with their actual color.\
✅ Supports `rgba`, `hex`, and `hsl` color formats.\
✅ Works with `.css`, `.scss`, and `.less` files.\
✅ Live updates when variables are modified.

Example:\


## Requirements

No additional dependencies are required. Just install the extension and start using it.

## Extension Settings

This extension contributes the following settings:

- `cssVariablesHighlighter.enable`: Enable/disable the extension.
- `cssVariablesHighlighter.opacity`: Adjust the transparency of the color preview.
- `cssVariablesHighlighter.border`: Enable/disable border around color previews.

## Known Issues

- Some complex SASS/SCSS structures may not be highlighted correctly.
- Currently, only variables declared in `:root` and global scopes are supported.

If you find an issue, feel free to report it on [GitHub Issues](https://github.com/ganim/css-variables-highlighter/issues).

## Release Notes

### 1.0.0

- Initial release with basic CSS variable highlighting.

### 1.0.1

- Fixed issue with color detection in nested styles.

### 1.1.0

- Added support for SCSS and LESS files.

- Improved performance with large stylesheets.

---

## Development Guidelines

If you want to contribute or modify the extension, please check the [VS Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines).

## For More Information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

---

Enjoy coding with **CSS Variables Highlighter**! 🚀

