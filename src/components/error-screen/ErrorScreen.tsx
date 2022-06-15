import { Modal, Box } from '@mui/material'
import LoadingScreen from 'components/loading-screen/LoadingScreen'
import { FC } from 'react'

const ErrorScreen: FC<{ isError: boolean }> = props => {
  return (
    <>
      <LoadingScreen />
      <Modal open={props.isError}>
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          Something went wrong while loading the resources.
        </Box>
      </Modal>
    </>
  )
}

export default ErrorScreen
