import { FC, SyntheticEvent, useContext } from 'react'
import { AppBar, Box, Tabs, Tab } from '@mui/material'
import Image from 'next/image'
import { TabCtx } from 'pages/index'

const Header: FC = () => {
  const { tab, setTab } = useContext(TabCtx)

  const handleChangeTab = (
    event: SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setTab(value)
  }
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: 'transparent' }}
    >
      <Box sx={{ mt: 2 }}>
        <Image
          src="/images/logo-blue.png"
          alt="logo-white"
          width={355}
          height={105}
        />
      </Box>
      <Tabs
        value={tab}
        onChange={handleChangeTab}
        centered
        TabIndicatorProps={{ hidden: true }}
        sx={{
          mt: 2.5,
          mx: 1,
          minHeight: 0,
          height: 'auto',
          borderRadius: 15,
          border: 2,
          borderColor: 'primary.dark',
          '& .MuiTabs-flexContainer > *': {
            minWidth: 0,
            width: '50%',
            minHeight: 0,
            color: 'primary.dark',
            borderRadius: 15,
            py: 0.5,
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 'light',
          },
          '& .MuiTabs-flexContainer > .Mui-selected': {
            color: 'common.white',
            bgcolor: 'primary.dark',
          },
        }}
      >
        <Tab label="Sales" />
        <Tab label="Lettings" />
      </Tabs>
    </AppBar>
  )
}

export default Header
