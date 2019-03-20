const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;


//listen for the app to be ready
app.on('ready', ()=>{
    //create new window
    mainWindow = new BrowserWindow({
        width: 1100,
        height: 600,
        frame: false,
        resizable: false
    });

    //load the html file into the window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/app/views/main_window.html'),
        protocol: 'file:',
        slashes: true
    })); //passes in file://dirname/main_window.html

    mainWindow.webContents.openDevTools();
});

