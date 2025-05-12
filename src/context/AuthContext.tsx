import { ReactNode, createContext, useCallback, useState } from "react";
import {
  login,
  signInWithOnePassCode,
} from "../services/user-services/user.services";
import { clearAuthToken, saveAuthToken } from "../utils/auth-token";
import { swalToast } from "../components/CustomToast";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  signIn: (email: string) => void;
  signOut: () => void;
  verifyOnePassCode(email: string, onePassCode: string): Promise<void>;
  userData?: UserData;
  isAuthenticated?: boolean;
}

interface UserData {
  email: string;
  username: string;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<UserData>();
  const isAuthenticated = !!userData;

  async function trySignIn(email: string) {
    const data = await login({ email });
    return data;
  }

  async function signIn(email: string) {
    try {
      await trySignIn(email);
    } catch (error) {
      swalToast({
        status: "error",
        description: "não foi possivel dar seguimento",
        title: "Ops! Algo deu errado",
      });
    }
  }

  async function tryVerifyOnePassCode(userEmail: string, onePassCode: string) {
    const { user, token } = await signInWithOnePassCode({
      email: userEmail,
      passwordcode: onePassCode,
    });
    saveAuthToken(token);
    setUserData({
      email: user.email,
      username: user.username,
    });
  }

  async function verifyOnePassCode(userEmail: string, onePassCode: string) {
    try {
      await tryVerifyOnePassCode(userEmail, onePassCode);
    } catch (error) {
      swalToast({
        status: "error",
        description: "não foi possivel dar seguimento",
        title: "Ops! Algo deu errado",
      });
    }
  }

  const clearTokenAndStates = useCallback(() => {
    clearAuthToken();
    setUserData(null!);
  }, []);

  const signOut = useCallback(() => {
    clearTokenAndStates();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signOut,
        signIn,
        verifyOnePassCode,
        userData,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
