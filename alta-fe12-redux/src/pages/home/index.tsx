import React from "react";
import { useSelector } from "react-redux"
import { AuthState } from "../../features/authSlice"

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

const Home = () => {

  const auth = useSelector((state: { auth: AuthState }) => state.auth)

  return (
    <Layout>
      <Navbar />
      <div className="m-10">
        {
          auth.isAuthenticated ?
            <h1>Welcome {auth.user?.username}</h1>
            :
            <h1>Please Login</h1>
        }
      </div>
    </Layout>
  );
};

export default Home;
