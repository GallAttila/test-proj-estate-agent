import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { useAppDispatch } from './redux'
import MAX_PRICE from 'assets/max-prices.json'
import { FilterOption } from 'types/FilterOption'
import { FilterOptions } from 'types/FilterOptions'
import { filterActions } from 'store/filter-slice'

enum ACTIONS {
  SET_LOCATION_OPTIONS = 'SET_LOCATION_OPTIONS',
  SET_MAX_PRICE_OPTIONS = 'SET_MAX_PRICE_OPTIONS',
  SET_TYPE_OPTIONS = 'SET_TYPE_OPTIONS',
  SET_BEDROOMS_OPTIONS = 'SET_BEDROOMS_OPTIONS',
}

interface FilterOptionsAction {
  type: ACTIONS
  payload: FilterOptions
}

const reducer = (
  state: FilterOptions,
  action: FilterOptionsAction
) => {
  switch (action.type) {
    case ACTIONS.SET_LOCATION_OPTIONS:
      return {
        ...state,
        locationOptions: [
          { value: 'all', label: 'All' },
          ...action.payload.locationOptions,
        ],
      }

    case ACTIONS.SET_MAX_PRICE_OPTIONS:
      return {
        ...state,
        maxPriceOptions: [
          {
            value: 'no-max',
            label: 'No Max',
          },
          ...action.payload.maxPriceOptions,
        ],
      }
    case ACTIONS.SET_TYPE_OPTIONS:
      return {
        ...state,
        typeOptions: [
          {
            value: 'any',
            label: 'Any',
          },
          ...action.payload.typeOptions,
        ],
      }
    default:
      return state
  }
}

const useFetchFilterOptions = (tab: number) => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [filterOptions, dispatchFilterOptions] = useReducer(
    reducer,
    {
      locationOptions: [{ value: 'all', label: 'All' }],
      maxPriceOptions: [{ value: 'no-max', label: 'No Max' }],
      typeOptions: [{ value: 'any', label: 'Any' }],
    }
  )

  useEffect(() => {
    const fetch = async () => {
      try {
        // fetch locationOptions
        const locationOptionsRes = await axios(
          `${
            process.env.NEXT_PUBLIC_BASE_URL
          }/property/location?transaction-type=${
            tab + 1
          }&api-key=${process.env.NEXT_PUBLIC_API_KEY}`
        )

        const locOpts: FilterOption[] =
          locationOptionsRes.data.data.Data.map(
            (opt: string) => ({
              value: opt,
              label: opt,
            })
          )

        dispatchFilterOptions({
          type: ACTIONS.SET_LOCATION_OPTIONS,
          payload: {
            ...filterOptions,
            locationOptions: locOpts,
          },
        })

        // fetch typeOptions
        const typeOptionsRes = await axios(
          `${
            process.env.NEXT_PUBLIC_BASE_URL
          }/property/type?transaction-type=${tab + 1}&api-key=${
            process.env.NEXT_PUBLIC_API_KEY
          }`
        )

        console.log('typeOptionsRes', tab + 1, typeOptionsRes)

        const typeOpts: FilterOption[] =
          typeOptionsRes.data.data.Data.map(
            (opt: { Name: string }) => ({
              value: opt.Name,
              label: opt.Name,
            })
          )

        dispatchFilterOptions({
          type: ACTIONS.SET_TYPE_OPTIONS,
          payload: {
            ...filterOptions,
            typeOptions: typeOpts,
          },
        })
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        setIsError(true)
      }

      // load maxPriceOptions
      const propertyKind = tab === 0 ? 'sales' : 'lettings'

      const maxPrices = MAX_PRICE.maxPrice[propertyKind].map(
        maxPrice => ({
          value: maxPrice,
          label: maxPrice,
        })
      )

      dispatchFilterOptions({
        type: ACTIONS.SET_MAX_PRICE_OPTIONS,
        payload: {
          ...filterOptions,
          maxPriceOptions: maxPrices,
        },
      })

      // dispatch filter form values to default
      dispatch(
        filterActions.setLocation({ value: 'all', label: 'All' })
      )
      dispatch(
        filterActions.setMaxPrice({
          value: 'no-max',
          label: 'No Max',
        })
      )
      dispatch(
        filterActions.setType({ value: 'any', label: 'Any' })
      )
      dispatch(
        filterActions.setBedrooms({
          value: 'studio+',
          label: 'Studio +',
        })
      )
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return {
    filterOptions,
    isLoading,
    isError,
  }
}

export default useFetchFilterOptions
