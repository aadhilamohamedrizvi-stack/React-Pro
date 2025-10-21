import React from "react";
import './Hero.css';
import hand_icon from '../Assets/hand.png'
import arrow_icon from '../Assets/arrow.jpg'
import hero_image from '../Assets/hero.jpeg'

const Hero = () => {
    return (
        <div className='hero'>
<div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>


<div>
    <div className="hero-hand-icon">
        
        <img src={hand_icon} alt="" />
    </div>
    <div>
    <p>New Collections </p>
    <p>For Everyone</p> </div>
    
</div>

</div>
<div className="hero-right">
<img src={hero_image} alt="" />
</div>
        </div>
    )
}
export default  Hero;