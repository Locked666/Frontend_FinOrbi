import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Search,
  Edit,
  Trash2
} from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", receita: 5000, despesa: 3200 },
  { month: "Fev", receita: 6200, despesa: 4100 },
  { month: "Mar", receita: 5800, despesa: 3900 },
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Receitas</CardTitle>
            <TrendingUp className="h-6 w-6" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">R$ 12.800</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Despesas</CardTitle>
            <TrendingDown className="h-6 w-6" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-red-600">R$ 7.200</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total</CardTitle>
            <DollarSign className="h-6 w-6" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$ 5.600</p>
          </CardContent>
        </Card>
      </div>

      {/* GRAFICO */}
      <Card>
        <CardHeader>
          <CardTitle>Receitas x Despesas</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Bar dataKey="receita" fill="#4ade80" />
              <Bar dataKey="despesa" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* CALENDÁRIO */}
      <Card>
        <CardHeader>
          <CardTitle>Contas a Pagar / Receber</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar className="rounded-md border" />
        </CardContent>
      </Card>

      {/* TABELA DE MOVIMENTAÇÕES */}
      <Card>
        <CardHeader>
          <CardTitle>Movimentações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Input placeholder="Descrição" className="max-w-xs" />
            <Input placeholder="Data" type="date" className="max-w-xs" />
            <Input placeholder="Tipo (Receita/Despesa)" className="max-w-xs" />
            <Button variant="outline"><Search className="h-4 w-4 mr-2" /> Filtrar</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>10/02/2025</TableCell>
                <TableCell>Venda X</TableCell>
                <TableCell className="text-green-600 font-medium">Receita</TableCell>
                <TableCell>R$ 2.500</TableCell>
                <TableCell className="flex gap-2">
                  <Button size="sm" variant="outline"><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="destructive"><Trash2 className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>12/02/2025</TableCell>
                <TableCell>Conta de energia</TableCell>
                <TableCell className="text-red-600 font-medium">Despesa</TableCell>
                <TableCell>R$ 450</TableCell>
                <TableCell className="flex gap-2">
                  <Button size="sm" variant="outline"><Edit className="h-4 w-4" /></Button>
                  <Button size="sm" variant="destructive"><Trash2 className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}