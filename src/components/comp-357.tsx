import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ToolitpPassword() {
  return (
    <TooltipProvider delayDuration={2}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex-1 w-full sm:w-1/3">
            <div
              className="border text-card-foreground rounded-3xl group shadow-[0_4px_10px_rgba(0,0,0,0.02)] 
                                            hover:dark:border-neutral-700/40 bg-white dark:bg-neutral-800/50 cursor-pointer 
                                            transition-all duration-200 relative"
              data-state="closed"
            >
              <div
                className="absolute top-2 right-2 dark:text-[#3CB371] text-[#3CB371] text-xs rounded-full 
                                            px-2 py-0.5 font-normal bg-gradient-to-b from-[#3CB371]/10 to-[#3CB371]/5 
                                            dark:from-[#3CB371]/10 dark:to-[#3CB371]/5 backdrop-blur-sm border-t-[0.5px] 
                                            border-l-[0.5px] border-r-[0.25px] border-b-[0.5px] border-[#3CB371]/50 
                                            dark:border-[#3CB371] z-20"
              >
                Populaire
              </div>
              <div className="p-4 px-5 sm:h-[112px] flex flex-col sm:flex-col items-start justify-center gap-y-1">
                <div className="flex items-center gap-x-3 sm:block space-y-2">
                  {/* <svg width="24" height="24" className="np-ui-icon np-ui-nav-row__icon text-[#3CB371]" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4C7.589 4 4 7.589 4 12C4 16.411 7.589 20 12 20C16.411 20 20 16.411 20 12C20 7.589 16.411 4 12 4ZM12.75 13.362V15.5C12.75 15.914 12.414 16.25 12 16.25C11.586 16.25 11.25 15.914 11.25 15.5V13.362C10.378 13.052 9.75 12.228 9.75 11.25C9.75 10.007 10.757 9 12 9C13.243 9 14.25 10.007 14.25 11.25C14.25 12.228 13.622 13.052 12.75 13.362Z" fill="currentColor"></path></svg> */}
                  <img width={30}
                    src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-EvpVqXgiKOwI32jZyyBn5jfgsOUi97.png&w=500&q=75"
                    alt="" />
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-x-1">
                      <h3
                        className="font-medium text-sm sm:text-base text-left text-primary/70 
                             dark:text-primary/80 group-hover:text-primary transition-colors"
                      >
                        Passwords
                      </h3>
                    </div>
                    <p
                      className="text-xs sm:text-sm group-hover:text-primary/80 text-left text-primary/50 
                           dark:text-primary/60 transition-colors"
                    >
                      Ajoutez vos mots de passe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="py-3">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">Gerer vos mot de passes</p>
            <p className="text-muted-foreground text-xs">
              Ajoutez vos mots de passe. Vous pouvez les gérer dans la page de gestion de mot de passe
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
export function ToolitpCreditCards() {
  return (
    <TooltipProvider delayDuration={2}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex-1 w-full sm:w-1/3">
            <div
              className="border text-card-foreground rounded-3xl group shadow-[0_4px_10px_rgba(0,0,0,0.02)] 
                   hover:dark:border-neutral-700/40 bg-white dark:bg-neutral-800/50 cursor-pointer 
                   transition-all duration-200 relative"
              data-state="closed"
            >
              <div className="p-4 px-5 sm:h-[112px] flex flex-col sm:flex-col items-start justify-center gap-y-1">
                <div className="flex items-center gap-x-3 sm:block space-y-2">
                  {/* <svg width="24" height="24" className="np-ui-icon np-ui-nav-row__icon text-[#239BA7]" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 8.75C20 7.233 18.767 6 17.25 6H6.75C5.233 6 4 7.233 4 8.75V9.5H20V8.75Z" fill="currentColor"></path><path d="M4 15.25C4 16.767 5.233 18 6.75 18H17.25C18.767 18 20 16.767 20 15.25V11H4V15.25ZM15.75 13.5H16.75C17.164 13.5 17.5 13.836 17.5 14.25C17.5 14.664 17.164 15 16.75 15H15.75C15.336 15 15 14.664 15 14.25C15 13.836 15.336 13.5 15.75 13.5ZM7.25 13.5H10.25C10.664 13.5 11 13.836 11 14.25C11 14.664 10.664 15 10.25 15H7.25C6.836 15 6.5 14.664 6.5 14.25C6.5 13.836 6.836 13.5 7.25 13.5Z" fill="currentColor"></path></svg> */}
                  <img width={30}
                    src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-xylXWxjRoBYdaH9IPOx1080olvl5Ur.png&w=500&q=75"
                    alt="" />
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-x-1">
                      <h3
                        className="font-medium text-sm sm:text-base text-left text-primary/70 
                             dark:text-primary/80 group-hover:text-primary transition-colors"
                      >
                        Credit Cards
                      </h3>
                    </div>
                    <p
                      className="text-xs sm:text-sm group-hover:text-primary/80 text-left text-primary/50 
                           dark:text-primary/60 transition-colors"
                    >
                      Enregistrer vos cartes bancaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="py-3">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">Faites du shopping sans lever le petit doigte</p>
            <p className="text-muted-foreground text-xs">
              Ajoutez les détails de votre carte de crédit pour les remplir automatiquement lors de vos achats en ligne.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
export function ToolitpPasskeys() {
  return (
    <TooltipProvider delayDuration={2}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex-1 w-full sm:w-1/3">
            <div
              className="border text-card-foreground rounded-3xl group shadow-[0_4px_10px_rgba(0,0,0,0.02)] 
                                            hover:dark:border-neutral-700/40 bg-white dark:bg-neutral-800/50 cursor-pointer 
                                            transition-all duration-200 relative"
              data-state="closed"
            >
              <div className="p-4 px-5 sm:h-[112px] flex flex-col sm:flex-col items-start justify-center gap-y-1">
                <div className="flex items-center gap-x-3 sm:block space-y-2">
                  {/* <svg width="24" height="24" className="np-ui-icon np-ui-nav-row__icon text-[#EDA35A]" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.3178 16.231C12.8458 14.069 10.8938 12.5 8.6778 12.5C6.4618 12.5 4.5098 14.069 4.0378 16.231C3.8488 17.095 4.3858 17.98 5.2618 18.244C6.3698 18.579 7.5198 18.75 8.6778 18.75C9.8358 18.75 10.9858 18.58 12.0938 18.244C12.9698 17.979 13.5068 17.095 13.3178 16.231Z" fill="currentColor"></path><path d="M18.151 13.1287V11.5909C18.151 11.2647 17.8863 11 17.5602 11H15.5908C15.2647 11 15 11.2647 15 11.5909V16.6738C15 16.7849 15.0307 16.8928 15.0898 16.9865L16.0745 18.5621C16.1824 18.7347 16.3715 18.8402 16.5755 18.8402C16.7795 18.8402 16.9686 18.7355 17.0765 18.5621L18.0612 16.9865C18.1203 16.8928 18.151 16.7841 18.151 16.6738V15.4921C18.151 15.3195 18.0754 15.1557 17.9446 15.0438L17.0891 14.3104L17.9446 13.5769C18.0754 13.4643 18.151 13.3004 18.151 13.1287Z" fill="currentColor"></path><path d="M8.67773 11.5C10.1965 11.5 11.4277 10.2688 11.4277 8.75C11.4277 7.23122 10.1965 6 8.67773 6C7.15895 6 5.92773 7.23122 5.92773 8.75C5.92773 10.2688 7.15895 11.5 8.67773 11.5Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 9.5C13 7.56712 14.5671 6 16.5 6C18.4329 6 20 7.56712 20 9.5C20 11.4329 18.4329 13 16.5 13C14.5671 13 13 11.4329 13 9.5ZM16.5008 10.6969C17.1635 10.6969 17.7008 10.1596 17.7008 9.49688C17.7008 8.83413 17.1635 8.29688 16.5008 8.29688C15.838 8.29688 15.3008 8.83413 15.3008 9.49688C15.3008 10.1596 15.838 10.6969 16.5008 10.6969Z" fill="currentColor"></path></svg> */}
                  <img width={30}
                    src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-sqlu5u2Ofc9tXq9AqsBeZMCkWXEyzj.png&w=500&q=75"
                    alt="" />
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-x-1">
                      <h3
                        className="font-medium text-sm sm:text-base text-left text-primary/70 
                             dark:text-primary/80 group-hover:text-primary transition-colors"
                      >
                        Passkeys
                      </h3>
                    </div>
                    <p
                      className="text-xs sm:text-sm group-hover:text-primary/80 text-left text-primary/50 
                           dark:text-primary/60 transition-colors"
                    >
                      utilisez des clés pour vous connectés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="py-3">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">Clés d'acces</p>
            <p className="text-muted-foreground text-xs">
              Profitez d'un moyen plus simple de vous connecter à vos comptes et d'accedez à vos données personnelles en toute sécurité.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function ToolitpButtonCreeFolder() {
  return (
    <TooltipProvider delayDuration={2}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => console.log("Créer un espace")}
            className="w-full lg:w-[66px] h-[66px] bg-transparent hover:border-primary/20 dark:text-neutral-400 text-neutral-600 dark:hover:text-neutral-50 hover:text-neutral-900 hover:text-primary border-dashed border-2 border-primary/10 dark:border-primary/20 flex items-center justify-start lg:justify-center p-3.5 cursor-pointer transition-all duration-200 rounded-2xl drop-shadow-sm gap-2" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus h-6 w-6" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            <span className="lg:hidden block text-sm font-medium">Créer un espace</span>
          </button>
        </TooltipTrigger>
        <TooltipContent className="py-3">
          <div className="space-y-1">
            {/* <p className="text-[13px] font-medium"></p> */}
            <p className="text-muted-foreground text-xs">
              Créer un espace pour organiser le contenu, discuter et créer des examens
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

