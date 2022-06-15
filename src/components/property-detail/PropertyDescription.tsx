import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import RoomsNum from 'components/RoomsNum'
import CurrencyPoundOutlinedIcon from '@mui/icons-material/CurrencyPoundOutlined'

const PropertyDescription: FC<{ property: any }> = props => {
  return (
    <Stack spacing={0} sx={{ p: 1 }}>
      <Stack
        direction="row"
        sx={{ justifyContent: 'space-between' }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CurrencyPoundOutlinedIcon fontSize="inherit" />
          <Typography>{props.property.Price}</Typography>
        </Stack>
        <RoomsNum sx={{ mr: 1 }} property={props.property} />
      </Stack>
      <Typography
        variant="body1"
        color="initial"
        sx={{ mt: 0, px: 1 }}
      >
        {props.property.Description}
      </Typography>
    </Stack>
  )
}

export default PropertyDescription
