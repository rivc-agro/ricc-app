import React from 'react';
import { Footer } from '../UI/Footer/Footer';
import { Header } from '../UI/Header/Header';
import { Benefits } from './sections/Benefits/Benefits';
import { Dashbord } from './sections/Dashbord/Dashbord';
import { Intro } from './sections/Intro/Intro';
import { Types } from './sections/Types/Types';
import { Integrations } from './sections/Integrations/Integrations';
import { WhyUs } from './sections/WhyUs/WhyUs';
import { WeWork } from './sections/WeWork/WeWork';

const Main = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="page-main main">
                <div className="site-container grid-container">
                    <div className="grid-container__block"></div>
                    <div className="grid-container__block">
                        <Intro />
                        <Benefits />
                        <Types />
                        <Dashbord />
                        <Integrations />
                        <WhyUs />
                        <WeWork />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Main;