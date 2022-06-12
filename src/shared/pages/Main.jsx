import React from 'react';
import { Benefits } from './sections/Benefits/Benefits';
import { Intro } from './sections/Intro/Intro';
import { Types } from './sections/Types/Types';

const Main = () => {
    return (
        <main className="page-main main">
            <div className="site-container grid-container">
                <div className="grid-container__block"></div>
                <div className="grid-container__block">
                    <Intro />
                    <Benefits />
                    <Types />
                </div>
            </div>
        </main>
    );
};

export default Main;