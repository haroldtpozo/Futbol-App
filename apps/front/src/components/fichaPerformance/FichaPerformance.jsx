import React from "react";

import styles from "./FichaPerformance.module.css";
import JornadasMatch from "../jornadas/Jornadas";

const FichaPerformance = () => {
    return (
        <div className={styles.fichaPerformance}>
            <div className={styles.title}>
                <h1>Performance</h1>
                <span>Últimos partidos</span>
            </div>
            <div className={styles.fichaJornadas}>
                <JornadasMatch />
                <JornadasMatch />
                <JornadasMatch />
            </div>
        </div>
    );
};

export default FichaPerformance;
