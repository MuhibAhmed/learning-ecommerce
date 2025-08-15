import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import AddProduct from "./components/AddProduct";
import { useState } from "react";

// Map, ForEach, Filter

function App() {
  const [products, setProducts] = useState([
    {
      title: "Car",
      desc: "A fast car",
      img: "https://mgmotors.com.pk/_next/image?url=%2Fassets%2Fcropped-webp-models%2FMG4-crop.webp&w=1080&q=75",
    },
    { title: "Book", desc: "An interesting book", img: "book.jpg" },
    { title: "Bike", desc: "A mountain bike", img: "bike.jpg" },
    { title: "Car", desc: "A luxury car", img: "luxury-car.jpg" },
    { title: "Laptop", desc: "A sports car", img: "sports-car.jpg" },
  ]);

  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <AddProduct setProducts={setProducts} products={products} />
        <h1>My Products</h1>
        <div className="d-flex flex-wrap gap-3">
          {products.map((product) => {
            return (
              <ProductCard
                title={product.title}
                desc={product.desc}
                img={product.img}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;
