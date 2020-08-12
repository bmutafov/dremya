import { ipcMain, BrowserWindow, screen } from "electron";
import { FullScreenOverlayWindow } from "./browser-windows";

interface OverlayData {
    action: string;
}

let overlayWindow: BrowserWindow | null;

ipcMain.on("overlay-action", (_event, data: OverlayData) => {
    if (!overlayWindow) return;

    if (data.action === "OPEN") {
        const displays = screen.getAllDisplays();

        overlayWindow = new FullScreenOverlayWindow(displays[1]);

        if (overlayWindow) {
            overlayWindow.on("closed", () => {
                overlayWindow = null;
            });
        }
    } else if (data.action === "CLOSE") {
        overlayWindow.closable = true;
        overlayWindow.close();
    }
});
