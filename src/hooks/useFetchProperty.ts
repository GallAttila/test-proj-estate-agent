import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetchProperty = (propertyId: string) => {
  const [property, setProperty] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        const propertyRes = await axios(
          `${process.env.NEXT_PUBLIC_BASE_URL}/property/residential/sale/${propertyId}?expand=MainPhoto,Address,Types,Media,Currency&fields=Id,TransactionTypeId,Bedrooms,Bathrooms,Description,Price,Address.Street,Address.Town,Types.Id,Types.Name,Media.TypeId,Media.Data,Currency.Symbo&api-key=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        console.log('propertyRes', propertyRes)
        setProperty(propertyRes.data.data)
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        // handle error
        setIsError(true)
      }
    }
    fetch()
  }, [propertyId])

  return {
    property,
    isLoading,
    isError,
  }
}

export default useFetchProperty
