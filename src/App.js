import { About } from "./Component/About/About";
import { Banner } from "./Component/Banner/Banner";
import { Carousel } from "./Component/Carousel/Carousel";
import { Collection } from "./Component/Collection/Collection";
import { Community } from "./Component/Community/Community";
import { Deal } from "./Component/Deal/Deal";
import { Footer } from "./Component/Footer/Footer";
import { Header } from "./Component/Header/Header";
import { Poster } from "./Component/Poster/Poster";
import { Slider } from "./Component/Slider/Slider";
import { CardsPage } from "./Pages/Cards/CardsPage";
import { FeaturedProductsPage } from "./Pages/FeaturedProducts/FeaturedProductsPage";
import { NewArrivalPage } from "./Pages/NewArrival/NewArrivalPage";
import ProductsPage from "./Pages/Products/ProductsPage";
import { SellingProductsPage } from "./Pages/SellingProducts/SellingProductsPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="main">
        <ProductsPage />
        <Carousel />
        <Slider />
        <FeaturedProductsPage />
        <Poster />
        <CardsPage />
        <Deal />
        <SellingProductsPage />
        <Collection />
        <NewArrivalPage />
        <About />
        <Community />
      </div>
      <Footer />
    </div>
  );
}

export default App;
