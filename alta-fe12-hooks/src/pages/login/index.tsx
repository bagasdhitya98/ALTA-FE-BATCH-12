import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

const Login = () => {
  const [color, setColor] = useState(false);
  const navigate = useNavigate();

  const name = "John Doe";

  return (
    <div>
      <p
        className={`${color ? "text-green-500" : "text-red-500"} font-semibold`}
      >
        Lorem Ipsum dolor sit amet
      </p>
      <Button
        label="Change Color to Red"
        name="change-color"
        onClick={() => setColor(true)}
      />
      <p className={`text-blue-500 font-semibold`}>
        Lorem Ipsum dolor sit amet
      </p>
      <p className={`text-yellow-500 font-semibold`}>
        Lorem Ipsum dolor sit amet
      </p>
      <Button
        label="Navigate to Home"
        name="navigate-home"
        onClick={() =>
          navigate("/home", {
            state: {
              name: name,
            },
          })
        }
      />
    </div>
  );
};

export default Login;
