import React from "react";
import "../css/style.css";

const lists = [
    "Αρχική",
    "Χρώματα",
    "Εργαλεία",
    "Μονώσεις",
    "Επικοινωνία",
];


const NavBar = (props) => {
    const toggleMenuOpen = () => document.body.classList.toggle("open");

    return (
        <nav className="navbar">
            <div className="navbar-overlay" onClick={toggleMenuOpen}></div>

            <button type="button" className="navbar-burger" onClick={toggleMenuOpen}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
            <div className="logo">
                <div className="red-line"></div>
                <h1 className="navbar-title"><a href="/">ΛΕΩΝΙΔΑΚΗ<br />ΚΟΚΚΑΛΑΡΑ Γ.</a></h1>
            </div>
            <nav className="navbar-menu">
                {lists.map((list, i) => <button key={i} type="button" className={ props.index===i ? "active" : "" }>
                    <a href={list}>{list}</a>
                </button>)}
            </nav>
        </nav>
    );
}


export default NavBar;