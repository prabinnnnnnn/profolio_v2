"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function GoBackUp() {
    const [isCompressed, setIsCompressed] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                setIsCompressed(true);
            } else {
                setIsCompressed(false);
            }
        });
    }, [setIsCompressed]);

    return (
        <AnimatePresence>
            {isCompressed && (
                <motion.div
                    className="right-6 bottom-6 z-50 fixed flex justify-center items-center bg-[rgba(49,49,49,0.8)] backdrop-blur-sm rounded-full text-secondary cursor-pointer size-[40px]"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.3 }}
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    <ChevronUp
                        className="text-white size-6"
                        strokeWidth={4.4}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
