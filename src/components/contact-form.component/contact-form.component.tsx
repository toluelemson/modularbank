import React, { useState } from 'react'
import {
  Box,
  Button,
} from '@material-ui/core'
import {
  Formik,
  Form,
} from 'formik'
import {
  object, string, boolean,
} from 'yup'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Alert } from '@material-ui/lab'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Collapse from '@material-ui/core/Collapse'
import FormikTextField from '../formik.component/formik-textfield.component'
import FormikSelect from '../formik.component/formik-select.component'
import FormikCheckbox from '../formik.component/formik-checkbox.component'
import FormikTextArea from '../formik.component/formik-textarea.component'
import IndustryItems from '../../data/industry-item.data'
import CountryItems from '../../data/country-items.data'
import OperatingGeography from '../../data/operating-geography.component'

// Interfaces
import { FormValues } from '../../types/interfaces/form.interface'

const useStyles = makeStyles({
  root: {

  },
})

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  jobTitle: '',
  company: '',
  industry: '',
  countries: '',
  operatingGeography: '',
  message: '',
  acceptedTerms: false,
  receiveNewsLetter: false,
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState(initialValues)
  const [open, setOpen] = React.useState(true)
  const classes = useStyles()
  return (
    <div>
      <Formik
        initialValues={formValues}
        validationSchema={object({
          firstName: string().max(15, 'Must be 15 characters or less'),
          lastName: string().max(20, 'Must be 20 characters or less'),
          email: string().email('Invalid email address').required('Required'),
          message: string().required().min(2).max(100),
          acceptedTerms: boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
        })}
        onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
          setTimeout(() => {
            setStatus({ message: 'Success' })
          }, 400)
          setFormValues(values)
          setSubmitting(false)
          resetForm()
        }}
      >
        {({
          isSubmitting, dirty, status,
        }) => (
          <>

            <Form className={classes.root}>
              <Grid container spacing={3} xs={12}>

                {' '}
                <Grid alignItems="center" xs={12}>
                  <Box my="2rem">
                    {status && status.message && (
                    <Collapse in={open}>
                      <Alert
                        severity="success"
                        action={(
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false)
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
)}
                      >
                        Message sent!
                      </Alert>
                    </Collapse>
                    )}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikTextField label="First Name" name="firstName" required />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikTextField label="Last name" name="lastName" required />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikTextField label="Email" name="email" required />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikTextField label="Job Title" name="jobTitle" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikTextField label="Company" name="company" required />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikSelect label="Industry" name="industry" items={IndustryItems} required />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikSelect label="Countries" name="countries" items={CountryItems} required />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormikSelect label="Operating Geography" name="operatingGeography" items={OperatingGeography} />
                </Grid>

                <Grid item xs={12}>
                  <FormikTextArea type="textarea" label="Message" name="message" />
                </Grid>

                <Grid item xs={12}>
                  <FormikCheckbox label="By  submitting this form I accept privacy policy and cookie policy" name="acceptedTerms" />
                  <FormikCheckbox label="I would like to receive your newsletters" name="receiveNewsLetter" />
                </Grid>

                <Grid item xs={12}>
                  <Button disabled={(isSubmitting || !dirty)} variant="contained" color="secondary" type="submit">{isSubmitting ? 'Submitting' : 'Submit'}</Button>
                </Grid>
              </Grid>

            </Form>
          </>
        )}
      </Formik>
    </div>

  )
}
export default ContactForm
