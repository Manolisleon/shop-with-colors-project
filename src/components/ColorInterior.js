import React from "react";
import prod1 from "../assets/images/master-prod.png";
import prod2 from "../assets/images/neopal-prod.png";
import prod3 from "../assets/images/vitex-prod.png";
import prod4 from "../assets/images/neopal-eco-prod.png";
import prod5 from "../assets/images/master-eco-prod.png";
import prod6 from "../assets/images/Vitex_Eco-prod.png";
import "../css/style.css";

const products = [
    {
        image: prod1,
        alt: "Master",
        info: "Χρώμα εσωτερικής χρήσης υψηλής ποιότητας.",
        url: "https://kraftpaints.gr/en/product/master-eurofins/",
    },
    {
        image: prod2,
        alt: "Super Neopal",
        info: "Χρώμα εσωτερικής χρήσης υψηλής ποιότητας.",
        url: "https://www.vivechrom.gr/en/products-listing/super-neopal",
    },
    {
        image: prod3,
        alt: "Vitex Classic",
        info: "Χρώμα εσωτερικής χρήσης υψηλής ποιότητας.",
        url: "https://www.vitex.gr/en/product/vitex-classic/",
    },
    {
        image: prod4,
        alt: "Super Neopal Eco",
        info: "Το SUPER NEOPAL ECO είναι οικολογικό ματ πλαστικό χρώμα ασυναγώνιστης ποιότητας.",
        url: "https://www.vivechrom.gr/el/%CF%80%CF%81%CE%BF%CF%8A%CF%8C%CE%BD%CF%84%CE%B1/super-neopal-eco?size=0.75L",
    },
    {
        image: prod5,
        alt: "Master Eco",
        info: "Οικολογικό πλαστικό χρώμα υψηλής ποιότητας.",
        url: "https://kraftpaints.com/products/master-eco",
    },
    {
        image: prod6,
        alt: "Vitex Eco",
        info: "Κορυφαίας Ποιότητας Οικολογικό πλαστικό χρώμα.",
        url: "https://www.vitex.gr/product/vitex-eco/",
    },
];

const ColorInterior = () => {
    return (
        <div className="color">
            <div className="card-container">
                {products.map((product, index) => 
                    <div className="card">
                        <img src={product.image} alt="master" />
                        <div>
                            <h2>{product.alt}</h2>
                            <p>
                                {product.info}
                            </p>
                            <button><a href={product.url} target="_blank" rel="noreferrer">Μάθετε περισσότερα</a></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
      );
}

export default ColorInterior;