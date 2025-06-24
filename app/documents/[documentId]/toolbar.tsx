"use client"

import { LucideIcon, PrinterIcon, Undo2Icon, Redo2Icon, SpellCheckIcon, BoldIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEditorStore } from '@/store/use-editor-store'

interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon
}

const ToolbarButton = ({
    onClick, 
    isActive,
    icon: Icon,
}: ToolbarButtonProps) => {
    return (
        <button onClick={onClick} 
        className={cn("text-sm h-7 min-w-7 items-center justify-center rounded-sm hover:bg-neutral-200/80", isActive && "bg-neutral-200/80")}>
            <Icon className="size-4"/>
        </button>
    )
}

export const Toolbar = () => {
    const {editor} = useEditorStore();
    console.log("Toolbar editor" ,{editor});
    const sections: {
        label: string;
        icon: LucideIcon;
        onclick: ()=>void;
        isActive?: boolean;
    }[][] = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onclick: ()=> editor?.chain().focus().undo().run(),
            },
            {
                label: "Redo",
                icon: Redo2Icon,
                onclick: ()=> editor?.chain().focus().redo().run(),
            },
            {
                label: "Print",
                icon: PrinterIcon,
                onclick: ()=> window.print(),
            },
            {
                label: "Spell Check",
                icon: SpellCheckIcon,
                onclick: () => {
                    const current = editor?.view.dom.getAttribute("spellcheck") 
                    editor?.view.dom.setAttribute("spellcheck", current==="false"?"true":"false");
                }
            }
        ],
        [
            {
                label:"Bold",
                icon:BoldIcon,
                onclick: () => editor?.chain().focus().toggleBold().run(),
            }
        ]
    ]
    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            {sections[0].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
        </div>
    )
}