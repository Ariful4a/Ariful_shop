import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { CirclesWithBar } from "react-loader-spinner";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    setLoding(true);

    fetch('products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setTimeout(() => {
          setLoding(false);
        }, 1000); 
      });
  }, []);

  const AddtoCart = (product) =>{
    alert(`Add Succesfully......... ${product.name} ........:)`)
  }

if (loading) {
  return (
    <div className="min-h-screen bg-[#1f1f46] flex items-center justify-center">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        visible={true}
      />
    </div>
  );
}



  return (
    <div className="bg-[#32327d] pb-20">
      {/* Hero  */}
      <section>
        <section
          className="relative bg-cover bg-center h-96 flex items-center justify-center mt-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-4">Your Perfect Product</h1>
            <p className="text-lg mb-6">
              Discover high-quality products designed for your lifestyle. Shop
              now and experience the difference!
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg text-xl transition">
              Shop Now
            </button>
          </div>
        </section>

        {/* show products */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
          {
            products.map(item => <ProductCard key={item.id} item={item} onAddToCart={AddtoCart}></ProductCard>)
          }
        </div>
      </section>
    </div>
  );
};

export default Products;
