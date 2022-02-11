import React, {useContext, useState,useEffect} from 'react';
import { faBars, faHiking, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style.scss";
import { useLocation } from 'react-router-dom';
import Context from '../contexts/Context';
const hiking = <FontAwesomeIcon icon={faHiking} />
const bars = <FontAwesomeIcon icon={faBars} />
const search = <FontAwesomeIcon icon={faSearch} />
const times = <FontAwesomeIcon icon={faTimes} />

function Header(){
    const [active, setActive] = useState(false);
    const [background,setBackground] = useState(false);
    const { pathname } = useLocation();

    const { handleSearchBox } = useContext(Context);
    const handleclickMenu = () => {
        setActive(true);
        }
    const handleclickClose = () => {
        setActive(false);
        setBackground(false); 
        }
    useEffect(()=> {
        window.scrollTo(0, 0);
    },[]);

    

    useEffect(() => {
        if(pathname.includes('/pacotes') || pathname.includes('/categorias')){
            setBackground(true);
        } 
        const handleScroll = () => {

            const position = window.pageYOffset;
            if(position > 0 /* || pathname.includes('/pacotes') */ ){
                setBackground(true);
            } else {
                setBackground(false); 
            }
        }
        window.addEventListener("scroll", handleScroll);
    
      }, [pathname]);
  
    return (
        <header className={background? "header active": "header"} >
        <a href="hashtag" className="logo"><i className="fas fa-hiking">{hiking}</i> Explore Amazonia</a>
        <nav className={active? 'navbar active': 'navbar'}>
            <div id="nav-close" className="fas fa-times" onClick={handleclickClose}>{times}</div>
            <a href="/#home">home</a>
            <a href="/#category">Categorias</a>
            <a href="/#packages">Pacotes</a>
        </nav>
        <div className="icons">
            <div id="menu-btn" className="fas-fa-bars"
            onClick={handleclickMenu}>{bars}</div>
            <div id="search-btn" className="fas-fa-search" onClick={handleSearchBox}>{search}</div>
        </div>
        </header>
    )
}
 export default Header;