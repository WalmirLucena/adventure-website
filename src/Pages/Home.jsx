import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import HomeSection from "../components/HomeSection";
import '../style.scss';
import CategorySection from "../components/CategorySection";
import PackagesSection from "../components/PackagesSection";

function Home(){
  return (
    <>
      <Header/>
      <SearchForm/>
      <main>
        <HomeSection/>
        <CategorySection/>
        <PackagesSection/>
      </main>
    </>
    )
}
 export default Home;