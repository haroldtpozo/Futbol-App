import React from "react";

import Sticker from "../../components/playerSticker/PlayerSticker";

import styles from "./Players.module.css";
import { Link } from "react-router-dom";

function Players() {
    return (
        <>
            <div className={styles.containerPlayers}>
                <div>
                    <h1>Jugadores</h1>
                </div>
                <div className={styles.gridContainer}>
                    <Link to="/estadisticas">
                        <Sticker />
                    </Link>
                    <Sticker />
                    <Sticker />
                    <Sticker />
                    <Sticker />
                </div>
            </div>
        </>
    );
}

export default Players;
