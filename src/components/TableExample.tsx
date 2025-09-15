"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
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
import { useGetPasswords } from '@/hooks/web/useGetPasswords';
import { getSession } from '@/lib/localstorage';
import { socialAccounts } from '@/data/socialAccounts';
import AlertComponent from "./pages/app/AlertComponent"



export default function TableExample() {
  const { user } = getSession();

  const { passwords, loading, error } = useGetPasswords(user ?? '');

  if (loading) {
    return (
      <p className="text-muted-foreground mt-4 text-center text-sm">
        Chargement des mots de passe...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 mt-4 text-center text-sm">
        Erreur : {error}
      </p>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Titre</TableHead>
            <TableHead>Email / Identifiant</TableHead>
            <TableHead>Site</TableHead>
            <TableHead>Dossier</TableHead>
            <TableHead className="text-right">Date création</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {passwords && passwords.length > 0 ? (
            passwords.map((pwd: any) => {
              // Vérifie si le titre correspond à un social account
              const social = socialAccounts.find(acc => acc.name.toLowerCase() === pwd.titre.toLowerCase());

              return (
                <TableRow key={pwd.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {social ? (
                        <img
                          className="rounded-full"
                          src={social.image}
                          width={30}
                          height={30}
                          alt={pwd.titre}
                        />
                      ) : (
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 p-1"
                        >
                          <g clipPath="url(#clip0)">
                            <rect width="64" height="64" fill="url(#paint0_linear)"></rect>
                            <path
                              d="M32 16C23.178 16 16 23.178 16 32C16 40.822 23.178 48 32 48C40.822 48 48 40.822 48 32C48 23.178 40.822 16 32 16ZM33.5 34.724V39C33.5 39.828 32.828 40.5 32 40.5C31.172 40.5 30.5 39.828 30.5 39V34.724C28.756 34.104 27.5 32.456 27.5 30.5C27.5 28.014 29.514 26 32 26C34.486 26 36.5 28.014 36.5 30.5C36.5 32.456 35.244 34.104 33.5 34.724Z"
                              fill="#005C7A"
                            ></path>
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear"
                              x1="32"
                              y1="0"
                              x2="32"
                              y2="64"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#5FE8ED" />
                              <stop offset="1" stopColor="#18D3DC" />
                            </linearGradient>
                            <clipPath id="clip0">
                              <path
                                d="M0 16C0 8.45753 0 4.68629 2.34315 2.34315C4.68629 0 8.45753 0 16 0H48C55.5425 0 59.3137 0 61.6569 2.34315C64 4.68629 64 8.45753 64 16V48C64 55.5425 64 59.3137 61.6569 61.6569C59.3137 64 55.5425 64 48 64H16C8.45753 64 4.68629 64 2.34315 61.6569C0 59.3137 0 55.5425 0 48V16Z"
                                fill="white"
                              ></path>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                      <div>
                        <div className="font-medium">{pwd.titre}</div>
                        <span className="text-muted-foreground mt-0.5 text-xs">
                          {pwd.identifiant}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className='text-[13px] text-gray-700'>
                      {pwd.identifiant}
                    </span>
                  </TableCell>
                  <TableCell className='text-[13px] text-gray-700'>{pwd.reference?.valeur || "-"}</TableCell>
                  <TableCell className='text-[13px] text-gray-700'>{pwd.dossierId || "-"}</TableCell>
                  {/* <TableCell className='text-[13px] text-gray-700'></TableCell> */}
                  <TableCell className="text-right text-[13px] text-gray-700">
                    {pwd.dateCreation ? new Date(pwd.dateCreation).toLocaleDateString() : "-"}
                  </TableCell>
                  <TableCell className="text-right flex space-x-3 text-[13px] text-gray-700">
                    {/* {pwd.dateCreation ? new Date(pwd.dateCreation).toLocaleDateString() : "-"} */}
                    <span className="mt-3">
                      <EditDialog
                        password={pwd.identifiant}
                        email={pwd.identifiant}
                        title={pwd.titre}
                      />
                    </span>
                    <span>
                      <AlertComponent />
                    </span>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                <p className="text-muted-foreground mt-4 text-center text-sm">
                  {passwords && passwords.length === 0
                    ? "Aucune donnée disponible pour l'instant."
                    : ""}
                </p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

    </motion.div>
  )
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


function EditDialog({ email, password,title }:any) {
  // const id = useId()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Send className="w-4 h-4 text-gray-500 cursor-pointer hover:text-blue-500 transition-colors" />
      </DialogTrigger>

      <DialogContent className="max-w-md rounded-xl p-0 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-4 py-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          {/* <Button variant="ghost" size="sm">Edit</Button> */}
        </div>

        {/* Contenu */}
        <div className="divide-y">
          {/* Email */}
          <div className="px-4 py-3">
            <Label className="block text-sm text-gray-500 mb-1">Email or Username</Label>
            <p className="text-sm text-gray-800">{email}</p>
          </div>

          {/* Password */}
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

          {/* Password Health */}
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

          {/* Website */}
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
