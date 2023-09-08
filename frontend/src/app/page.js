import Accesories from "@/components/Accessories";
import Featured from "@/components/Featured";
import FeaturedBottom from "@/components/FeaturedBottom";
import Hero from "@/components/Hero";
import Hype from "@/components/Hype";
import NewItem from "@/components/NewItem";
import Showcase from "@/components/Showcase";
import Sponsor from "@/components/Sponsor";

export default function Home() {
  return (
    <main >
      <Hero/>
      <Sponsor />
      <Featured />
      <Hype/>
      <NewItem/>
      <FeaturedBottom/>
      <Accesories/>
      <Showcase/>
   
    </main>
  )
}
