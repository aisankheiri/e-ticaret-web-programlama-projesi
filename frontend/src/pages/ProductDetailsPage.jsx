import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ProductDetails />
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetailsPage;
