import React from "react";

import styles from "./Jornadas.module.css";

const JornadasMatch = () => {
    return (
        <div className={styles.fichaJornada}>
            <h2>Jornada 1</h2>
            <div className={styles.dataContainer}>
                <div className={styles.datosJornada}>
                    <span className={styles.spanDatos}>Goles</span>
                    <span className={styles.spanDatos}>Tarjeta</span>
                    <span className={styles.spanDatos}>Resultado</span>
                </div>
                <div className={styles.resultadosJornada}>
                    <div className={styles.squareGoles}>
                        <span className={styles.spanDatos}>5</span>
                    </div>
                    <div className={styles.squareTarjetas}></div>
                    <div className={styles.squareResultado}>
                        <span className={styles.spanDatos}>Victoria</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JornadasMatch;
