import { FC } from 'react'
import {
  Stack,
  IconButton,
  Box,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useRouter } from 'next/router'

const Header: FC = () => {
  const router = useRouter()
  return (
    <Stack spacing={1}>
      <Stack
        direction="row"
        sx={{ mt: 2.5, alignItems: 'center' }}
      >
        <IconButton
          size="large"
          onClick={() => {
            router.replace('/properties')
          }}
          sx={{ ml: 1, position: 'relative', zIndex: 1 }}
        >
          <ArrowBackIosIcon color="primary" />
        </IconButton>
        <Box sx={{ ml: -4 }}>
          <Image
            src="/images/logo-blue.png"
            alt="logo-white"
            width={355}
            height={105}
          />
        </Box>
      </Stack>
      <Box sx={{ height: 250, position: 'relative' }}>
        <Image
          src="/images/house.jpeg"
          alt="logo-white"
          width={390}
          height={250}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            bgcolor: 'primary.main',
            opacity: 0.6,
            // filter: 'brightness(90%)',
          }}
        ></Box>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h5"
            color="white"
            align="center"
            sx={{ px: 2, fontWeight: 'light' }}
          >
            5 bed detached house for sale in Netherlands Farm
            Close, Sheffield
          </Typography>
        </Box>
      </Box>
    </Stack>
  )
}

export default Header
