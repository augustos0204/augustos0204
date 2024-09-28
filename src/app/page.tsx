"use client";
import LogoComponent from "@/components/logo";
import { socialButtons } from "@/components/socialButtons";
import { cn } from "@/lib/utils";
import { Power } from "lucide-react";
import React from "react";

export default function Home() {
  const [ screenState, setScreenState ] = React.useState<boolean>(false);
  const handleScreen = () => setScreenState(!screenState);

  return (
    <main className="bg-gradient-to-b from-zinc-800 to-zinc-900 w-full h-full p-20">
      <div className={cn(
        "w-full h-full border-2 border-black rounded-lg px-4 pt-4",
        "bg-gradient-to-br from-slate-200 to-slate-400 shadow-black shadow-md"
      )}>
        <div className="w-full h-[90%] border-2 border-black rounded-lg bg-zinc-900 shadow-black shadow-sm relative overflow-hidden">
          <div className={cn(
            "w-full h-full bg-black absolute transition-all",
            !screenState ? "opacity-100" : "opacity-0",
            "flex flex-row items-center justify-center"
          )}>
            <div className={cn(
              "text-9xl font-poppins font-bold text select-none",
              "bg-clip-text text-transparent bg-noise-texture-animated bg-no-repeat bg-cover",
            )}>Unavailable Temporary...</div>
          </div>
        </div>
        <div className="w-full h-[10%] py-3 flex flex-row justify-between">
          <div className="space-x-3 flex flex-row">
            <div onClick={handleScreen} className={cn(
              "w-12 h-12 border-2 border-black rounded-md cursor-pointer",
              "flex flex-row items-center justify-center transition-all",
              "bg-zinc-900 hover:border-transparent hover:bg-red-600 hover:shadow-lg hover:shadow-red-600 group"
            )}>
              <Power
              absoluteStrokeWidth
              size={30}
              strokeWidth={4}
              className={cn(
                "text-red-600 transition-all",
                "hover:text-black group-hover:text-black"
              )}
              />
            </div>
            {socialButtons.map((socialButton) => <socialButton.component key={socialButton.name}/>)}
          </div>
          <LogoComponent/>
        </div>
      </div>
    </main>
  );
}
