import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes.tsx/AppRoutes";

export default function App() {
  return (
    //<div className="flex h-screen items-center justify-center">
    <ThemeProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
    //</div>
  );
}
