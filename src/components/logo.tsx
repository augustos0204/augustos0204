import { cn } from "@/lib/utils";

export default function LogoComponent () {
    return (
        <div className={cn(
            'select-none bg-clip-text text-transparent font-bold',
            'p-2 bg-gradient-to-r from-white to-slate-200'
        )}>
            <span className="text-2xl font-poppins font-bold">
                @Augustos0204
            </span>
        </div>
    )
}