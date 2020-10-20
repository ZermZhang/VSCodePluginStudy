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

exports.activate = helloWorld

function deactivate() {

}

exports.deactivate = deactivate;