"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Cloud, Shield } from "lucide-react";

const assetMap = [
  { "id": "company-logo", "url": "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A vibrant retro Apple logo with rainbow colors on a sleek black background." },
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "technology office - Photo by Pew Nguyen" },
  { "id": "about-image", "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Overhead view of a diverse team in a business meeting using laptops and tablets." },
  { "id": "feature-image1", "url": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a computer screen displaying programming code in a dark environment." },
  { "id": "feature-image2", "url": "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Detailed image of a server rack with glowing lights in a modern data center." },
  { "id": "testimonial-image1", "url": "https://images.pexels.com/photos/6476253/pexels-photo-6476253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Diverse business team in a meeting analyzing client testimonial on laptop screen." },
  { "id": "testimonial-image2", "url": "https://images.pexels.com/photos/7731373/pexels-photo-7731373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of hands typing on a laptop and reviewing business documents, focused on finance and legal tasks." },
  { "id": "social-logo1", "url": "https://images.pexels.com/photos/26954172/pexels-photo-26954172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Detailed close-up photo of a Lamborghini logo on a sleek black car hood, symbolizing luxury and style." },
  { "id": "social-logo2", "url": "https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A diverse group of professionals engage in a collaborative team meeting in a stylish office environment." }
];

export default function Page() {
  const logoAsset = assetMap.find(a => a.id === "company-logo");
  const heroImage = assetMap.find(a => a.id === "hero-image");
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <NavbarLayoutFloatingOverlay
            navItems={[{ name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Services", id: "services" }, { name: "Contact", id: "contact" }]}
            logoSrc={logoAsset?.url ?? "/public/images/placeholder.webp"}
            brandName="Tech Solutions"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <HeroSplit
            title="Innovative IT Solutions"
            description="Empowering businesses with cutting-edge technology solutions."
            imageSrc={heroImage?.url ?? "/public/images/placeholder.webp"}
            buttons={[{ text: "Our Services", href: "services" }, { text: "Contact Us", href: "contact" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <TextSplitAbout
            title="About Us"
            description={["We are a team dedicated to providing reliable IT support and services.", "Our mission is to deliver innovative technology solutions for all your business needs."]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FeatureCardTwo
            title="Our Features"
            description="Explore the comprehensive technology solutions we offer."
            features={[{
              title: "Cloud Solutions",
              description: "Scalable cloud services for every business requirement.",
              icon: Cloud,
              button: { text: "Discover More", href: "features" }
            }, {
              title: "Cybersecurity",
              description: "Protecting your digital assets with top-notch security.",
              icon: Shield,
              button: { text: "Learn More", href: "features" }
            }]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <TestimonialCardOne
            title="What Our Clients Say"
            description="Hear from our clients about their experiences with our services."
            testimonials={[{
              id: "1",
              name: "Alex Johnson",
              role: "CEO, Tech Innovators",
              company: "Tech Innovators",
              rating: 5,
              imageSrc: assetMap.find(a => a.id === "testimonial-image1")?.url ?? "/public/images/placeholder.webp"
            }, {
              id: "2",
              name: "Maria Smith",
              role: "CTO, Innovate Inc.",
              company: "Innovate Inc",
              rating: 4,
              imageSrc: assetMap.find(a => a.id === "testimonial-image2")?.url ?? "/public/images/placeholder.webp"
            }]}
          />
        </div>
      </div>
      <div id="socialProof" data-section="socialProof" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <SocialProofOne
            title="Trusted By"
            description="Join the ranks of successful businesses using our solutions."
            logos={["social-logo1", "social-logo2", "social-logo3", "social-logo4", "social-logo5", "social-logo6"].map(id =>
              assetMap.find(a => a.id === id)?.url ?? "/public/images/placeholder.webp")}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <ContactSplit
            tag="Newsletter"
            title="Stay Connected"
            description="Subscribe for updates on our latest services and offerings."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[{ text: "Subscribe", href: "subscribe" }]}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FooterBase
            columns={[{
              title: "Products",
              items: [{ label: "Services", href: "services" }, { label: "Features", href: "features" }]
            }, {
              title: "Company",
              items: [{ label: "About Us", href: "about" }, { label: "Careers", href: "careers" }]
            }, {
              title: "Support",
              items: [{ label: "Contact", href: "contact" }, { label: "FAQ", href: "faq" }]
            }]}
            copyrightText="© 2025 Tech Solutions"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
