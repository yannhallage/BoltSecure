import { getSession } from "@/lib/localstorage";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const isTokenValid = (token: unknown): boolean => {
    try {
        const decoded: any = jwtDecode(token);
        const now = Date.now() / 1000;
        return decoded.exp > now;
    } catch {
        return false;
    }
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const session = getSession();

    if (!localStorage.getItem("token_connexion") || !isTokenValid(localStorage.getItem("token_connexion")))) {
        return <Navigate to="/auth" replace />;
    } else {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
