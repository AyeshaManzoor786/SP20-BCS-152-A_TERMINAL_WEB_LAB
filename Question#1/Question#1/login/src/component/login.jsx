import React from "react";
import { useState } from "react";
import { Box, TextField, Button, styled } from "@mui/material";

const LoginButton = styled(Button)`
  text-transform: none;
  height: 50px;
  background: black;
  color: white;
  border-radius: 2px;
`;
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  border: 2px solid grey;
  box-shadow: 2px 1px 1px 2px rgb(0 0 0 / 0.4);
`;

const OuterBox = styled(Box)`
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  // we apply the css on the child element through &>(yaha pr us child element ka original tag aya ga qk hum material ui me name change hoty ha na is liya)
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginPage = () => {
  const [login, setLogin] = useState({
    name: "Ayesha",
    email: "ayeshaahmad786@gmail.com",
    password: "12345",
  });
  const OnValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setLogin({ ...login, [e.target.name]: e.target.value }); //we use it to call the API and hit the API,we hit the API through login button
  };
  return (
    <Component>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      <OuterBox>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          name="username"
          onChange={(e) => OnValueChange(e)}
        />
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          name="email"
          onChange={(e) => OnValueChange(e)}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          name="password"
          onChange={(e) => OnValueChange(e)}
        />
        <LoginButton variant="contained">Login</LoginButton>
      </OuterBox>
    </Component>
  );
};

export default LoginPage;
