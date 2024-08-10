import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = createRoot(document.getElementById("root"));
root.render(
  <App />
);