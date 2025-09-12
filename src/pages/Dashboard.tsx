import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TableExample, { TableExampleForDocuments } from "@/components/TableExample";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";

import { Sidebar } from "@/components/pages/Sidebar";

export default function Layout() {
    // const [openFolders, setOpenFolders] = useState(false);

    const [sessions] = useState([
        { name: "Documentation", sessions: 4288, avg: "1m 24s", percent: "62.4%" },
        { name: "Projects", sessions: 582, avg: "1m 08s", percent: "8.2%" },
        { name: "Reports", sessions: 464, avg: "1m 12s", percent: "7.6%" },
        { name: "Accounts", sessions: 446, avg: "2m 22s", percent: "7.2%" },
    ]);
    return (
        <div className="flex h-screen">
            {/* Sidebar fixe */}
            <div >
                <Sidebar />
            </div>

            {/* Contenu principal scrollable */}
            <main className="ml-64 flex-1 h-screen overflow-y-auto p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Site traffic</h2>
                    <div className="space-x-2">
                        <Button variant="outline">Switch dashboard</Button>
                        <Button>Export report</Button>
                    </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-4">
                    <Card>
                        <CardHeader><CardTitle>Total sessions</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">526</p>
                            <p className="text-sm text-green-500">+2.4% vs last month</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Session duration</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">2:24</p>
                            <p className="text-sm text-green-500">+8.6% vs last month</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Pages per session</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">316</p>
                            <p className="text-sm text-green-500">+6.0% vs last month</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Table */}
                <Card>
                    <CardHeader><CardTitle>Pages and screens</CardTitle></CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between mb-4">
                            <Input placeholder="Search" className="w-64" />
                            <Button variant="outline">Filters</Button>
                        </div>
                        <TableExample />
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
