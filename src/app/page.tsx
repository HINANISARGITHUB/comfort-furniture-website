import Hero from "./components/hero";
import CompaniesLogo from "./components/companieslogo";
import Featuredproduct from "./components/featuredproduct";

import Topcategories from "./components/topcategories";
import Ourproduct from "./components/ourproduct";
import Popularproduct from "./components/popularproduct";

export default function Home() {
  return (
    <div>
      <Hero />
      <CompaniesLogo />
      <Featuredproduct />
      <Topcategories />
      <Popularproduct />
      <Ourproduct/>
      
    </div>
  );
}
