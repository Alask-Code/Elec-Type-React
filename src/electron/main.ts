import { app, BrowserWindow } from 'electron';
import { join } from 'path'
import { config } from 'dotenv';
config()
function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.removeMenu();

  if (process.env.DEV) {
    win.loadURL('http://localhost:5151')
  } else {
    win.loadFile(join(app.getAppPath(), 'dist-react', 'index.html'))
  }

  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);