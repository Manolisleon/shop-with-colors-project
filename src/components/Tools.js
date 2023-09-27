import React from "react";
import "../css/style.css";
import image1 from "../assets/images/Yato_Tools.webp";
import image2 from "../assets/images/ff-group-tools.jpg";

const Tools = (props) => {
    return (
        <>
            <div className="tools-container">
                <img src={image1} alt="Yato-Tools" />
                <div ref={props.myRef6} className={props.MyElementIsVisible6 ? "scale-in-hor-left images-contents" : "images-contents"}>
                    <h1>Yato Tools</h1>
                    <button className="btn"><a href="https://www.yatohandtools.com/Products" target="_blank" rel="noreferrer">Δείτε Περισσότερα..</a></button>
                </div>
            </div>
            <div className="tools-container">
                <img src={image2} alt="FF-Group" />
                <div ref={props.myRef7} className={props.MyElementIsVisible7 ? "scale-in-hor-right images-contents" : "images-contents"}>
                    <h1>FF-Groups Tools</h1>
                    <button className="btn"><a href="https://www.fournarakis.gr/en/brands/ff-group" target="_blank" rel="noreferrer">Δείτε Περισσότερα..</a></button>
                </div>
            </div>
        </>
    );
}

export default Tools;