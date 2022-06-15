import { Stack } from '@mui/material'
import { FC, useContext } from 'react'
import CustomSelect from './CustomSelect'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { filterActions } from 'store/filter-slice'
import { TabCtx } from 'pages/index'
import { FilterOption } from 'types/FilterOption'

interface Props {
  locationOptions: Array<FilterOption> | FilterOption
  maxPriceOptions: Array<FilterOption> | FilterOption
  typeOptions: Array<FilterOption> | FilterOption
  bedroomsOptions: Array<FilterOption> | FilterOption
}

const Filters: FC<Props> = props => {
  const { tab } = useContext(TabCtx)
  const filter = useAppSelector(state => state.filter)
  const dispatch = useAppDispatch()

  return (
    <Stack spacing={2} sx={{ mt: 1, p: 2, pr: 3 }}>
      <CustomSelect
        title="Location"
        options={props.locationOptions}
        selectedOption={filter.location!}
        onChange={(e, child) =>
          dispatch(
            filterActions.setLocation({
              value: e.target.value,
              label: e.target.value,
            })
          )
        }
      />
      <CustomSelect
        title={tab === 0 ? 'Max Price' : 'Max Price (per month)'}
        options={props.maxPriceOptions}
        selectedOption={filter.maxPrice!}
        onChange={(e, child) =>
          dispatch(
            filterActions.setMaxPrice({
              value: e.target.value,
              label: e.target.value,
            })
          )
        }
      />
      <CustomSelect
        title="Type"
        options={props.typeOptions}
        selectedOption={filter.type!}
        onChange={(e, child) =>
          dispatch(
            filterActions.setType({
              value: e.target.value,
              label: e.target.value,
            })
          )
        }
      />
      <CustomSelect
        title="Bedrooms"
        options={props.bedroomsOptions}
        selectedOption={filter.bedrooms!}
        onChange={(e, child) =>
          dispatch(
            filterActions.setBedrooms({
              value: e.target.value,
              label: e.target.value,
            })
          )
        }
      />
    </Stack>
  )
}

export default Filters
