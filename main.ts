// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
var ipfsAPI = require('ipfs-api');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow, splashWindow;
var started = false;

function startKonjure() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1000,
        minWidth: 1000,
        height: 600,
        minHeight: 500,
        icon: 'assets/media/images/favicon.png',
        darkTheme: true,
        show: false,
        frame: false
    });

    // Create the splash screen window.
    splashWindow = new BrowserWindow({
        width: 340,
        height: 510,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        movable: false,
        center: true,
        skipTaskbar: true
    });

    // Load splash window.
    splashWindow.loadURL("file://" + __dirname + "/splash.html");

    // and load the index.html of the app.
    mainWindow.loadURL("file://" + __dirname + "/index.html");

    mainWindow.on('ready-to-show', function () {
        setTimeout(function () {
            splashWindow.destroy();
            mainWindow.show();
        }, 1000);
    });

    // Emitted when the window is closed.
    splashWindow.on('closed', function () {
        splashWindow = null;
    });

    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    started = true;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', startKonjure);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (!started) {
        startKonjure();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
