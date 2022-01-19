import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import HomeSection from "../components/HomeSection";
import '../style.scss';
import CategorySection from "../components/CategorySection";
import PackagesSection from "../components/PackagesSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

function Home(){
  return (
    <main>
      <Header/>
      <SearchForm/>
      <HomeSection/>
      <CategorySection/>
      <PackagesSection/>
      <ServicesSection/>  
      <Footer/>
    </main>
    )
}
 export default Home;