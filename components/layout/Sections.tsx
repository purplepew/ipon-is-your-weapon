'use client'

import { funnel_display } from "@/theme/theme"
import { Stack, Typography } from "@mui/material"

const Providers = () => {

    return (
        <Stack
            component='section'
        >
            <Typography
                variant='h2'
                textTransform='uppercase'
                sx={{
                    fontFamily: funnel_display.style.fontFamily
                }}
            >Shop by category</Typography>
            <Typography variant='body2'>Precision instruments for every tactical requirement.</Typography>
        </Stack>
    )
}

export default Providers