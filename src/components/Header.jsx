import React, {useState} from 'react';
import { faBars, faHiking, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style.scss";
const hiking = <FontAwesomeIcon icon={faHiking} />
const bars = <FontAwesomeIcon icon={faBars} />
const search = <FontAwesomeIcon icon={faSearch} />
const times = <FontAwesomeIcon icon={faTimes} />

function Header(){
    const [active, setActive] = useState(false);
    const handleclickMenu = () => {
        setActive(true);
        }
    const handleclickClose = () => {
        setActive(false);
        }

    return (
        <header className="header">
        <a href="hashtag" className="logo"><i className="fas fa-hiking">{hiking}</i>Explore Amazonia</a>
        <nav className={active? 'navbar active': 'navbar'}>
            <div id="nav-close" className="fas fa-times" onClick={handleclickClose}>{times}</div>
            <a href="#home">home</a>
            <a href="#about">sobre</a>
            <a href="#packages">pacotes</a>
            <a href="#reviews">reviews</a>
        </nav>
        <div className="icons">
            <div id="menu-btn" className="fas-fa-bars"
            onClick={handleclickMenu}>{bars}</div>
            <div id="search-btn" className="fas-fa-search">{search}</div>
        </div>
        </header>
    )
}
 export default Header;