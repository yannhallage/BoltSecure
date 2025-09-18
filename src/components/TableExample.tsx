"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Eye, Copy } from "lucide-react"

import { Trash, CircleArrowOutUpRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Send } from 'lucide-react';
import { motion } from "framer-motion"
import { useGetPasswords } from '@/hooks/web/password/useGetPasswords';
import { useGetCreditcards } from '@/hooks/web/creditCarte/useGetCreditcards';
import { getSession } from '@/lib/localstorage';
import { socialAccounts, BankAccounts } from '@/data/socialAccounts';
import AlertComponent from "./pages/app/AlertComponent"



export default function TableExample() {
  const { user } = getSession();

  const { passwords, loading, error } = useGetPasswords(user ?? "");
  const { creditCards, loadings, errors } = useGetCreditcards(user ?? "");

  if (loading || loadings) {
    return (
      <p className="text-muted-foreground mt-4 text-center text-sm">
        Chargement des données...
      </p>
    );
  }

  if (error || errors) {
    return (
      <p className="text-red-500 mt-4 text-center text-sm">
        Erreur : {error || errors}
      </p>
    );
  }

  // Fusionner les données
  const allData = [
    ...(passwords || []).map((p: any) => ({ ...p, type: "password" })),
    ...(creditCards || []).map((c: any) => ({ ...c, type: "creditCard" })),
  ];

  // helper pour trouver socialAccount
  const findSocial = (item: any) => {
    const candidates: string[] = [];
    if (item.titre) candidates.push(item.titre.toLowerCase());
    if (item.card_brand) candidates.push(item.card_brand.toLowerCase());
    if (item.brand) candidates.push(item.brand.toLowerCase());
    if (item.reference?.valeur) candidates.push(item.reference.valeur.toLowerCase());

    return socialAccounts.find((acc: any) =>
      candidates.some((c) => acc.name?.toLowerCase() === c)
    );
  };

  // helper pour trouver bankAccount
  const findBank = (item: any) => {
    const candidates: string[] = [];
    if (item.bankName) candidates.push(item.bankName.toLowerCase());
    if (item.card_brand) candidates.push(item.card_brand.toLowerCase());
    if (item.titre) candidates.push(item.titre.toLowerCase());

    return BankAccounts.find(
      (bank: any) =>
        bank.bankName &&
        candidates.some((c) => bank.bankName?.toLowerCase().includes(c))
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Table className="rounded-xl overflow-hidden shadow-md border border-gray-200">
        <TableHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-white">Titre</TableHead>
            <TableHead className="text-white">Type</TableHead>
            <TableHead className="text-white">Date ajout</TableHead>
            <TableHead className="text-right text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allData.length > 0 ? (
            allData.map((item: any) => {
              const social = findSocial(item);
              const bank = item.type === "creditCard" ? findBank(item) : null;

              const title =
                item.titre || item.cardholder_name || item.card_brand || bank?.bankName || "Sans titre";

              return (
                <TableRow
                  key={`${item.type}-${item.id ?? item._id ?? Math.random()}`}
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {item.type === "creditCard" ? (
                        bank ? (
                          <img
                            className="rounded-full"
                            src={bank.image}
                            width={40}
                            height={40}
                            alt={bank.bankName}
                          />
                        ) : (
                          <div className="rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 p-1">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="16"
                                y="22"
                                width="32"
                                height="20"
                                rx="3"
                                stroke="#005C7A"
                                strokeWidth="2"
                                fill="#fff"
                              />
                              <line
                                x1="16"
                                y1="30"
                                x2="48"
                                y2="30"
                                stroke="#005C7A"
                                strokeWidth="2"
                              />
                              <circle cx="22" cy="36" r="2" fill="#005C7A" />
                              <circle cx="30" cy="36" r="2" fill="#005C7A" />
                            </svg>
                          </div>
                        )
                      ) : social ? (
                        <img
                          className="rounded-full"
                          src={social.image}
                          width={30}
                          height={30}
                          alt={title}
                        />
                      ) : (
                        <div className="rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 p-1">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M32 16C23.178 16 16 23.178 16 32C16 40.822 23.178 48 32 48C40.822 48 48 40.822 48 32C48 23.178 40.822 16 32 16ZM33.5 34.724V39C33.5 39.828 32.828 40.5 32 40.5C31.172 40.5 30.5 39.828 30.5 39V34.724C28.756 34.104 27.5 32.456 27.5 30.5C27.5 28.014 29.514 26 32 26C34.486 26 36.5 28.014 36.5 30.5C36.5 32.456 35.244 34.104 33.5 34.724Z"
                              fill="#005C7A"
                            />
                          </svg>
                        </div>
                      )}
                      <div className="font-medium text-gray-900">{title}</div>
                    </div>
                  </TableCell>

                  <TableCell className="text-[13px] text-gray-700">
                    {item.type === "password" ? "Mot de passe" : "Carte bancaire"}
                  </TableCell>

                  <TableCell className="text-[13px] text-gray-700">
                    {item.dateCreation || item.dateAjout
                      ? new Date(item.dateCreation || item.dateAjout).toLocaleDateString()
                      : "-"}
                  </TableCell>

                  <TableCell className="flex space-x-1 float-end justify-end text-[13px] text-gray-700">
                    <div className="mt-3">
                      <EditDialog
                        password={item.identifiant}
                        email={item.identifiant}
                        title={title}
                      />
                    </div>
                    <AlertComponent />
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                <p className="text-gray-500 mt-4 text-center text-sm">
                  Aucune donnée disponible pour l'instant.
                </p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </motion.div>
  );
}
export function TableExampleForDocuments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
    >
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Balance</TableHead>
            <TableHead>Effectuer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemsDocuments ? (
            itemsDocuments.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-full"
                      src={item.image}
                      width={40}
                      height={40}
                      alt={item.name}
                    />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <span className="text-muted-foreground mt-0.5 text-xs">
                        {item.username}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="text-right">{item.balance}</TableCell>
                <TableCell className="">
                  <div className='flex justify-center gap-2'>
                    <Trash
                      size={16}
                      className="cursor-pointer hover:text-red-500"
                    />
                    <CircleArrowOutUpRight
                      size={16}
                      className="cursor-pointer hover:text-red-500"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        {
          itemsDocuments.length === 0
            ? "Aucune données en disponible pour l'instant."
            : ""
        }
      </p>
    </motion.div>
  )
}


function EditDialog({ email, password, title }: any) {
  // const id = useId()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Send className="w-4 h-4 text-gray-500 cursor-pointer hover:text-blue-500 transition-colors" />
      </DialogTrigger>

      <DialogContent className="max-w-md rounded-xl p-0 overflow-hidden">
        <div className="flex justify-between items-center border-b px-4 py-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          {/* <Button variant="ghost" size="sm">Edit</Button> */}
        </div>
        <div className="divide-y">
          <div className="px-4 py-3">
            <Label className="block text-sm text-gray-500 mb-1">Email or Username</Label>
            <p className="text-sm text-gray-800">{email}</p>
          </div>
          <div className="px-4 py-3">
            <Label className="block text-sm text-gray-500 mb-1">{"mot de passe"}</Label>
            <div className="flex items-center justify-between">
              <span className="tracking-widest text-sm">
                {showPassword ? password : "••••••••••"}
              </span>
              <div className="flex items-center gap-3">
                <Eye
                  className="w-4 h-4 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                />
                <Copy className="w-4 h-4 cursor-pointer text-gray-600" />
              </div>
            </div>
          </div>
          <div className="px-4 py-3">
            <Label className="block text-sm text-gray-500 mb-1">Password Health</Label>
            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Strong Password
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Get more security tips with Premium.{" "}
              <span className="underline cursor-pointer">Upgrade</span>
            </p>
          </div>
          <div className="px-4 py-3">
            <Label className="block text-sm text-gray-500 mb-1">Website Address</Label>
            <a href="https://yahoo.com" className="text-blue-600 text-sm hover:underline">
              https://yahoo.com
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
