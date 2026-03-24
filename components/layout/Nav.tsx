import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const NAV_ITEMS = ['Handguns', 'Rifles', 'Optics', 'Accessories', 'Ammo']

const Nav = ({ pathname }: { pathname: string }) => {
    const activeItem = pathname

    return (
        <Box
            component='nav'
            sx={{
                borderBottom: '1px solid',
                borderColor: 'rgba(255,255,255,0.08)',
                bgcolor: 'background.paper',
                px: { xs: 2, sm: 3 },
                py: 1,
            }}
        >
            <Stack
                direction='row'
                spacing={1}
                alignItems='center'
                sx={{
                    overflowX: 'auto',
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollbarWidth: 'none',
                }}
            >
                {NAV_ITEMS.map((item) => {
                    const isActive = item.toLowerCase() === activeItem.toLowerCase()

                    return (
                        <Button
                            key={item}
                            size='small'
                            disableElevation
                            variant={isActive ? 'contained' : 'text'}
                            color={isActive ? 'primary' : 'inherit'}
                            sx={{
                                whiteSpace: 'nowrap',
                                textTransform: 'none',
                                borderRadius: 999,
                                px: 2,
                                color: isActive ? 'background.default' : 'text.secondary',
                                bgcolor: isActive ? 'text.primary' : 'transparent',
                                '&:hover': {
                                    bgcolor: isActive ? 'text.primary' : 'rgba(255,255,255,0.08)',
                                },
                            }}
                            LinkComponent={'a'}
                            href={`/${item.toLowerCase()}`}
                        >
                            {item}
                        </Button>
                    )
                })}

            </Stack>
        </Box>
    )
}

export default Nav