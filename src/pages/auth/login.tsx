import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email + " " + senha);
    // --- EXEMPLO ---
    // Chame sua API aqui usando fetch/axios
    const fakeToken = "123456789";
    const fakeUser = email;

    login(fakeToken, fakeUser);
    navigate("/");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Acesse sua Conta </CardTitle>
          <CardDescription>Entre com seu E-mail e Senha</CardDescription>
          <CardAction>
            <Button variant="link">Cadastre - se</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="*******"
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <div className="flex">
                  <ModeToggle />
                  <a
                    href="#"
                    className="ml-auto mt-2 inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu sua senha ?
                  </a>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Acessar
          </Button>
          <Button variant="outline" className="w-full">
            Login com o Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
