import { useLocation } from "react-router-dom";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

const Home = () => {
  const location = useLocation();

  return (
    <Layout>
      <Navbar name={location?.state?.username} />
    </Layout>
  );
};

export default Home;
