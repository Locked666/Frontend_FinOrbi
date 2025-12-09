import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search,DollarSign, ArrowUp, TrendingUpDown, Pencil, Trash } from "lucide-react";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: string;
}

export default function ExpensePage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, title: "Almoço", amount: 45.9, date: "10/01/2001" },
    { id: 2, title: "Combustível", amount: 120.0, date: "2025-01-09" },
    { id: 3, title: "Supermercado", amount: 230.5, date: "2025-01-06" },
    { id: 4, title: "Uber", amount: 22.9, date: "2025-01-04" },
    { id: 5, title: "Farmácia", amount: 80.0, date: "2025-01-02" },
    { id: 6, title: "Cinema", amount: 55.0, date: "2025-01-01" },
  ]);

  const filtered = expenses.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gastos</h1>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Inserir Gasto
        </Button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total do Mês</CardTitle>
            <DollarSign className="w-5 h-5 text-green-600" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">R$ 1.240,00</CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Maior Gasto</CardTitle>
            <ArrowUp className="w-5 h-5 text-red-600" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">R$ 450,00</CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Média Diária</CardTitle>
            <TrendingUpDown className="w-5 h-5 text-blue-600" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">R$ 120,00</CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-xs">
        <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Pesquisar gasto..."
          className="pl-8"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">Título</th>
              <th className="p-3">Valor</th>
              <th className="p-3">Data</th>
              <th className="p-3 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((expense) => (
              <tr key={expense.id} className="border-t ">
                <td className="p-3 font-medium">{expense.title}</td>
                <td className="p-3">R$ {expense.amount.toFixed(2)}</td>
                <td className="p-3">{expense.date}</td>
                <td className="p-3 flex justify-center gap-3">
                  <Button variant="ghost" size="icon">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-500">
                    <Trash className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 pt-4">
        <Button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>
          Anterior
        </Button>
        <span>
          Página {page} de {totalPages}
        </span>
        <Button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
        >
          Próxima
        </Button>
      </div>
    </div>
  );
}