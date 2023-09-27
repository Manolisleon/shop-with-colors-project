import React from "react";
import prod1 from "../assets/images/4Seasons-prod.png";
import prod2 from "../assets/images/vivecryl-prod.png";
import prod3 from "../assets/images/elastic-prod.png";
import prod4 from "../assets/images/vivecryl-elastic-prod.png";
import prod5 from "../assets/images/Acrylan-prod.png";
import prod6 from "../assets/images/Acrylan_Max-prod.png";

import "../css/style.css";

const products = [
    {
        image: prod1,
        alt: "4Seasons",
        info: "100% Ακρυλικό χρώμα εξωτερικής χρήσης.",
        url: "https://kraftpaints.gr/en/product/4seasons/",
    },
    {
        image: prod2,
        alt: "Vivecryl",
        info: "100% Ακρυλικό χρώμα εξωτερικής χρήσης.",
        url: "https://www.vivechrom.gr/en/products-listing/vivecryl-eco",
    },
    {
        image: prod3,
        alt: "4SEASONS ELASTIC",
        info: "Ελαστομερές μονωτικό και χρώμα για εξωτερικούς τοίχους.",
        url: "https://kraftpaints.gr/product/4seasons-elastic/",
    },
    {
        image: prod4,
        alt: "VIVECRYL ELASTIC",
        info: "Το VIVECRYL ELASTIC ECO είναι οικολογικό ελαστομερές ακρυλικό μονωτικό & χρώμα.",
        url: "https://www.vivechrom.gr/el/%CF%80%CF%81%CE%BF%CF%8A%CF%8C%CE%BD%CF%84%CE%B1/vivecryl-elastic-eco?size=2.9L",
    },
    {
        image: prod5,
        alt: "ACRYLAN",
        info: "Ελαστομερές μονωτικό και χρώμα για εξωτερικούς τοίχους.",
        url: "https://www.vitex.gr/product/acrylan/",
    },
    {
        image: prod6,
        alt: "ACRYLAN MAX",
        info: "ΝΑΝΟ-ΑΚΡΥΛΙΚΟ καινοτόµο µατ χρώµα τριυβριδικής (TRIBRID) νανοτεχνολογίας.",
        url: "https://www.vitex.gr/product/acrylan-max/",
    },
];

const Colors = () => {
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

export default Colors;