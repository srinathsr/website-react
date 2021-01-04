import React from 'react';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import './HeroSection.css'

function HeroSection({
    lightBg,topLine,lightText,lightTextDesc,
    headline,description,buttonLabel,img,alt,imgStart
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section': 'home__hero-section darkBg'}>
            <div class="container">
                <div class="row home__hero-row"
                style={{display:'flex',flexDirection:imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div class="col">
                        <div class="home__hero-text-wrapper">
                            <div class="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</ h1>
                        <p className= {lightText ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                        <Link to="/sign-up">
                            <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                        </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="home__hero-img-wrapper">
                            <img src={img} alt={alt} class="home__hero-img"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default HeroSection;