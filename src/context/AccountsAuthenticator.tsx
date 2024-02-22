import { ReactNode, createContext, useState } from "react";
import { Account, Configuration } from "msal"; 
import { swalToast } from "../components/CustomToast";
import * as msal from 'msal';


interface AccountsAuthenticatorProviderProps {
    children: ReactNode;
}

interface AccountsAuthenticatorContextProps{
    azureAuthenticate(): void;
    azureUserData?: Account;
    isAuthenticated?: boolean;
}

export const AccountsAuthenticatorContext = createContext({} as AccountsAuthenticatorContextProps);

export function AccountsAuthenticatorProvider({ children }: AccountsAuthenticatorProviderProps){
    const [azureUserData, setAzureUserData] = useState<Account>()
    const isAuthenticated = !!azureUserData;

     async function tryAzureAuthenticator(){
        const MSAL_CONFIG: Configuration = {
            auth: {
              clientId: import.meta.env.VITE_CLIENT_ID!,
              authority: `https://login.microsoftonline.com/${import.meta.env.VITE_TENANT_ID}`,
              redirectUri: 'http://localhost:5173/',
              navigateToLoginRequestUrl: false
            },
            cache: {
                cacheLocation: "localStorage", 
                storeAuthStateInCookie: false
            },
        };
          
        const msalInstance = new msal.UserAgentApplication(MSAL_CONFIG);
        
        if (!msalInstance.getAccount()) {
            await msalInstance.loginPopup()
            .then(response => {
                setAzureUserData(response.account)
                console.log("scopes: ",response.scopes)
                console.log("account: ",response.account)
                })
            .catch(error => {
                swalToast({ 
                    status: "error", 
                    description: `não foi possivel dar seguimento: ${error}`, 
                    title: "Ops! Algo deu errado" 
                })
            });
        }
    }

     async function azureAuthenticate(){
        try{
            await tryAzureAuthenticator();
        }catch(error){
            swalToast({ status: "error", description: "não foi possivel dar seguimento", title: "Ops! Algo deu errado" })
        }
    }

    return(
        <AccountsAuthenticatorContext.Provider
            value={{
                azureAuthenticate,
                azureUserData,
                isAuthenticated
            }}
        >
            {children}
        </AccountsAuthenticatorContext.Provider>
    )
}