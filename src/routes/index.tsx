import withAuth from "../hoc/with-auth";
import { AppRoutes } from "./app.routes";

export function Routes(){
    const AuthenticatedRoutes = withAuth(AppRoutes);
    return <AuthenticatedRoutes />;
}