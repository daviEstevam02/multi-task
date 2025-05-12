import API from "../api";

interface SignIn {
  email: string;
  passwordcode?: string;
}

interface LoginData {
  user: {
    email: string;
    username: string;
    id: string;
  };
  token: string;
}

async function login({ email }: SignIn) {
  const { data } = await API.post("/login", {
    email,
  });
  return data;
}

async function signInWithOnePassCode({ email, passwordcode }: SignIn) {
  const { data } = await API.post<LoginData>("/validate-code", {
    email,
    passwordcode,
  });

  return data;
}

export { login, signInWithOnePassCode };
