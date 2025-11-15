import express from "express";
import cors from "cors";
const app = express();
const port = 3003;

app.use(cors({ origin: "*" }));

app.get("/api/get_products", (req, res) => {
  try {
    const data = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      rating: {
        rate: 3.9,
        count: 120,
      },
    };
    return res.status(200).send(data);
  } catch (e) {
    return res.status(500).send({ message: "error: " + e });
  }
});

app.listen(port, () => {
  console.log(`✅ Example app listening on port ${port}`);
});
