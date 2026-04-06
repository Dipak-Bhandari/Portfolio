"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { flushSync } from "react-dom";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export function ToggleTheme() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <SidebarMenuButton className="w-full justify-start gap-2">
                <Sun className="h-4 w-4" />
                <span>Toggle Theme</span>
            </SidebarMenuButton>
        );
    }

    const isDark = resolvedTheme === "dark";

    const handleThemeToggle = async () => {
        if (!buttonRef.current || !document.startViewTransition) {
            setTheme(isDark ? "light" : "dark");
            return;
        }

        await (document as any).startViewTransition(() => {
            flushSync(() => {
                setTheme(isDark ? "light" : "dark");
            });
        }).ready;

        const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top)
        );

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 500,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    };

    return (
        <SidebarMenuButton
            ref={buttonRef}
            onClick={handleThemeToggle}
            className="w-full justify-start gap-2 hover:bg-accent cursor-pointer"
            tooltip={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {isDark ? (
                <Sun className="h-4 w-4 text-amber-500" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
        </SidebarMenuButton>
    );
}
