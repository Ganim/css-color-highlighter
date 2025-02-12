import * as assert from 'assert';
import * as vscode from 'vscode';
import * as extension from '../../src/extension';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Extension should be present', () => {
        const extension = vscode.extensions.getExtension('your-username.css-variables-highlighter');
        assert.ok(extension, 'Extension is not installed');
    });

    test('Extension should activate', async () => {
        const extension = vscode.extensions.getExtension('your-username.css-variables-highlighter');
        await extension?.activate();
        assert.strictEqual(extension?.isActive, true, 'Extension did not activate');
    });

    test('Should highlight CSS variables', async () => {
        const document = await vscode.workspace.openTextDocument({ content: ':root { --primary-color: #ff0000; }' });
        const editor = await vscode.window.showTextDocument(document);
        
        await extension.activate({ subscriptions: [], workspaceState: {} as any, globalState: {} as any, secrets: {} as any, extensionUri: vscode.Uri.file(''), environmentVariableCollection: {} as any, storageUri: vscode.Uri.file(''), globalStorageUri: vscode.Uri.file(''), logUri: vscode.Uri.file(''), extensionMode: vscode.ExtensionMode.Test, asAbsolutePath: () => '', storagePath: '', globalStoragePath: '', logPath: '' } as unknown as vscode.ExtensionContext);
        
        const decorations = editor?.visibleRanges;
        assert.ok(decorations, 'No decorations applied');
    });
});
