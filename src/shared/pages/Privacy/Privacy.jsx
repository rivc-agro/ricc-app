import React from 'react'
import { Header } from '../../UI/Header/Header'
import styles from './Privacy.scss';

const Privacy = () => {
    return (
        <div className = "page-wrapper" >
            <Header />
            <main className="page-main main">
                <div className="site-container grid-container">
                    <div className="grid-container__block"></div>
                    <div className="grid-container__block">
                        <section className={styles.section}>
                            <h1>
                                Privacy Policy
                            </h1>
                        </section>
                    </div>
                </div>
            </main>
        </div >
  )
}

export default Privacy