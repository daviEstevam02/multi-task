import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Routes } from "./routes";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {

  return (
    <BrowserRouter>
       <AuthProvider>
        <GlobalStyles />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
