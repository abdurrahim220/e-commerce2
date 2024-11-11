import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>
);
