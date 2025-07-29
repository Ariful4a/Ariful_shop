import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

 

//   const [loading, setLoding] = useState(true);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
//           <p className="text-white text-xl">Loading products...</p>
//         </div>
//       </div>
//     );
//   }

  return (
    <div className="bg-[#32327d]">
      {/* Hero  */}
      <section>
        <section
          className="relative bg-cover bg-center h-96 flex items-center justify-center"
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
            {
                products.map(item => <ProductCard key={item.id} item={item}></ProductCard>)
            }
        </div>
      </section>
    </div>
  );
};

export default Products;
