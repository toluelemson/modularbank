/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Field } from 'formik'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import { FormikSelectProps, FormikSelectItem, OptionLabel } from '../../types/interfaces/form.interface'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

const renderSelectField : React.FC<FormikSelectProps> = ({
  name, items, value,
  label, required, onChange,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Autocomplete
        id={name}
        options={items}
        getOptionLabel={(option: OptionLabel) => option.value}
        fullWidth
        onChange={onChange}
        renderInput={(params: TextFieldProps) => (
          <TextField
            {...params}
            name={name}
            required={required}
            label={label}
            value={value}
            variant="outlined"
          />
        )}
      />
    </div>
  )
}

const FormikSelect: React.FC<FormikSelectItem> = ({
  name, label, items, required = false,
}) => (
  <div>
    <Field
      name={name}
      as={renderSelectField}
      items={items}
      label={label}
      required={required}
    />
  </div>
)

export default FormikSelect
