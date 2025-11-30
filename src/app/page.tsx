import CombinedFeaturedSection from "@/components/ui/combined-featured-section";
import HeroFuturistic from "@/components/ui/hero-futuristic";
import Navbar from "@/components/ui/navbar";
import TrustedBy from "@/components/ui/trusted-by";
import { Navbar1 } from "@/components/ui/navbar-1";
import PricingSectionComponent from "@/components/ui/pricing-section";
import FAQSection from "@/components/ui/faq-section";
import StickyFooter from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="w-full bg-gray-50">
      <Navbar1 />
      <div className="bg-stone-50 py-6 md:py-8">
        <div className="border-t border-gray-200 max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8"></div>
      </div>
      {/* Navbar temporarily removed */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 -mt-4 md:-mt-6">
        {/* Hero Section Frame */}
        <div className="border-t border-l border-r border-gray-200 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] bg-white flex relative overflow-hidden">
          <HeroFuturistic />
        </div>
        
        {/* Bottom border line - separate element to ensure visibility */}
        <div className="border-b border-gray-200 bg-white"></div>
        
        {/* Trusted By Section Frame */}
        <div className="border-l border-r border-b border-gray-200 bg-white">
          <TrustedBy />
        </div>
        <CombinedFeaturedSection />
      </div>
      
      <PricingSectionComponent />
      <FAQSection />
      
      {/* Footer Section */}
      <div className="min-h-[60vh] sm:min-h-[80vh] h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-gray-50 to-stone-50 px-4 py-12 sm:py-0">
        <div className="text-center">
          <h2 className="leading-none font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900/60 mb-4 sm:mb-6 text-xl sm:text-2xl md:text-4xl px-4">
            Show up where it matters most.
          </h2>
          <div className="w-12 sm:w-16 md:w-24 h-0.5 bg-gradient-to-r from-[#1d40b0] to-[#1d40b0]/60 mx-auto"></div>
        </div>
      </div>
      
      <StickyFooter />
    </main>
  );
}
