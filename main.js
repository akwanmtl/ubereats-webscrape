const { BrowserWindow, app } = require('electron');
require('./server.js')

let mainWindow = null

function main() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 1024
  })
  mainWindow.loadURL(`http://localhost:8080/`)
  mainWindow.on('close', event => {
    mainWindow = null
  })
}

app.on('ready', main)