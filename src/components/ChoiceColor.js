import React from "react";
import "../css/style.css";

const ChoiceColor = (props) => {
    return (
        <>
            <div className="exterior-interior">
                <div ref={props.myRef4} className={props.MyElementIsVisible4 ? "scale-in-hor-left cardExterior" : "cardExterior"}>
                    <a href="Exterior">
                        <img src={props.src1} alt={props.alt1} width="100%" height="200px" />
                        <p>{props.paragraph1}</p>
                    </a>
                </div>
                <div ref={props.myRef4} className={props.MyElementIsVisible4 ? "scale-in-hor-right cardExterior" : "cardExterior"}>
                    <a href="Interior">
                        <img src={props.src2} alt={props.alt2} width="100%" height="200px" />
                        <p>{props.paragraph2}</p>
                    </a>
                </div>
            </div>
        </>
    );
}

export default ChoiceColor;