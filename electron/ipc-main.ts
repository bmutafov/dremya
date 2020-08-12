import { ipcMain, BrowserWindow, screen } from "electron";
import { FullScreenOverlayWindow } from "./browser-windows";
import { OverlayData } from "../common/Interfaces/OverlayData";

let overlayWindow: BrowserWindow | null;

ipcMain.on("overlay-action", (_event, data: OverlayData) => {
    if (data.action === "OPEN") {
        const displays = screen.getAllDisplays();

        overlayWindow = new FullScreenOverlayWindow(displays[1]);

        if (overlayWindow) {
            overlayWindow.on("closed", () => {
                overlayWindow = null;
            });
        }
    } else if (data.action === "CLOSE") {
        if (!overlayWindow) return;

        overlayWindow.closable = true;
        overlayWindow.close();
    }
});
