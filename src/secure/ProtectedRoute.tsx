import { getSession } from "@/lib/localstorage";
import { jwtDecode } from 'jwt-decode';
import { Navigate } from "react-router-dom";


const isTokenValid = (token: string): boolean => {
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

    if (!session) {
        return <Navigate to="/auth" replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
