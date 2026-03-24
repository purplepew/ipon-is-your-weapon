'use client'

import { ReactNode } from "react"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import ThemeProviderWrapper from "./ThemeProviderWrapper"
import Header from "@/components/layout/Header"
import { usePathname } from "next/navigation"
import Nav from "@/components/layout/Nav"

const Providers = ({ children }: { children: ReactNode }) => {
    const path = usePathname()
    const pathname = path.split('/')[1]

    return (
        <AppRouterCacheProvider>
            <ThemeProviderWrapper>
                <Header />
                <Nav pathname={pathname} />
                {children}
            </ThemeProviderWrapper>
        </AppRouterCacheProvider>
    )
}

export default Providers