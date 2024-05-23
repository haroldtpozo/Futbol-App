import styles from "./FichaGeneral.module.css";

const FichaStadistics = () => {
    return (
        <div className={styles.containerData}>
            <div className={styles.title}>
                <h1>Estadísticas</h1>
            </div>

            <div className={styles.containerEstadis}>
                <div className={styles.containerData1}>
                    <div className={styles.containerDatos}>
                        <span className={styles.spanDatos}>Goles</span>
                        <span className={styles.spanDatos}>Tarjetas</span>
                        <span className={styles.spanDatos}>Media de goles</span>
                        <span className={styles.spanDatos}>Goles de equipo</span>
                    </div>
                    <div className={styles.containerDataplayer}>
                        <span className={styles.spanJugador}>12</span>
                        <span className={styles.spanJugador}>2</span>
                        <span className={styles.spanJugador}>2,90</span>
                        <span className={styles.spanJugador}>190</span>
                    </div>
                </div>
                <div className={styles.containerData2}>
                    <div className={styles.containerDatos}>
                        <span className={styles.spanDatos}>Partidos ganados</span>
                        <span className={styles.spanDatos}>Partidos empatados</span>
                        <span className={styles.spanDatos}>Partidos perdidos</span>
                        <span className={styles.spanDatos}>Media pts. partido</span>
                    </div>
                    <div className={styles.containerDataplayer}>
                        <span className={styles.spanJugador}>12</span>
                        <span className={styles.spanJugador}>2</span>
                        <span className={styles.spanJugador}>2,90</span>
                        <span className={styles.spanJugador}>190</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FichaStadistics;
