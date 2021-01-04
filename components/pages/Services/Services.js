import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing';
import {homeObjone} from './Data'
 function Services() {
    return (
        <>
         
                 <Pricing/>
         <HeroSection {...homeObjone}/>   
        </>
    )
}

export default Services;
