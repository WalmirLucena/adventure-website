export default function SearchForm(){
    return (
      <div className="search-form">
        <div id="close-search" className="fas fa-times"></div>
        <form action="">
          <input type="search" name="" placeholder="Pesquise aqui ..." id="search-box"/>
          <label for="search-box" className="fas fa-search"></label>
        </form>
        </div>
    )
}