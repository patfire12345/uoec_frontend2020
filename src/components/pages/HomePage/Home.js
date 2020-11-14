import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
// import Search from '../../Search';

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            {/* <App /> */}
            {/* <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <Pricing />
            <HeroSection {...homeObjFour} /> */}
        </>
    )
}

export default Home
