// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

function helloWorld(context: vscode.ExtensionContext) {
	// 在调试控制台输出日志相关提示信息
	console.log('Congratulations, your extension "helloWorld" is now active!');
	// 返回回调接口
	// registerCommand: 注册vscode命令, 命令名为 'helloworld.helloWorld'
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', (uri) => {
		// 调用当前命令时，在vscode窗口显示信息(Info), 输出当前路径
		vscode.window.showInformationMessage(`the path for now is: ${uri ? uri.path: 'empty'}`)
	});

	context.subscriptions.push(disposable)
}

function del_from_curse(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand("CustomPlugins:deleteFromCursor", () => {
		let editor = vscode.window.activeTextEditor;
		
		if (!editor) {
			vscode.window.showErrorMessage('the editor is not activate!');
		}
		let document = editor?.document
		let tail_line_cnt = document.lineCount + 1

		const end = new vscode.Position(tail_line_cnt, 0);
		const select_position = new vscode.Position(editor?.selection.active.line, editor?.selection.active.character);
		const text = ''

		vscode.window.activeTextEditor?.edit(editBuilder => {
			editBuilder.replace(new vscode.Range(select_position, end), text)
		})
	})

	context.subscriptions.push(disposable)
}


function del_all(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand("CustomPlugins.deleteall", () => {
		// get the Text editor state
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			// judge the Text editor is activate or not
			// alter error when the Text editor is nto activate
			vscode.window.showErrorMessage('the editor is not activate!')
		}
		
		// get the tail line cnt for the current document
		// tail line cnt + 1 because we should delete all data
		let tail_line_cnt = 1;

		if (editor?.document.lineCount) {
			let tail_line_cnt = editor.document.lineCount + 1
		}
		
		// get the position for the end of this document
		const end = new vscode.Position(tail_line_cnt, 0);
		const text = 'new replace!'
		
		// replace the all data in this document with text
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

		// get the info for the current document
		let document = editor.document;
		// get the selection in the document
		let selection = editor.selection;

		// reverse the selection
		let text = document.getText(selection);
		let result = text.split('').reverse().join('');

		// replace the selection with reverse text
		vscode.window.activeTextEditor?.edit(editBuilder => {
			editBuilder.replace(selection, result)
		})
	})

	context.subscriptions.push(disposable)
}

function hight_light(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand("CustomPlugins:HightLight", () => {
		let decorationType = vscode.window.createTextEditorDecorationType({
			backgroundColor: '#fff'
		});

		let editor = vscode.window.activeTextEditor;

		editor?.setDecorations(decorationType, [new vscode.Range(0, 0, 0, 1)])
	})

	context.subscriptions.push(disposable)
}



exports.activate = hight_light

function deactivate() {

}

exports.deactivate = deactivate;