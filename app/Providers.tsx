'use client'

import { ReactNode } from "react"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import ThemeProviderWrapper from "./ThemeProviderWrapper"
import Header from "@/components/layout/Header"

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <AppRouterCacheProvider>
            <ThemeProviderWrapper>
                <Header />
                {children}
            </ThemeProviderWrapper>
        </AppRouterCacheProvider>
    )
}

export default Providers