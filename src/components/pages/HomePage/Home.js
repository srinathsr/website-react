import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing';
import {homeObjone,homeObjTwo,homeObjThree,homeObjFour} from './Data'
 function Home() {
    return (
        <>
         <HeroSection {...homeObjone}/> 
         <HeroSection {...homeObjTwo}/> 
         <HeroSection {...homeObjThree}/> 
         <Pricing/>
         <HeroSection {...homeObjFour}/>   
        </>
    )
}

export default Home;
