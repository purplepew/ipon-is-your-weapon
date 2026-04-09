'use client'

import { funnel_display } from '@/theme/theme'
import { ChevronRight } from '@mui/icons-material'
import {
    Box,
    Link,
    Stack,
    Typography,
} from '@mui/material'

type Category = {
    name: string
    href: string
    iconSrc: string
    active?: boolean
}

const CATEGORIES: Category[] = [
    {
        name: 'Handguns',
        href: '/handguns',
        iconSrc: '/pistol.svg',
        active: true,
    },
    {
        name: 'Rifles',
        href: '/rifles',
        iconSrc: '/winchester-rifle-svgrepo-com.svg',
    },
    {
        name: 'Optics',
        href: '/optics',
        iconSrc: '/optic.svg',
    },
    {
        name: 'Tactical Gear',
        href: '/accessories',
        iconSrc: '/window.svg',
    },
    {
        name: 'Ammo',
        href: '/ammo',
        iconSrc: '/ammo.svg',
    },
    {
        name: 'Maintenance',
        href: '/accessories',
        iconSrc: '/maintenance.svg',
    },
] 

const Sections = () => {
    return (
        <Stack
            component='section'
            sx={{
                bgcolor: '#111111',
                color: '#f4efe9',
                px: { xs: 2, sm: 3, lg: 4 },
                py: { xs: 4, md: 5 },
                gap: { xs: 3, md: 4 },
            }}
        >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                justifyContent='space-between'
                gap={2}
            >
                <Box>
                    <Typography
                        variant='h2'
                        component='h2'
                        textTransform='uppercase'
                        sx={{
                            fontFamily: funnel_display.style.fontFamily,
                            letterSpacing: '-0.03em',
                            lineHeight: 0.95,
                        }}
                    >
                        Shop by category
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={{
                            mt: 1.25,
                            color: '#ffb09b',
                            fontSize: { xs: '0.95rem', md: '1.05rem' },
                        }}
                    >
                        Precision instruments for every tactical requirement.
                    </Typography>
                </Box>

                <Link
                    href='/'
                    underline='none'
                    sx={{
                        color: '#ff9f82',
                        fontFamily: funnel_display.style.fontFamily,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.01em',
                        fontSize: '1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        alignSelf: { xs: 'flex-end', sm: 'center' },
                        transition: 'color 180ms ease',
                        '&:hover': {
                            color: '#ffc3b4',
                        },
                    }}
                >
                    View all categories
                    <ChevronRight sx={{ fontSize: 18 }} />
                </Link>
            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(2, minmax(0, 1fr))',
                        md: 'repeat(3, minmax(0, 1fr))',
                        lg: 'repeat(6, minmax(0, 1fr))',
                    },
                    gap: { xs: 2, md: 2.5 },
                }}
            >
                {CATEGORIES.map(({ name, href, iconSrc, active }) => (
                    <Link
                        key={name}
                        href={href}
                        underline='none'
                        sx={{
                            display: 'block',
                            color: 'inherit',
                            minWidth: 0,
                            '&:hover .category-card': {
                                transform: 'translateY(-4px)',
                                backgroundColor: 'rgba(51, 37, 33, 0.98)',
                                borderColor: 'rgba(255, 171, 147, 0.58)',
                                boxShadow: '0px 24px 48px rgba(0, 0, 0, 0.35)',
                            },
                            '&:hover .category-label': {
                                color: '#ffb09b',
                            },
                        }}
                    >
                        <Stack spacing={1.4} alignItems='center'>
                            <Box
                                className='category-card'
                                sx={{
                                    width: '100%',
                                    aspectRatio: '1 / 1',
                                    display: 'grid',
                                    placeItems: 'center',
                                    borderRadius: 2.5,
                                    bgcolor: active ? 'rgba(49, 39, 37, 0.98)' : '#1c1c1c',
                                    border: '1px solid',
                                    borderColor: active ? 'rgba(255, 171, 147, 0.58)' : 'rgba(255, 255, 255, 0.03)',
                                    transition: 'transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
                                    boxShadow: active ? '0px 16px 32px rgba(0, 0, 0, 0.22)' : 'none',
                                }}
                            >
                                <Box
                                    component='span'
                                    sx={{
                                        width: 54,
                                        height: 54,
                                        display: 'block',
                                        backgroundColor: '#ffaf9b',
                                        maskImage: `url(${iconSrc})`,
                                        WebkitMaskImage: `url(${iconSrc})`,
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center',
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        color: '#ffaf9b',
                                    }}
                                />
                            </Box>

                            <Typography
                                className='category-label'
                                sx={{
                                    fontFamily: funnel_display.style.fontFamily,
                                    fontSize: { xs: '0.98rem', md: '1.05rem' },
                                    fontWeight: 700,
                                    lineHeight: 1.1,
                                    color: active ? '#ffb09b' : '#f6f1ed',
                                    transition: 'color 180ms ease',
                                }}
                            >
                                {name}
                            </Typography>
                        </Stack>
                    </Link>
                ))}
            </Box>
        </Stack>
    )
}

export default Sections