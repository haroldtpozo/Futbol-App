import React from "react";

import styles from "./FichaJugador.module.css";

import Sticker from "../playerSticker/PlayerSticker";

const FichaPlayer = () => {
    return (
        <div className={styles.fichaJugador}>
            <div className={styles.containerSticker}>
                <Sticker
                    style={{
                        transform: "scale(2.0)", // Hace zoom al componente al 150%
                        transition: "transform 0.3s", // Agrega una transición suave
                    }}
                />
            </div>
            <div className={styles.dataJugador}>
                <div className={styles.datos}>
                    <span className={styles.spanDatos}>A.K.A</span>
                    <span className={styles.spanDatos}>Clasificacion</span>
                    <span className={styles.spanDatos}>Partidos jugados</span>
                    <span className={styles.spanDatos}>Goles</span>
                </div>
                <div className={styles.datos2}>
                    <span className={styles.spanJugador}>"El carnicero"</span>
                    <span className={styles.spanJugador}>4to</span>
                    <span className={styles.spanJugador}>18</span>
                    <span className={styles.spanJugador}>3</span>
                </div>
            </div>
        </div>
    );
};

export default FichaPlayer;
