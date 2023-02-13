import * as React from 'react';
import { Button, Container, Typography, Stack, Grid, TextField, Box, Modal } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function DefaultCourt() {
  const [timeFrom, setTimeFrom] = React.useState('');
  const [timeTo, setTimeTo] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(timeFrom, timeTo, price, status);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4" pl={2} gutterBottom>
          Add Default Court Timing
        </Typography>
      </Stack>
      <Grid container mb={4}>
        <Grid item sm={12} lg={3} md={3} xs={12} pl={2} pr={3} pt={2}>
          <div style={{ display: 'flex' }}>
            {' '}
            <div>
              <FormLabel pb={2}>From</FormLabel>
              <br />
              <input
                placeholder="From"
                onChange={(e) => setTimeFrom(e.target.value)}
                type="time"
                name="timeFrom"
                style={{
                  width: '130px',
                  height: '60px',
                  border: '1px solid #dce0e4',
                  borderRadius: '8px',
                  fontFamily: 'poppins',
                  fontSize: '18px',
                  padding: '10px'
                }}
              />
            </div>
            <div>
              {' '}
              <FormLabel pb={2}>To</FormLabel>
              <br />
              <input
                type="time"
                onChange={(e) => setTimeTo(e.target.value)}
                name="timeTo"
                placeholder="To"
                style={{
                  width: '130px',
                  height: '60px',
                  border: '1px solid #dce0e4',
                  borderRadius: '8px',
                  marginLeft: '20px',
                  fontFamily: 'poppins',
                  fontSize: '18px',
                  padding: '10px'
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item sm={12} lg={3} md={3} xs={12} pr={3} pl={3} pt={5}>
          <TextField name="price" onChange={(e) => setPrice(e.target.value)} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={3} md={3} xs={12} pl={2} pr={2} pt={2}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
              row
            >
              <FormControlLabel value="open" control={<Radio />} label="Open" />
              <FormControlLabel value="close" control={<Radio />} label="Close" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={3} md={3} xs={12} pl={3} pr={3} pt={5}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              style={{ textTransform: 'uppercase', boxShadow: 'none' }}
              size="large"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DefaultCourt;
