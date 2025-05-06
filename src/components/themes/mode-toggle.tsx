"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const isDark = theme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all"
            aria-label="Toggle Theme"
        >
            {isDark ?
                <Sun className="w-5 h-5 hover:text-blue-600 hover:cursor-pointer text-blue-500" /> :
                <Moon className="w-5 h-5 text-gray-600 hover:cursor-pointer hover:text-gray-800" />
            }
        </button>
    )
}
