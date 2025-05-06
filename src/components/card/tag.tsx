
import React from "react";
import { cn } from "@/lib/utils";

interface TagProps {
    label: string;
    className?: string;
}

const Tag = ({ label, className }: TagProps) => {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border text-slate-200  transition-colors",
                className
            )}
        >
            {label}
        </span>
    );
};

export default Tag;