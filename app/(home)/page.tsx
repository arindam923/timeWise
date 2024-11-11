import AboutUs from "@/components/home/about-us";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <Hero />
      <AboutUs />
      {/* <Features /> */}
    </div>
  );
}
