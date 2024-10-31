import { useUser } from "../hooks/useUser";
import { AuthRoutes } from "../routes/auth.routes";

function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
    return function AuthenticatedComponent(props: P) {
        const { isAuthenticated } = useUser();

        if (!isAuthenticated) {
            return <AuthRoutes />
        }

        return <WrappedComponent {...props} />
    };
}

export default withAuth;