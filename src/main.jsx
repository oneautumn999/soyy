import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { ThemeProvider as CustomThemeProvider } from "./components/styling/ThemeContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </ThemeProvider>
  </StrictMode>
);
