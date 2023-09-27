import React, { useState } from "react";
import "../css/style.css";
import image1 from "../assets/images/4Seasons_New.jpg";
import image2 from "../assets/images/master.jpg";
import image3 from "../assets/images/yato-tools.jpg";

const imgs = [
    {
        image: image1,
        alt: "4Seasons",
        info: "100% Ακρυλικά και Θερμομονωτικά Χρώματα Υψηλής Ποιότητας",
    },
    {
        image: image2,
        alt: "Master",
        info: "Οικολογικά Χρώματα Εσωτερικής Χρήσης Αρίστης Ποιότητας ",
    },
    {
        image: image3,
        alt: "Yato",
        info: "Όλα τα είδη εργαλείων Yato Tools για κάθε επαγγελματία",
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Fixed useState usage

    const handlePreve = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length); // Corrected index calculation
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length); // Corrected index calculation
    };

    return (
        <div>
            <div className="carousel">
                <div className="carousel-images">
                    {imgs.map((img, index) => 
                        <img
                            key={index}
                            src={img.image}
                            alt={img.alt}
                            className={currentIndex === index ? "active" : "inactive"}
                        />
                    )}
                </div>
                {imgs.map((img, index) => 
                    <div className={currentIndex === index ? "active images-contents" : "inactive"}>
                        <p>{img.info}</p>
                    </div>
                )}
                <div className="carousel-controls">
                    <button className="left-btn" onClick={handlePreve}>
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button className="right-btn" onClick={handleNext}>
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Carousel;
