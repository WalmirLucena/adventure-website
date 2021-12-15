import "../style.scss";
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from "react";
import Context from "../contexts/Context";
const searchIcon = <FontAwesomeIcon icon={faSearch} />
const times = <FontAwesomeIcon icon={faTimes} />

export default function SearchForm(){
  const {searchBox, handleSearchBox} = useContext(Context);

      return (
      <div className={searchBox?"search-form active" : "search-form"}>
        <div id="close-search" className="fas fa-times" onClick={handleSearchBox}>{times}</div>
        <form action="">
          <input type="search" name="" placeholder="Pesquise aqui ..." id="search-box"/>
          <label htmlFor="search-box" className="fas fa-search">{searchIcon}</label>
        </form>
      </div>
    )
}