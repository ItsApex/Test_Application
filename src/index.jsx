import React from "react";
import ReactDOMClient from "react-dom/client";
import { BeyondMerkhet } from "./screens/BeyondMerkhet";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<BeyondMerkhet />);
