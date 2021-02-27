import React from 'react'
import { ErrorMessage, Field } from 'formik'
import TextField from '@material-ui/core/TextField'
import { FormikTextFieldProps, FormikFieldProps } from '../../types/interfaces/form.interface'

const renderTextField : React.FC<FormikTextFieldProps> = ({
  label, name, onChange, onBlur,
}) => (
  <TextField
    name={name}
    color="primary"
    placeholder={label}
    multiline
    rows={5}
    onChange={onChange}
    onBlur={onBlur}
    fullWidth
    variant="outlined"
    rowsMax={10}
  />
)

const FormikTextArea : React.FC<FormikFieldProps> = ({
  label,
  name, type = 'text', required,
}) => (
  <div>
    <Field
      as={renderTextField}
      required={required}
      autoComplete="on"
      name={name}
      label={label}
      type={type}
      helperText={(
        <ErrorMessage name={name} />
)}
    />
  </div>
)//

export default FormikTextArea
