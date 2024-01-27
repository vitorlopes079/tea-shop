import Hero from "../_components/Hero";
import Services from "../_components/Services";
import CollectionsSection from "../_components/CollectionsSection";
import Wholesallers from "../_components/Wholesallers";
import LastBlogPosts from "../_components/LastBlogPosts";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CollectionsSection />
      <LastBlogPosts />
      <Wholesallers />
    </div>
  );
}
