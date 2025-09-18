import { CircleAlertIcon, Trash2 } from "lucide-react"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { toast } from "react-toastify"
import { OnTrashStorage } from "@/lib/OnTrash"

interface InfoProps {
    OnTrash: string;
    setMessage?: (msg: string) => void; 
}

export default function AlertComponent({ OnTrash, setMessage }: InfoProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="w-full justify-start cursor-pointer rounded-full"
                >
                    <Trash2 className="mr-2 h-3 w-3" />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
                    <div
                        className="flex size-9 shrink-0 items-center justify-center rounded-full border"
                        aria-hidden="true"
                    >
                        <CircleAlertIcon className="opacity-80" size={16} />
                    </div>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete your account? All your data will
                            be removed.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </div>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-red-700 hover:opacity-50 cursor-pointer"
                        onClick={() => {
                            const result = OnTrashStorage(OnTrash);
                            console.log(result);
                            toast.success("Déplacé vers la corbeille");

                            if (setMessage) {
                                setMessage(OnTrash);
                            }
                        }}
                    >
                        Corbeille <Trash2 className="mr-2 h-3 w-3" />
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
