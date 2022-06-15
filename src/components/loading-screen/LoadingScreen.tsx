import { FC } from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'

const LoadingScreen: FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        background: `linear-gradient(to bottom, #032575, #3162D9)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        src="/images/logo-white.png"
        alt="logo-white"
        width={380}
        height={180}
      />
    </Box>
  )
}

export default LoadingScreen
