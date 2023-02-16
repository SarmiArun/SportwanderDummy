import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button, Container, Grid, TextField, FormControlLabel } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { addtime } from '../redux/actions/actions';

function CourtTimming() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [date, setDate] = React.useState();
  const [time, setTime] = useState([]);
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [price, setPrice] = useState('');
  const [value, setValue] = React.useState('Yes');
  console.log(date);
  const { stadiumId, courtId } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    time[0] = timeFrom;
    time[1] = timeTo;
    dispatch(
      addtime({
        time,
        price,
        date,
        isDefault: true,
        stadiumId: String(stadiumId),
        courtId: String(courtId)
      })
    );
    console.log(time[0]);
    console.log(time[1]);
  };

  return (
    <div>
      <Container>
        <Grid container mb={4}>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={3} pt={2}>
            <FormLabel>Date</FormLabel>
            <br />
            <input
              type="date"
              id="date"
              placeholder="Date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
              style={{
                width: '200px',
                height: '60px',
                border: '1px solid #dce0e4',
                borderRadius: '8px',
                fontFamily: 'poppins',
                fontSize: '18px',
                padding: '10px',
                marginRight: '10px'
              }}
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <div style={{ display: 'flex' }}>
              {' '}
              <FormLabel pb={2}>Duration</FormLabel>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginRight: '20px'
              }}
            >
              <div>
                <FormLabel pb={2}>From</FormLabel>
                <br />
                <input
                  placeholder="From"
                  type="time"
                  name="timeFrom"
                  onChange={(e) => setTimeFrom(e.target.value)}
                  style={{
                    width: '140px',
                    height: '60px',
                    border: '1px solid #dce0e4',
                    borderRadius: '8px',
                    fontFamily: 'poppins',
                    fontSize: '18px',
                    padding: '10px',
                    marginRight: '10px'
                  }}
                />
              </div>
              <div>
                {' '}
                <FormLabel pb={2}>To</FormLabel>
                <br />
                <input
                  type="time"
                  name="timeTo"
                  placeholder="To"
                  onChange={(e) => setTimeTo(e.target.value)}
                  style={{
                    width: '140px',
                    height: '60px',
                    border: '1px solid #dce0e4',
                    borderRadius: '8px',
                    fontFamily: 'poppins',
                    fontSize: '18px',
                    padding: '10px'
                  }}
                />
              </div>
            </div>
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <FormLabel>Price</FormLabel>
            <br />
            <TextField name="price" label="₹ Price" onChange={(e) => setPrice(e.target.value)} />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12} pl={3} pr={3} pt={3}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Is Default</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="isdefault"
                onChange={(e) => setValue(e.target.value)}
              >
                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                <FormControlLabel value="false" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              className="pr-2"
              variant="contained"
              style={{ textTransform: 'uppercase', boxShadow: 'none', marginRight: '10px' }}
              size="large"
              onClick={handleSubmit}
            >
              submit
            </Button>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default CourtTimming;
