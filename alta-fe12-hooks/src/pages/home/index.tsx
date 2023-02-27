import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

import { AuthContext } from "../../context/authContext";

const Home = () => {
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();

  function handleRemoveCookie() {
    removeCookie("Username", { path: "/" });
    Swal.fire({
      title: "Success",
      text: "Success remove cookie!",
      confirmButtonText: "OK",
    });
  }

  function handleRemoveSession() {
    sessionStorage.removeItem("Username");
    Swal.fire({
      title: "Success",
      text: "Success remove session!",
      confirmButtonText: "OK",
    });
  }

  function handleRemoveLocal() {
    localStorage.removeItem("Username");
    Swal.fire({
      title: "Success",
      text: "Success remove local storage!",
      confirmButtonText: "OK",
    });
  }

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
      {isLoggedIn ? (
        <>
          <div>
            <h1>Username via cookie : {cookies.Username}</h1>
            <h1>Password via cookie : {cookies.Password}</h1>
            <div className="w-60">
              <Button
                name="remove-cookie"
                label="Remove Cookies"
                onClick={() => handleRemoveCookie()}
              />
            </div>
          </div>
          <div>
            <h1>Username via session : {sessionStorage.getItem("Username")}</h1>
            <h1>Password via session : {sessionStorage.getItem("Password")}</h1>
            <div className="w-60">
              <Button
                name="remove-session"
                label="Remove Session"
                onClick={() => handleRemoveSession()}
              />
            </div>
          </div>
          <div>
            <h1>
              Username via local storage : {localStorage.getItem("Username")}
            </h1>
            <h1>
              Password via local storage : {localStorage.getItem("Password")}
            </h1>
            <div className="w-60">
              <Button
                name="remove-local"
                label="Remove Local Storage"
                onClick={() => handleRemoveLocal()}
              />
            </div>
          </div>
        </>
      ) : (
        <h1>You're not Logged In</h1>
      )}
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
