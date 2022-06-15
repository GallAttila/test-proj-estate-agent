import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterOption } from 'types/FilterOption'

export interface FilterState {
  location?: FilterOption
  maxPrice?: FilterOption
  type?: FilterOption
  bedrooms?: FilterOption
}

const initialState: FilterState = {
  location: { value: 'all', label: 'All' },
  maxPrice: { value: 'no-max', label: 'No Max' },
  type: { value: 'any', label: 'Any' },
  bedrooms: { value: 'studio+', label: 'Studio +' },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLocation(filter, action: PayloadAction<FilterOption>) {
      filter.location = action.payload
    },
    setMaxPrice(filter, action: PayloadAction<FilterOption>) {
      filter.maxPrice = action.payload
    },
    setType(filter, action: PayloadAction<FilterOption>) {
      filter.type = action.payload
    },
    setBedrooms(filter, action: PayloadAction<FilterOption>) {
      filter.bedrooms = action.payload
    },
  },
})

export const filterActions = filterSlice.actions
export default filterSlice
