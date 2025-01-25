import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <AboutMe />
        <Services />
        <Portfolio />
        <Blogs />
        <ContactForm />
      </main>
      <Footer/>
    </>
  );
}
