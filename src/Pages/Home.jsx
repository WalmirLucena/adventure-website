import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import HomeSection from "../components/HomeSection";
import '../style.scss';
import CategorySection from "../components/CategorySection";

function Home(){
  return (
    <>
      <Header/>
      <SearchForm/>
      <main>
        <HomeSection/>
        <CategorySection/>
      </main>
    </>
    )
}
 export default Home;