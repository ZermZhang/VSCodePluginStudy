// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

function helloWorld(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloWorld" is now active!');
	
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', (uri) => {
		vscode.window.showInformationMessage(`the path for now is: ${uri ? uri.path: 'empty'}`)
	});

	context.subscriptions.push(disposable)
}

function replace(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand("helloworld.helloWorld", () => {
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		let document = editor.document;
		let selection = editor.selection;

		let text = document.getText(selection);
		let result = text.split('').reverse().join('');

		vscode.window.activeTextEditor?.edit(editBuilder => {
			editBuilder.replace(selection, result)
		})
	})

	context.subscriptions.push(disposable)
}

exports.activate = replace

function deactivate() {

}

exports.deactivate = deactivate;