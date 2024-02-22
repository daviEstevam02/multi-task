import { useContext } from "react";
import { AccountsAuthenticatorContext } from "../context/AccountsAuthenticator";

export function useAccounts() {
  return useContext(AccountsAuthenticatorContext);
}
