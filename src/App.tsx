import { GlobalModal } from "./components/global/GlobalModal";
import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import AppRoutes from "./routes.tsx/AppRoutes";

export default function App() {
  return (
    //<div className="flex h-screen items-center justify-center">
    <ThemeProvider>
      <AuthProvider>
        <ModalProvider>
          <AppRoutes />
          <GlobalModal />
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
    //</div>
  );
}
