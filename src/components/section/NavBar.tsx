"use client";
import React, { useState } from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />

        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >


            <Menu setActive={setActive}>
                <motion.p
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
                >
                    Services
                </motion.p>
                <motion.p
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
                >
                    Services
                </motion.p>
                <motion.p
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
                >
                    Services
                </motion.p>

            </Menu>
        </div>
    );
}
