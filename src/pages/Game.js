// Home.js

import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import Nutriplay from "./Nutriplay";
import HealthySwap from "./HealthySwap";
import NutritionMyths from "./NutritionMyths";
import CalorieMatch from "./CalorieMatch";

const Game = () => {


    return (
        <>
            <Navbar1 />
            <Routes>
                <Route index element={<Nutriplay />} />
                <Route path="swap" element={<HealthySwap />} />
                <Route path="myths" element={<NutritionMyths />} />
                <Route path="calorie" element={<CalorieMatch />} />
            </Routes>
            <Footer />
        </>
    );
};

export default Game;
