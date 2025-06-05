import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import DesignConsultationCTA from "@/components/DesignConsultationCTA"
import ProductCategories from "@/components/ProductCategories"
import PopularProducts from "@/components/PopularProducts"
import ServicesSection from "@/components/ServicesSection"
import AboutSection from "@/components/AboutSection"
import HowItWorks from "@/components/HowItWorks"
import Footer from "@/components/Footer"
import SS from "@/components/SubscribeSection"
import SubscribeSection from "@/components/SubscribeSection"


export default function Page() {
  return (
    <>
  <HeroSection />
         <DesignConsultationCTA />
         <ProductCategories />
         <PopularProducts />
         <ServicesSection />
         <AboutSection />
         <HowItWorks />
    
    </>
  );
}