import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export default function MaterialGrid() {
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <Button variant='contained' fullWidth>1</Button>
      </Grid>
    </Grid>
  )
}