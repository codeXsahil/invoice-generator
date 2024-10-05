import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button variant="outline" className="inline-flex gap-2">
            <CirclePlus className="w-4 h-4" />
            create invoices
          </Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left p-4">Date</TableHead>
            <TableHead className="text-left p-4">Customer</TableHead>
            <TableHead className="text-left p-4">Email</TableHead>
            <TableHead className="text-left p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium p-4 text-left">
              <span className="font-semibold ">31/01/2003</span>
            </TableCell>
            <TableCell className="text-left p-4">
              <span className="font-semibold">Sahil </span>
            </TableCell>
            <TableCell className="text-left p-4">
              <span>TEmpmail@gmail.com </span>
            </TableCell>
            <TableCell className="text-left p-4">
              <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="text-right p-4">
              <span className="font-semibold">₹250.00 </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
