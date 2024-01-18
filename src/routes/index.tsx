import { useUser } from "../hooks/useUser";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
    const { isAuthenticated } = useUser();

    return isAuthenticated ? <h1>Teste</h1> : <AuthRoutes />
}