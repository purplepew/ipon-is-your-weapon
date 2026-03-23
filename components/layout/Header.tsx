import React from 'react'
import {
    NotificationsNone,
    PersonOutline,
    Search,
    ShoppingCartOutlined,
} from '@mui/icons-material'
import {
    AppBar,
    Badge,
    Box,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
} from '@mui/material'

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar
                sx={{
                    px: { xs: 2, sm: 3 },
                    py: 2,
                    gap: 2,
                    minHeight: 72,
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        flexShrink: 0,
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                        color: 'text.secondary',
                        minWidth: { xs: 'auto', md: 260 },
                    }}
                >
                    Armory Precision
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flex: 1,
                        maxWidth: 680,
                        mx: 'auto',
                        px: 1,
                        py: .5,
                        borderRadius: 1,
                        bgcolor: 'rgba(255,255,255,0.08)',
                        border: '1px solid',
                        borderColor: 'rgba(255,255,255,0.05)',
                    }}
                >
                    <IconButton size='small' aria-label='search'>
                        <Search sx={{ color: 'text.secondary' }} />
                    </IconButton>
                    <InputBase
                        placeholder='Search precision equipment...'
                        inputProps={{ 'aria-label': 'search precision equipment' }}
                        sx={{
                            ml: 1,
                            width: '100%',
                            '& input::placeholder': {
                                color: 'text.secondary',
                                opacity: 1,
                            },
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0, sm: 1 } }}>
                    <IconButton aria-label='notifications'>
                        <Badge
                            color='error'
                            variant='dot'
                            overlap='circular'
                            sx={{
                                '& .MuiBadge-badge': {
                                    backgroundColor: '#ff4d2e',
                                    boxShadow: '0 0 0 2px #101218',
                                },
                            }}
                        >
                            <NotificationsNone />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label='account'>
                        <PersonOutline />
                    </IconButton>
                    <IconButton aria-label='cart'>
                        <ShoppingCartOutlined />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header