import React from "react";

import styles from "./Estadisticas.module.css";

import FichaPlayer from "../../components/fichaJugador/FichaJugador";
import FichaPerformance from "../../components/fichaPerformance/FichaPerformance";
import FichaStadistics from "../../components/fichaEstadisticas/FichaGeneral";
import Puntaje from "../../components/puntuacion/Puntuacion";

function Estadisticas() {
    return (
        <>
            <div className={styles.containerEstadisticas}>
                <div>
                    <h1>Ficha técnica</h1>
                </div>

                <div className={styles.containerGeneral}>
                    <div className={styles.containerJugador}>
                        <FichaPlayer />
                    </div>
                    <div className={styles.Container}>
                        <FichaPerformance />
                        <div className={styles.Container2}>
                            <FichaStadistics />
                            <Puntaje />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Estadisticas;
