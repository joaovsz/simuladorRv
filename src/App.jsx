import { createTheme, ThemeProvider } from "@mui/material";
import "./global.css";
import { Form } from "./components/Form/Form";
import {Dados} from "./components/Results/Dados"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#6C4C9C",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#96BAFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <main>
      <Form />
      <Dados/>
      </main>
    </ThemeProvider>
  );
}

export default App;


