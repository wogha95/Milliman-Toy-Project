import * as path from "path";
import * as url from "url";
import { app, BrowserWindow } from "electron";
import * as isDev from "electron-is-dev";

const baseUrl = "http://localhost:3000";

let mainWindow: BrowserWindow | null = null;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 630,
    titleBarStyle: "hidden",

    webPreferences: {
      nodeIntegration: true,
    },
  });

  const mainWindowUrl: string = url
    .pathToFileURL(path.join(__dirname, "../build/index.html"))
    .toString();

  mainWindow.loadURL(isDev ? baseUrl : mainWindowUrl);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", () => {
  createMainWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
