import React from "react";
import Header from "../components/Layout/Header/Header";
import Categories from "../components/Layout/Categories/Categories";
import Products from "../components/Products/Products";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Policy from "../components/Layout/Policy/Policy";
import Footer from "../components/Layout/Footer/Footer";


const ShopPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <Categories/>
      <Products />
      <CampaignSingle />
      <Products />
      <Policy/>
      <Footer/>
    </React.Fragment>
  )
}

export default ShopPage