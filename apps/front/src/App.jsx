import React from "react";
import { Routes, Route } from "react-router-dom";

import AppLayout from "./app/appLayout/AppLayout";
import Players from "./pages/players/Players";

import styles from "./App.module.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/jugadores" element={<Players />}></Route>
            </Route>
        </Routes>
    );
}
export default App;
