import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TableExample, { TableExampleForDocuments } from "@/components/TableExample";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
import { EllipsisVertical } from 'lucide-react';

import { Sidebar } from "@/components/pages/Sidebar";

export default function Layout() {

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
                    <h2 className="text-xl font-semibold text-primary lg:text-display-xs">Site traffic</h2>
                    <div className="space-x-2">
                        <Button variant="outline">Switch dashboard</Button>
                        <Button>Export report</Button>
                    </div>
                </div>

                {/* Stats cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader><CardTitle>Total sessions</CardTitle></CardHeader>
                        <CardContent>
                            {/* <p className="text-2xl font-bold">526</p> */}
                            <img width={40}
                                src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
                                alt="" />
                            <p className="text-sm text-green-500">+2.4% vs last month</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Session duration</CardTitle>
                        </CardHeader>
                        <CardContent>
                            
                            {/* <p className="text-2xl font-bold">2:24</p> */}
                            <img width={40}
                                src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
                                alt="" />
                            <p className="text-sm text-green-500">+8.6% vs last month</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Pages per session</CardTitle></CardHeader>
                        <CardContent>
                            {/* <p className="text-2xl font-bold">316</p> */}
                            <img width={40}
                                src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-6TJq3TblGrgJLKvMLFj3N2YcDEXG2A.png&w=500&q=75"
                                alt="" />
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
