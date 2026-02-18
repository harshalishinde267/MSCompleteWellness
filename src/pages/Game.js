<<<<<<< HEAD
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
=======
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
>>>>>>> c768e10a8b9240f8cb33177b72ef395fd7c67bc6
