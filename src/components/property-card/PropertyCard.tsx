import { FC } from 'react'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import { Box, Stack, Typography } from '@mui/material'
import HotelIcon from '@mui/icons-material/Hotel'
import BathtubIcon from '@mui/icons-material/Bathtub'
import CurrencyPoundOutlinedIcon from '@mui/icons-material/CurrencyPoundOutlined'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import RoomsNum from '../RoomsNum'
import { useRouter } from 'next/router'

const PropertyCard: FC<{ property: any }> = props => {
  const router = useRouter()
  return (
    <Card elevation={12} sx={{ borderRadius: 5 }}>
      <CardActionArea
        onClick={() => {
          router.replace(`/properties/${props.property.Id}`)
        }}
      >
        <CardMedia
          title="house"
          image="/images/house.jpeg"
          sx={{ height: 220 }}
        />
        <CardContent sx={{ p: 0 }}>
          <Typography
            variant="body1"
            color="initial"
            align="center"
            sx={{ mt: 3, px: 4 }}
          >
            5 bed detached house for sale in Netherlands Farm
            Close, Sheffield
          </Typography>

          <RoomsNum property={props.property} />

          <Typography
            variant="body1"
            color="initial"
            sx={{ px: 4, mb: 3, height: 50 }}
            align="center"
            noWrap
          >
            {props.property.Description}
          </Typography>

          <Stack
            direction="row"
            sx={{
              bgcolor: 'primary.dark',
              py: 1,
              color: 'common.white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CurrencyPoundOutlinedIcon
              fontSize="inherit"
              sx={{ mr: -0.5 }}
            />
            <Typography>{props.property.Price}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PropertyCard
