import API from "../api";

interface SignIn {
    email: string;
    passwordCode?: string;
}

interface LoginData {
    email: string;
    username: string;
    token: string;
}

async function login({
    email
}: SignIn) {
    const { data } = await API.post("/login", {
        email
    })
    return data;
}

async function signInWithOnePassCode({
    email,
    passwordCode
}: SignIn) {
    const { data } = await API.post<LoginData>("/verify-code", {
        email,
        passwordCode
    })

    return data;
}

export {
    login,
    signInWithOnePassCode
}