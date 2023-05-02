import React, { useState } from 'react'
import SideBar from '../components/home/SideBar'
import MainBody from '../components/home/MainBody'
function Home() {
    const [currentSec,setCurrentSec] = useState(0);

    return (
        <section className="home">
            <SideBar setCurrentSec={setCurrentSec}/>
            <MainBody currentSec={currentSec}/>
        </section>
    )
}

export default Home