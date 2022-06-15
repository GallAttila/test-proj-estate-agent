import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Stack, Box, Typography } from '@mui/material'
import Header from 'components/property-detail/Header'
import Navbar from 'components/property-detail/Navbar'
import PropertyDescription from 'components/property-detail/PropertyDescription'
import PropertyImages from 'components/property-detail/PropertyImages'
import Button from 'components/styled-mui/Button'
import DownloadIcon from '@mui/icons-material/Download'
import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'
import useFetchProperty from 'hooks/useFetchProperty'
import ErrorScreen from 'components/error-screen/ErrorScreen'
import LoadingScreen from 'components/loading-screen/LoadingScreen'

const DetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { property, isLoading, isError } = useFetchProperty(
    id as string
  )

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return (
      <>
        <ErrorScreen isError={isError} />
      </>
    )
  }

  return (
    <Stack>
      <Header />
      <Navbar />
      <PropertyDescription property={property} />
      <PropertyImages />
      <Stack spacing={2} sx={{ p: 2 }}>
        <Typography
          variant="h6"
          color="initial"
          sx={{ fontWeight: 'light' }}
        >
          Map
        </Typography>
        <Box>
          <Image
            src="/images/map.png"
            alt="logo-white"
            width={400}
            height={220}
          />
        </Box>
      </Stack>
      <Stack spacing={2} sx={{ p: 2 }}>
        <Typography
          variant="h6"
          color="initial"
          sx={{ fontWeight: 'light' }}
        >
          EPC
        </Typography>
        <Box>
          <Image
            src="/images/epc.png"
            alt="logo-white"
            width={400}
            height={300}
          />
        </Box>
      </Stack>
      <Stack spacing={2} sx={{ p: 2 }}>
        <Typography
          variant="h6"
          color="initial"
          sx={{ fontWeight: 'light' }}
        >
          Brochure
        </Typography>
        <Button>
          <DownloadIcon sx={{ mr: 1 }} />
          Download Brochure
        </Button>
      </Stack>
    </Stack>
  )
}

export default DetailPage
