import { BrowserWindow, screen } from "electron";
import * as url from "url";
import * as path from "path";

export class DefaultBrowserWindow extends BrowserWindow {
    constructor() {
        super({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
            },
        });
    }
}

export class FullScreenOverlayWindow extends BrowserWindow {
    constructor(display: Electron.Display) {
        const { width, height, x, y } = display.bounds;
        super({
            width,
            height,
            x,
            y,
            webPreferences: {
                nodeIntegration: true,
            },
            alwaysOnTop: true,
            fullscreen: true,
            frame: false,
        });

        if (process.env.NODE_ENV === "development") {
            this.loadURL(`http://localhost:4000/fullscreen-overlay`);
        } else {
            this.loadURL(
                url.format({
                    pathname:
                        path.join(__dirname, "../index.html") +
                        `#/fullscreen-overlay`,
                    protocol: "file:",
                    slashes: true,
                })
            );
        }
    }
}
