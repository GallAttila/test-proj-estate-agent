import { FC } from 'react'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack, Typography, Box } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'
import HotelIcon from '@mui/icons-material/Hotel'

interface Props {
  sx?: SxProps<Theme>
  property: any
}

const RoomsNum: FC<Props> = props => {
  return (
    <Stack
      direction="row"
      sx={{
        my: 2,
        alignItems: 'center',
        justifyContent: 'center',
        ...props.sx,
      }}
    >
      <HotelIcon fontSize="small" />
      <Typography variant="body1" color="initial" sx={{ ml: 1 }}>
        {props.property.Bedrooms}
      </Typography>
      <Box sx={{ ml: 2 }}>
        <FontAwesomeIcon icon={faBath} size="lg" />
      </Box>
      <Typography variant="body1" color="initial" sx={{ ml: 1 }}>
        {props.property.Bathrooms}
      </Typography>
    </Stack>
  )
}

export default RoomsNum
