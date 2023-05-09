import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";

// const colors = {
//   brand: {
//     900: "#80D765",
//   },
//   black: {
//     900: "#00000",
//     800: "646464",
//   },
//   white:{
//     900:'#ffff'
//   }
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
