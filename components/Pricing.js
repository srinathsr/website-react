import React from 'react';
import{ Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { Button } from './Button';
import { BsXDiamondFill } from 'react-icons/bs';
import {GiCrystalize} from 'react-icons/gi';
import {IconContext} from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
    return (
        <IconContext.Provider value={{color:'#fff',size:64}}>

<div>
            <div class="pricing__section">
                <div class="pricing__wrapper">
                    <h1 class="pricing__heading">Pricing</h1>
                        <div class="pricing__container">
                            <Link to="/sign-up" className="pricing__container-card">
                                <div class="pricing__container-cardInfo">
                                    <div class="icon">
                                        <FaFire />

                                    </div>
                                    <h3>Starter</h3>
                                    <h4>$8.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transcations</li>
                                        <li>2% Cash Back</li>
                                        <li>$10,000 limit</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="primary">
                                        Choose Plan</Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="pricing__container-card">
                                <div class="pricing__container-cardInfo">
                                    <div class="icon">
                                        <BsXDiamondFill />

                                    </div>
                                    <h3>Gold</h3>
                                    <h4>$29.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transcations</li>
                                        <li>3.5 Cash Back</li>
                                        <li>$10,000 limit</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="blue">
                                        Choose Plan</Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="pricing__container-card">
                                <div class="pricing__container-cardInfo">
                                    <div class="icon">
                                        <GiCrystalize />

                                    </div>
                                    <h3>Diamond</h3>
                                    <h4>$99.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transcations</li>
                                        <li>2% Cash Back</li>
                                        <li>$10,000 limit</li>
                                    </ul>
                                    <Button buttonSize="btn--wide" buttonColor="primary">
                                        Choose Plan</Button>
                                </div>
                            </Link>
                        </div>
                
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing;
