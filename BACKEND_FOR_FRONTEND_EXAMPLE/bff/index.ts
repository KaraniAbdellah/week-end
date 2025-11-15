import express from "express";
import fetch from "node-fetch";
import { Product } from "../shared/types.ts";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: true,
  })
);

app.get("/api/products", async (req, res) => {
  // BFF Layer call an api for get the products data
  const data = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = (await data.json()) as Product[];
  res.json(products);
});

app.listen(4000, () => console.log("BFF running on port 4000"));
