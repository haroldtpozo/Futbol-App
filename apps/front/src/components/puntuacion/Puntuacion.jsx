import styles from "./Puntuacion.module.css";

const Puntaje = () => {
    return (
        <div className={styles.containerPuntaje}>
            <div className={styles.containerText}>
                <span className={styles.textPuntaje}>45</span>
            </div>
        </div>
    );
};

export default Puntaje;
