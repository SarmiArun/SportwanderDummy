import React, { useState } from 'react';
import { useLocation, Link, useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Container, Grid, TextField, FormControlLabel } from '@mui/material';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { addtime } from '../redux/actions/actions';

const useStyles = makeStyles({
  paper: {
    overflowY: 'scroll',
    height: '450px'
  }
});

function CourtTimming() {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [date, setDate] = React.useState();
  const [times, setTimes] = useState([]);
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [price, setPrice] = useState('');
  const [value, setValue] = React.useState('Yes');
  console.log(date);
  const { stadiumId, courtId } = location.state;
  const MenuProps = {
    autoFocus: false
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    times[0] = timeFrom;
    times[1] = timeTo; // const times = `${timeFrom}``${timeTo}`;
    console.log(times);
    const t = times.join('-');
    const timee = Array.of(t);
    dispatch(
      addtime({
        price,
        date,
        isDefault: true,
        stadiumId: String(stadiumId),
        courtId: String(courtId),
        time: timee
      })
    );
    // console.log(time[0]);
    // console.log(time[1]);
  };

  return (
    <div>
      <Container>
        <Button onClick={() => navigate(-1)}>Back</Button>
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
                <FormControl style={{ width: '130px', height: '50px' }}>
                  <InputLabel id="demo-simple-select-label">From</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="From"
                    name="timeFrom"
                    MenuProps={{
                      ...MenuProps,
                      classes: {
                        paper: classes.paper
                      }
                    }}
                    onChange={(e) => setTimeFrom(e.target.value)}
                  >
                    <MenuItem value="12AM">12.00</MenuItem>
                    <MenuItem value="1AM">01.00</MenuItem>
                    <MenuItem value="2AM">02.00</MenuItem>
                    <MenuItem value="3AM">03.00</MenuItem>
                    <MenuItem value="4AM">04.00</MenuItem>
                    <MenuItem value="5AM">05.00</MenuItem>
                    <MenuItem value="6AM">06.00</MenuItem>
                    <MenuItem value="7AM">07.00</MenuItem>
                    <MenuItem value="8AM">08.00</MenuItem>
                    <MenuItem value="9AM">09.00</MenuItem>
                    <MenuItem value="10AM">10.00</MenuItem>
                    <MenuItem value="11AM">11.00</MenuItem>
                    <MenuItem value="12PM">00.00</MenuItem>
                    <MenuItem value="1PM">13.00</MenuItem>
                    <MenuItem value="2PM">14.00</MenuItem>
                    <MenuItem value="3PM">15.00</MenuItem>
                    <MenuItem value="4PM">16.00</MenuItem>
                    <MenuItem value="5PM">17.00</MenuItem>
                    <MenuItem value="6PM">18.00</MenuItem>
                    <MenuItem value="7PM">19.00</MenuItem>
                    <MenuItem value="8PM">20.00</MenuItem>
                    <MenuItem value="9PM">21.00</MenuItem>
                    <MenuItem value="10PM">22.00</MenuItem>
                    <MenuItem value="11PM">23.00</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginLeft: '20px' }}>
                <FormControl style={{ width: '130px', height: '20px' }}>
                  <InputLabel id="demo-simple-select-label">To</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="To"
                    name="timeTo"
                    onChange={(e) => setTimeTo(e.target.value)}
                    MenuProps={{
                      ...MenuProps,
                      classes: {
                        paper: classes.paper
                      }
                    }}
                  >
                    <MenuItem value="12AM">12.00</MenuItem>
                    <MenuItem value="1AM">01.00</MenuItem>
                    <MenuItem value="2AM">02.00</MenuItem>
                    <MenuItem value="3AM">03.00</MenuItem>
                    <MenuItem value="4AM">04.00</MenuItem>
                    <MenuItem value="5AM">05.00</MenuItem>
                    <MenuItem value="6AM">06.00</MenuItem>
                    <MenuItem value="7AM">07.00</MenuItem>
                    <MenuItem value="8AM">08.00</MenuItem>
                    <MenuItem value="9AM">09.00</MenuItem>
                    <MenuItem value="10AM">10.00</MenuItem>
                    <MenuItem value="11AM">11.00</MenuItem>
                    <MenuItem value="12PM">00.00</MenuItem>
                    <MenuItem value="1PM">13.00</MenuItem>
                    <MenuItem value="2PM">14.00</MenuItem>
                    <MenuItem value="3PM">15.00</MenuItem>
                    <MenuItem value="4PM">16.00</MenuItem>
                    <MenuItem value="5PM">17.00</MenuItem>
                    <MenuItem value="6PM">18.00</MenuItem>
                    <MenuItem value="7PM">19.00</MenuItem>
                    <MenuItem value="8PM">20.00</MenuItem>
                    <MenuItem value="9PM">21.00</MenuItem>
                    <MenuItem value="10PM">22.00</MenuItem>
                    <MenuItem value="11PM">23.00</MenuItem>
                  </Select>
                </FormControl>
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
        </Grid>
      </Container>
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
    </div>
  );
}

export default CourtTimming;
