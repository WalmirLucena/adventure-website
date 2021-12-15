import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import HomeSection from "../components/HomeSection";
import '../style.scss';

function Home(){
  return (
    <main>
      <Header/>
      <SearchForm/>
      <HomeSection/>
    </main>
    )
}
 export default Home;