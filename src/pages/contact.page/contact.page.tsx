import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ContactForm from '../../components/contact-form.component/contact-form.component'
import ContactInfo from '../../components/contact-form.component/contact-info.component'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(10),
    maxWidth: '100%',
    width: '100%',
    height: '100vh',
  },
}))

export default function App() {
  const classes = useStyles()
  return (

    <Grid className={classes.container} container direction="column" spacing={5}>
      <Grid item xs={6}>
        <ContactInfo />
      </Grid>
      <Grid item xs={6}>
        <ContactForm />
      </Grid>
    </Grid>

  )
}
