import { useState } from "react";
import { useLocation } from "react-router-dom";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

const Home = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <Navbar
        name={location?.state?.username}
        handleProfile={() => setShowModal(true)}
      />
      <Modal
        title="Settings"
        isOpen={showModal}
        isClose={() => setShowModal(false)}
      />
    </Layout>
  );
};

export default Home;
