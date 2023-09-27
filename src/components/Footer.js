import React from "react";
import "../css/style.css";

const Footer = () => {
    return (
        <section>
            <footer className="top">
                <div className="logo">
                    <div className="red-line"></div>
                    <h1 className="navbar-title"><a href="/">ΛΕΩΝΙΔΑΚΗ<br />ΚΟΚΚΑΛΑΡΑ Γ.</a></h1>
                </div>
                <div className="links">
                    <div className="links-column">
                        <h2>ΕΠΙΚΟΙΝΩΝΙΑ</h2>
                        <p>ΚΟΖΑΝΗΣ 33 ΓΙΑΝΝΟΥΛΗ ΛΑΡΙΣΑΣ</p>
                        <p>ΣΤΑΘΕΡΟ: 2410592532</p>
                        <p>ΚΙΝΗΤΟ: 6942487882</p>
                    </div>
                    <div className=" socials-column">
                        <div className="socials">
                        <a href="https://www.instagram.com/kokkalara_leonidaki_g/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="bottom">
                <p className="copyright">© 2023 All rights reserved</p>
                <div className="legal">
                <p>Developed by: <a href="https://manleo.000webhostapp.com/" target="_blank" rel="noreferrer"> Emmanouil Leonidakis </a></p>
                </div>
            </footer>
        </section>
    );
}

export default Footer;