import ScrollReveal from "../../components/common/ScrollReveal.jsx";
import About from "../../components/HomeComponent/About/About";
import ContactMe from "../../components/HomeComponent/ContactMe/ContactMe.jsx";
import Hero from "../../components/HomeComponent/Hero/Hero";
import Projects from "../../components/HomeComponent/Projects/Projects.jsx";
import Skills from "../../components/HomeComponent/ٍSkills/Skills";
const Home = ()=>{
    return(
        <>
        <Hero />
        <ScrollReveal>
            <About />
        </ScrollReveal >
        <ScrollReveal>
            <Skills />
        </ScrollReveal>
        <ScrollReveal>
            <Projects />
        </ScrollReveal>
        <ScrollReveal>
            <ContactMe />
        </ScrollReveal>
        </>
    )
}
export default Home;