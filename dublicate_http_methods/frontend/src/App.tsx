import { useState } from "react";
import "./index.css";

export function App() {
  const [product, setProducts] = useState();
  const [loading, setIsLoading] = useState(false);
  const getProducts = async () => {
    try {
      await fetch("http://127.0.0.1:3003/api/get_products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(() => data);
          console.log(data);
        })
        .finally(() => setIsLoading(() => true));
    } catch (e) {
      console.log("Can not get the data");
    }
  };
  return (
    <div>
      <button onClick={getProducts}>Click to get product</button>
      <br />
      <br />
      <br />

      {loading ? (
        <div key={product?.id} className="product" data-id={product?.id}>
          <div className="product-body">
            <h3 className="product-title">{product?.title}</h3>
            <p className="product-category">{product?.category}</p>
            <p className="product-price">{product?.price}</p>
          </div>
        </div>
      ) : (
        "Data not ready"
      )}
    </div>
  );
}

export default App;
