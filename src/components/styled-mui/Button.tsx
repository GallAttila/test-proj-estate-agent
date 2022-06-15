import { FC, ReactNode } from 'react'
import { SxProps, Theme } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'

interface Props {
  sx?: SxProps<Theme>
  children: ReactNode
  onClick?: () => void
}

const Button: FC<Props> = props => {
  return (
    <MuiButton
      size="large"
      disableRipple
      variant="contained"
      sx={{
        background: `linear-gradient(to right, #032575, #3162D9)`,
        '&:hover': {
          background: '#1A1A1A !important',
        },
        borderRadius: 15,
        py: 1,
        fontSize: 20,
        fontWeight: 'light',
        textTransform: 'none',
        ...props.sx,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </MuiButton>
  )
}

export default Button
