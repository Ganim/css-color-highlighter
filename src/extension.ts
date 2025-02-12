import * as vscode from 'vscode';

const cssVariableRegex = /--([\w-]+):\s*(#[0-9a-fA-F]{3,6}|rgba?\([^\)]+\));/g;

export function activate(context: vscode.ExtensionContext) {
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        triggerUpdateDecorations(activeEditor);
    }

    vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            triggerUpdateDecorations(editor);
        }
    }, null, context.subscriptions);

    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeEditor && event.document === activeEditor.document) {
            triggerUpdateDecorations(activeEditor);
        }
    }, null, context.subscriptions);
}

function triggerUpdateDecorations(editor: vscode.TextEditor) {
    if (!editor) {return;}
    
    const text = editor.document.getText();
    const decorationsArray: vscode.DecorationOptions[] = [];
    let match;

    while ((match = cssVariableRegex.exec(text))) {
        const varName = match[1];
        const colorValue = match[2];
        const startPos = editor.document.positionAt(match.index);
        const endPos = editor.document.positionAt(match.index + match[0].length);
        const range = new vscode.Range(startPos, endPos);

        const decoration = vscode.window.createTextEditorDecorationType({
            before: {
                contentText: ' ',
                backgroundColor: colorValue,
                border: '1px solid black',
                margin: '0 4px',
                width: '10px',
                height: '10px',
            }
        });

        decorationsArray.push({ range });
        editor.setDecorations(decoration, [range]);
    }
}

export function deactivate() {}
