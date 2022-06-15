import { FC } from 'react'
import Typography from '@mui/material/Typography'
import { ImageList, ImageListItem, Stack } from '@mui/material'
import Image from 'next/image'

const PropertyImages: FC = () => {
  return (
    <Stack sx={{ p: 2 }}>
      <Typography
        variant="h6"
        color="initial"
        sx={{ fontWeight: 'light' }}
      >
        Property Images
      </Typography>

      <ImageList cols={2} gap={16}>
        <ImageListItem cols={2}>
          <Image
            src="/images/house.jpeg"
            alt="logo-white"
            width={400}
            height={200}
          />
        </ImageListItem>
        <ImageListItem cols={2}>
          <Image
            src="/images/house.jpeg"
            alt="logo-white"
            width={400}
            height={200}
          />
        </ImageListItem>
        <ImageListItem cols={1}>
          <Image
            src="/images/house.jpeg"
            alt="logo-white"
            width={400}
            height={200}
          />
        </ImageListItem>
        <ImageListItem cols={1}>
          <Image
            src="/images/house.jpeg"
            alt="logo-white"
            width={400}
            height={200}
          />
        </ImageListItem>
        <ImageListItem cols={1}>
          <Image
            src="/images/house.jpeg"
            alt="logo-white"
            width={400}
            height={200}
          />
        </ImageListItem>
        <ImageListItem cols={1}>
          <Image
            src="/images/house.jpeg"
            alt="logo-white"
            width={400}
            height={200}
          />
        </ImageListItem>
      </ImageList>
    </Stack>
  )
}

export default PropertyImages
