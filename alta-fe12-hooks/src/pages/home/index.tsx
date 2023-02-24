import { useState } from "react";
import { useLocation } from "react-router-dom";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

const Home = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState(false);

  const Settings = () => {
    return (
      <div className="m-10 w-60 space-y-5">
        <Button
          name="mode"
          label={mode ? "White Mode" : "Dark Mode"}
          onClick={() => setMode(!mode)}
        />
        <Button name="logout" label="Logout" />
      </div>
    );
  };

  return (
    <Layout mode={mode}>
      <Navbar
        name={location?.state?.username}
        handleProfile={() => setShowModal(true)}
      />
      <Modal
        title="Settings"
        children={<Settings />}
        isOpen={showModal}
        isClose={() => setShowModal(false)}
      />
    </Layout>
  );
};

export default Home;
