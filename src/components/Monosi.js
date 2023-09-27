import React from 'react';
import '../css/style.css';
import polusterini from '../assets/images/polusterini.jpg';
import karfia from '../assets/images/karfia.jpg';
import kolles from '../assets/images/kolles.jpg';
import dixti from '../assets/images/dixti.jpg';

const Monosi = (props) => {
    return (
        <>
            <div className='carousel-images'>
                <img src={props.src} alt={props.alt} />
            </div>
            <div className='info-monosi'>
                <h1>Συστήματα Θερμομόνωσης</h1>
                <div ref={props.myRef8} className={props.MyElementIsVisible8 ? "scale-in-hor-left images-prod" : "images-prod"}>
                    <img src={polusterini} alt="Πολυστερίνη" width="300px" height="300px" />
                    <img src={karfia} alt="Καρφιά" width="300px" height="300px" />
                    <img src={kolles} alt="Κόλλες" width="300px" height="300px" />
                    <img src={dixti} alt="Δίχτυ" width="300px" height="300px" />
                </div>
            </div>
        </>
    );
}

export default Monosi;