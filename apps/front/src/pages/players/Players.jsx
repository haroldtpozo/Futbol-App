import React from "react";

import Sticker from "../../components/playerSticker/PlayerSticker";

import styles from "./Players.module.css";

function Players() {
    return (
        <>
            <div className={styles.containerPlayers}>
                <div>
                    <h1>Jugadores</h1>
                </div>
                <div className={styles.gridContainer}>
                    <Sticker styles={{ width: "40%", height: "40%" }} />
                </div>
            </div>
        </>
    );
}

export default Players;
