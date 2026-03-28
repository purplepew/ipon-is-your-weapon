'use client'
import { ArrowRightSharp } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'

const Page = () => {

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} bgcolor='#2a1d19'>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2.5,
          height: { xs: 'auto', md: '700px' },
          padding: { xs: '3rem 1.5rem', md: '5rem 3rem' },
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'inline-block'
          }}
        >
          <Typography
            variant='body1'
            sx={{
              backgroundColor: '#4b221b',
              border: '1px solid rgb(224, 112, 68)',
              color: '#d39085',
              display: 'inline-block',
              width: 'auto',
              padding: '8px 16px',
              textTransform: 'uppercase',
            }}
          >New Arrival • 2024 Collection</Typography>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontSize: '5rem',
            textTransform: 'uppercase',
          }}
        >Engineered For <Box color='#ffb5a0'>Authority.</Box></Typography>

        <Typography variant='body1'>Experience unyielding precision with the new APX-9 Tactical series. Now available for professional deployment.</Typography>

        <Stack spacing={2} direction='row'> {/* BUTTONS */}
          <Button
            variant='contained'
            sx={{
              textTranform: 'uppercase',
              background: 'linear-gradient(45deg, #f6a38a 30%, #d14312 90%)',
              fontWeight: 'bold',

            }}
          >Explore Vault <ArrowRightSharp />
          </Button>

          <Button
            variant='contained'
            sx={{
              textTranform: 'uppercase',
              backgroundColor: '#2c2b2b',
              color: '#fff',
              fontWeight: 'bold'
            }}
          >Specification
          </Button>
        </Stack>{/* END BUTTONS */}

      </Box> {/*   END HERO COL 1 */}

      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <Image
          src="https://raw.githubusercontent.com/purplepew/image-host-for-ecommerce/refs/heads/main/black-pistol.jpg"
          alt="black pistol"
          height="650"
          width="650"
          style={{
            boxShadow: '0px 0px 44px 32px rgba(0, 0, 0, 0.24)',
            borderRadius: '50px',
            maxWidth: '100%', // This allows it to shrink to fit the container
            height: 'auto',   // This maintains the correct aspect ratio
          }}
        />
      </Box> {/*   END HERO COL 2 */}
    </Stack>
  )
}

export default Page
