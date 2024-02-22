import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Routes } from "./routes";

import { GlobalStyles } from "./styles/GlobalStyles";
import { AccountsAuthenticatorProvider } from "./context/AccountsAuthenticator";

function App() {

  return (
    <BrowserRouter>
       <AuthProvider>
        <AccountsAuthenticatorProvider>
        <GlobalStyles />
        <Routes />  
        </AccountsAuthenticatorProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
