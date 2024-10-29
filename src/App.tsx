import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import Home from "./components/Home.tsx";
// import Reserves from "./components/Reserves.tsx";
import ParentComponent from "./components/ParentComponent.tsx";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<ParentComponent/>}/>
        </Routes>
    );
};

export default App;
