import styles from "./App.Nav.module.css";
import { Link, useNavigate } from "react-router-dom";

const AppNav = () => {
    return (
        <header className={styles.header}>
            <div>logo</div>
            <div className={styles.navContainer}>
                <div>
                    <Link to="/clasificacion" style={{ textDecoration: "none" }}>
                        <span>Clasificación</span>
                    </Link>
                </div>
                <div>
                    <span>Partidos</span>
                </div>
                <div>
                    <Link to="jugadores" style={{ textDecoration: "none" }}>
                        <span>Jugadores</span>
                    </Link>
                </div>
                <div>
                    <span>Home</span>
                </div>
            </div>
        </header>
    );
};

export default AppNav;
