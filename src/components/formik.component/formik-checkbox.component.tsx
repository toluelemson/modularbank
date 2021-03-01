import React from 'react'
import { ErrorMessage, Field } from 'formik'
import { makeStyles } from '@material-ui/core/styles'

import {
  Checkbox, FormControlLabel,
} from '@material-ui/core'
import { FormikTextFieldProps, FormikCheckboxProps } from '../../types/interfaces/form.interface'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})
const renderCheckbox : React.FC<FormikTextFieldProps> = ({
  label,
  value,
  name,
  onBlur,
  onChange,
  required,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <FormControlLabel
        control={(
          <Checkbox
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            required={required}
          />
      )}
        label={label}
      />
    </div>
  )
}

const FormikCheckbox: React.FC<FormikCheckboxProps> = ({ name, label, required=false) => (
  <div>
    <Field
      name={name}
      as={renderCheckbox}
      required={required}
      label={label}
      errorString={<ErrorMessage name={name} />}
    />
  </div>
)

export default FormikCheckbox
