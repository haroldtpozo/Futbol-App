import React from "react";

import styles from "./PlayerSticker.module.css";

import figurita from "../../assets/Figurita.jpg";

const Sticker = ({ style }) => {
    return (
        <div className={styles.containerSticker} style={style}>
            <div className={styles.containerPhoto}>
                <img src={figurita} alt="imagen-jugador" />
            </div>
            <div>
                <span>Rafael Barjuan</span>
            </div>
        </div>
    );
};

export default Sticker;
