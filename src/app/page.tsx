import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import RecipeSection from '@/components/RecipeSection';
import RecipeInfo from '@/components/RecipeInfo';
import Footer from '@/components/Footer';
import { recipes } from '@/data/recipes';

export default function Home() {

  return (
    <>
      <Navigation />
      <div className="container">
        <Header />
        <RecipeSection recipes={recipes} />
        <RecipeInfo />
      </div>
      <Footer />
    </>
  );
}
