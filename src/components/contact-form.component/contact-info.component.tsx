import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {

  },
  header: {
    color: '#DE3C4B',
  },
})

const initialState = {
  pressEmail: 'press@modularbank',
  careerEmail: 'careers@modularbank',
  tallinnOffice: 'Estonia Vabaduse Workland Pärnu mnt 12, 10146 Berlin',
  germanyOffice: 'Bikini Berlin, Scaling Spaces, 2.OG Budapester Str. 4610787 Berlin',
}

function ContactInfo() {
  const classes = useStyles()
  const [info] = useState(initialState)
  return (
    <Grid className={classes.root}>
      <Box my="2rem">
        <Typography variant="h5" gutterBottom>
          Media enquiries
        </Typography>
        <Typography className={classes.header} variant="body1" gutterBottom>
          {info.pressEmail}
        </Typography>
      </Box>

      <Box my="2rem">
        <Typography variant="h5" gutterBottom>
          Career Email
        </Typography>
        <Typography className={classes.header} variant="body1" gutterBottom>
          {info.careerEmail}
        </Typography>
      </Box>

      <Box my="2rem">
        <Typography variant="h5" gutterBottom>
          Offices
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Tallinn
        </Typography>
        <Typography className={classes.header} variant="body1" gutterBottom>
          {info.tallinnOffice}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Germany
        </Typography>
        <Typography className={classes.header} variant="body1" gutterBottom>
          {info.germanyOffice}
        </Typography>
      </Box>
    </Grid>
  )
}

export default ContactInfo
