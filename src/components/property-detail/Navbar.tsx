import { faImages } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tabs, Tab } from '@mui/material'
import { FC } from 'react'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import {
  faChartColumn,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons'

const Navbar: FC = () => {
  return (
    <Tabs
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        minHeight: 0,
        height: 'auto',
        px: 2,
        background: `linear-gradient(to right, #032575, #3162D9)`,
        '& .MuiTabs-flexContainer': {
          // overflow: 'scroll',
        },
        '& .MuiTabs-flexContainer > *': {
          minHeight: 0,
          minWidth: 0,
          color: 'common.white',
          py: 2,
          textTransform: 'none',
          fontSize: 16,
          fontWeight: 'light',
        },
        // '& .MuiTabs-flexContainer > .Mui-selected': {
        //   color: 'common.white',
        //   bgcolor: 'primary.dark',
        // },
      }}
    >
      <Tab
        icon={<FontAwesomeIcon icon={faImages} />}
        iconPosition="start"
        label="Images"
        sx={{
          px: 1.5,
          '& .MuiTab-iconWrapper': {
            fontSize: 24,
          },
        }}
      />
      <Tab
        icon={<MapOutlinedIcon />}
        iconPosition="start"
        label="Map"
        sx={{
          px: 1.5,
          '& .MuiTab-iconWrapper': {
            fontSize: 30,
          },
        }}
      />
      <Tab
        icon={<FontAwesomeIcon icon={faChartColumn} />}
        iconPosition="start"
        label="EPC"
        sx={{
          px: 1.5,
          '& .MuiTab-iconWrapper': {
            fontSize: 24,
          },
        }}
      />
      <Tab
        icon={<FontAwesomeIcon icon={faFileLines} />}
        iconPosition="start"
        label="Brochure"
        sx={{
          px: 1.5,
          '& .MuiTab-iconWrapper': {
            fontSize: 24,
          },
        }}
      />
    </Tabs>
  )
}

export default Navbar
