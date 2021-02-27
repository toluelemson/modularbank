import React from 'react'
import { ErrorMessage, Field } from 'formik'
import TextField from '@material-ui/core/TextField'
import { FormikFieldProps } from '../../types/interfaces/form.interface'

const useStyles = () => ({
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: 'white',
  },
})

const FormikTextField : React.FC<FormikFieldProps> = ({
  name, label, type = 'text', required,
}) => {
  const classes = useStyles()
  return (
    <div>
      <Field
        as={TextField}
        className={classes.input}
        required={required}
        autoComplete="on"
        variant="outlined"
        fullWidth
        label={label}
        name={name}
        type={type}
        helperText={(
          <ErrorMessage name={name} />
)}
      />
    </div>
  )
}

export default FormikTextField
