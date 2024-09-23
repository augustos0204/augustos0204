import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const socialButtons = [
    {
        name: 'LinkedIn',
        component: () => (
        <Link href="https://www.linkedin.com/in/gabriel-augusto-dos-santos-938809192/" target="_blank" className={cn(
            "w-12 h-12 border-2 border-black rounded-md cursor-pointer",
            "flex flex-row items-center justify-center transition-all",
            "bg-zinc-900 hover:border-transparent hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600 group"
        )}>
            <Linkedin
            absoluteStrokeWidth
            size={30}
            strokeWidth={2}
            className={cn(
                "text-blue-600 transition-all",
                "hover:text-white group-hover:text-white"
            )}
            />
        </Link>
        )
    },
    {
        name: 'GitHub',
        component: () => (
        <Link href="https://github.com/augustos0204" target="_blank" className={cn(
            "w-12 h-12 border-2 border-black rounded-md cursor-pointer",
            "flex flex-row items-center justify-center transition-all",
            "bg-zinc-900 hover:border-transparent hover:bg-white hover:shadow-lg hover:shadow-white group"
        )}>
            <Github
            absoluteStrokeWidth
            size={30}
            strokeWidth={2}
            className={cn(
                "text-white transition-all",
                "hover:text-white group-hover:text-black"
            )}
            />
        </Link>
        )
    }
];