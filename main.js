const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let defaultWindow;

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

    // //build menu from template
    // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // //insert menu
    // Menu.setApplicationMenu(mainMenu);
    mainWindow.webContents.openDevTools();
});

//handle createDefaultsWindow()
// function createDefaultsWindow() {
//     //create new window
//     defaultWindow = new BrowserWindow({
//         width: 500,
//         height: 500,
//         title: 'Default Event List'
//     });
//
//     //load the html file into the window
//     defaultWindow.loadURL(url.format({
//         pathname: path.join(__dirname, '/app/views/default_window.html'),
//         protocol: 'file:',
//         slashes: true
//     })); //passes in file://dirname/main_window.html
// }

// //create menu template
// const mainMenuTemplate = [
//     {
//         label: 'File',
//         submenu:[
//             {
//                 label: 'Print'
//             },
//             {
//                 label: 'Edit Defaults',
//                 click(){
//                     // createDefaultsWindow();
//                 }
//             },
//             {
//                 label: 'Reset'
//             },
//             {
//                 label: 'Exit',
//                 accelerator: 'Ctrl+Q',
//                 click(){
//                     app.quit();
//                 }
//             }
//         ]
//     }
// ];