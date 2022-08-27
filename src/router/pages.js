import React from "react";
import HomePage from "../pages/home/index";
import Layout from "../layout/index";
import Manage from "../pages/manage";
import ItemView from "../pages/home/itemView";

export const HomePageRoute = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};
export const ManageRoute = () => {
  return (
    <Layout>
      <Manage />
    </Layout>
  );
};
export const ItemViewRoute = () => {
  return (
    <Layout>
      <ItemView />
    </Layout>
  );
};
