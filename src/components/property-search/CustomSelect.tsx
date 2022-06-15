import { FC, useReducer, useEffect, ReactNode } from 'react'
import axios from 'axios'
import {
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useAppSelector } from 'hooks/redux'
import { FilterOption } from 'types/FilterOption'

interface Props {
  title: string
  options: Array<FilterOption> | FilterOption
  selectedOption: FilterOption
  onChange: (
    event: SelectChangeEvent<string>,
    child: ReactNode
  ) => void
}

const CustomSelect: FC<Props> = props => {
  return (
    <Stack spacing={0.5}>
      <Typography variant="body1" color="initial">
        {props.title}
      </Typography>
      <FormControl fullWidth>
        <Select
          IconComponent={KeyboardArrowDownIcon}
          value={props.selectedOption.value as string}
          onChange={props.onChange}
          sx={{ fieldset: { borderRadius: 15 } }}
        >
          {!Array.isArray(props.options) ? (
            <MenuItem
              key={props.options.value}
              value={props.options.value}
            >
              {props.options.label}
            </MenuItem>
          ) : (
            props.options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Stack>
  )
}

export default CustomSelect
