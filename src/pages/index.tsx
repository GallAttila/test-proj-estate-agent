import { Box, Modal, Tab } from '@mui/material'
import LoadingScreen from 'components/loading-screen/LoadingScreen'
import type { NextPage } from 'next'
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
} from 'react'
import Header from 'components/property-search/Header'
import Filters from 'components/property-search/Filters'
import Stack from '@mui/material/Stack'
import Button from 'components/styled-mui/Button'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import useFetchFilterOptions from 'hooks/useFetchFilterOptions'
import useFetchProperties from 'hooks/useFetchProperties'
import ErrorScreen from 'components/error-screen/ErrorScreen'
import { useRouter } from 'next/router'

interface TabCtxProps {
  tab: number
  setTab: Dispatch<SetStateAction<number>>
}

const TabCtx = createContext<TabCtxProps>({} as TabCtxProps)

const LandingPage: NextPage = () => {
  // const filter = useAppSelector(state => state.filter)
  // const dispatch = useAppDispatch()

  const router = useRouter()

  const [tab, setTab] = useState(0)
  const { filterOptions, isLoading, isError } =
    useFetchFilterOptions(tab)
  const bedroomOptions = [
    'studio+',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
  ].map(num => ({ value: num, label: num }))

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return <ErrorScreen isError={isError} />
  }

  return (
    <Box sx={{ height: '100vh' }}>
      <TabCtx.Provider value={{ tab, setTab }}>
        <Stack sx={{ height: '100%', pb: 5 }}>
          <Header />
          <Filters
            locationOptions={
              filterOptions.locationOptions as any
            }
            maxPriceOptions={
              filterOptions.maxPriceOptions as any
            }
            typeOptions={filterOptions.typeOptions as any}
            bedroomsOptions={bedroomOptions as any}
          />
          <Button
            sx={{ m: 2, mt: 'auto', mr: 3 }}
            onClick={() => {
              router.replace('/properties')
            }}
          >
            Search
          </Button>
        </Stack>
      </TabCtx.Provider>
    </Box>
  )
}

export { TabCtx }
export default LandingPage
