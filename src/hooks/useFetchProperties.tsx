import axios from 'axios'
import { useEffect, useState } from 'react'
import { FilterState } from 'store/filter-slice'

const useFetchProperties = (
  tab: number,
  filter: FilterState
) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [properties, setProperties] = useState<any>()

  useEffect(() => {
    const fetch = async () => {
      let locationFilter
      if (filter.location!.value === 'all') {
        locationFilter = ''
      } else {
        locationFilter = filter.location!.value
      }

      try {
        // fetch locationOptions
        const locationOptionsRes = await axios(
          `${
            process.env.NEXT_PUBLIC_BASE_URL
          }/property/residential/${
            tab === 0 ? 'sale' : 'letting'
          }?location=${locationFilter}&max-price=${
            filter.maxPrice!.value
          }&type=${filter.type!.value}&min-bed=${
            filter.bedrooms!.value
          }&api-key=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        console.log(locationOptionsRes.data.data.Data)
        setProperties(locationOptionsRes.data.data.Data)
        setIsLoading(false)
      } catch (err) {
        setIsError(true)
        setIsLoading(false)
      }
    }
    fetch()
  }, [tab, filter])

  return {
    properties,
    isLoading,
    isError,
  }
}

export default useFetchProperties
