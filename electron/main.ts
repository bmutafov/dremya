import { app } from "electron";
import * as path from "path";
import * as url from "url";

import { DefaultBrowserWindow } from "./browser-windows";

let mainWindow: Electron.BrowserWindow | null;

const createWindow = (): void => {
    mainWindow = new DefaultBrowserWindow();

    if (process.env.NODE_ENV === "development") {
        mainWindow.loadURL(`http://localhost:4000`);
    } else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, "../index.html"),
                protocol: "file:",
                slashes: true,
            })
        );
    }

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};

require("./ipc-main");

app.on("ready", createWindow);
app.allowRendererProcessReuse = true;
