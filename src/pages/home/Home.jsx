import About from "../../components/HomeComponent/About Restaurant/About Restaurant";
import Gallery from "../../components/HomeComponent/Gallery/Gallery";
import Hero from "../../components/HomeComponent/Hero/Hero";
import LocationContact from "../../components/HomeComponent/Location & Contact/Location & Contact";
import Menu from "../../components/HomeComponent/Menu Preview/Menu Preview";
import Reviews from "../../components/HomeComponent/Reviews/Reviews";
import SignatureDish from "../../components/HomeComponent/Signature Dishes/Signature Dishes";
import SpecialOffer from "../../components/HomeComponent/Special Offer/Special Offer";

const Home = ()=>{
    return(
        <>
        <Hero />
        <SignatureDish />
        <Menu />
        <About />
        <SpecialOffer />
        <Gallery />
        <Reviews />
        <LocationContact />
        </>
    )
}
export default Home;