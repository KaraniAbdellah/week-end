import { useEffect, useState } from "react";
import { Product } from "../../shared/types";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function getProducts() {
    try {
      const res = await fetch("http://localhost:4000/api/products");
      const data = await res.json();
      setProducts(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg animate-pulse">Loading products...</p>
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen p-10 font-sans">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        🛍️ Our Products
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p: Product) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 flex flex-col items-center"
          >
            <div className="w-36 h-36 mb-4 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.title}
                className="object-contain w-full h-full"
              />
            </div>
            <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">
              {p.title}
            </h2>
            <p className="text-blue-600 font-bold text-lg mb-1">${p.price}</p>
            <p className="text-gray-500 text-sm text-center mb-4 line-clamp-3">
              {p.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-yellow-500">
              <span>⭐ {p.rating.rate}</span>
              <span className="text-gray-500">({p.rating.count})</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
