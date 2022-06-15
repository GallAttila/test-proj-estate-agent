import { Box } from '@mui/material'
import Stack from '@mui/material/Stack'
import PropertyCard from 'components/property-card/PropertyCard'
import { NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import useFetchProperties from 'hooks/useFetchProperties'
import LoadingScreen from 'components/loading-screen/LoadingScreen'
import { useAppSelector } from 'hooks/redux'
import ErrorScreen from 'components/error-screen/ErrorScreen'

const ListPage: NextPage = () => {
  const filter = useAppSelector(state => state.filter)
  const { properties, isError, isLoading } = useFetchProperties(
    0,
    filter
  )
  console.log(properties)

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
    <Stack spacing={1}>
      <Box sx={{ mt: 2 }}>
        <Image
          src="/images/logo-blue.png"
          alt="logo-white"
          width={355}
          height={105}
        />
      </Box>
      <Stack spacing={1} sx={{ p: 2 }}>
        <Typography
          color="initial"
          sx={{ fontSize: 20, fontWeight: 'normal' }}
        >
          Properties for sale
        </Typography>
        <Stack spacing={2.5} sx={{ ml: '1px !important' }}>
          {!Array.isArray(properties) ? (
            <PropertyCard property={properties} />
          ) : (
            properties.map((property: any, i: number) => (
              <PropertyCard key={i} property={property} />
            ))
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ListPage
