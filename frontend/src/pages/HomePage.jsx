import React from "react";
import Header from "../components/Layout/Header/Header";
import Slider from "../components/Layout/Slider/Slider";
import Categories from "../components/Layout/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Footer from "../components/Layout/Footer/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle /> 
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
