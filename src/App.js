import { ThemeProvider } from "@mui/material/styles"
import { MuiButton } from "./stories/MuiButton"

let ayo = createTheme()
ayo = createTheme(ayo, {palette: {
  primary: {
    main: "#000",
    light: "#FFF"
  }
}})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ayo}>
        <MuiButton label="Button" />
      </ThemeProvider>
    </div>
  );
}

export default App;
