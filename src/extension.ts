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

function del_all(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand("CustomPlugins.deleteall", () => {
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('the editor is not activate!')
		}
		
		let tail_line_cnt = 1;

		if (editor?.document.lineCount) {
			let tail_line_cnt = editor.document.lineCount + 1
		}

		const end = new vscode.Position(tail_line_cnt, 0);
		const text = 'new replace!'
		
		vscode.window.activeTextEditor?.edit(editBuilder => {
			editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), text);
		})

	})
	
	context.subscriptions.push(disposable)
}

function reverse(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand("CustomPlugins.reverse", () => {
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

exports.activate = del_all

function deactivate() {

}

exports.deactivate = deactivate;