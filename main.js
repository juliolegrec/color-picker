const electron = require('electron');
const url = require('url');
const path = require('path');
const robot = require('robotjs');

const {app, BrowserWindow, ipcMain} = electron;

let mainWindow, smallWindow;

app.on('ready', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
	mainWindow = new BrowserWindow({width, height, frame:false, transparent: true});
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'mainWindow.html'),
		protocol: 'file',
		slashes: true
	}));
});

ipcMain.on('pixel:color', (e, hex) => {
	console.log(hex);
});

