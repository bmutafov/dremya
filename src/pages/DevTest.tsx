import React from "react";
import { Button } from "../components/Button";
import { ipcRenderer } from "electron";
import { OverlayData } from "../../common/Interfaces/OverlayData";

const OVERLAY_OPEN: OverlayData = { action: "OPEN" };
const OVERLAY_CLOSE: OverlayData = { action: "CLOSE" };

export const DevTest = () => {
    const openOverlay = () => {
        ipcRenderer.send("overlay-action", OVERLAY_OPEN);
    };

    const closeOverlay = () => {
        ipcRenderer.send("overlay-action", OVERLAY_CLOSE);
    };

    return (
        <>
            <h1>Hi from a react app</h1>
            <Button onClickHandler={openOverlay}>Draw Overlay</Button>
            <Button onClickHandler={closeOverlay}>Close Overlay</Button>
        </>
    );
};
