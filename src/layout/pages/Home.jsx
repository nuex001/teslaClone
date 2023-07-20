import React, { useState } from 'react'
import "../../assets/css/home.css"
import Header from '../components/home/Header'
import MainSec from '../components/home/MainSec'
import Join from '../components/home/Join'
function Home() {

    return (
        <div className="home">
            <Header/>
            <MainSec/>
            <Join/>
        </div>
    )
}

export default Home