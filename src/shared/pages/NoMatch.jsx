import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../UI/Button/Button'
import { Footer } from '../UI/Footer/Footer'
import { Header } from '../UI/Header/Header'

const NoMatch = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="page-main main">
                <div className="site-container grid-container">
                    <div className="grid-container__block"></div>
                    <div className="grid-container__block">
                        <h1>
                            404 page
                        </h1>
                        <Button NavLink to='/'>
                            To Main
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default NoMatch