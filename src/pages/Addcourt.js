import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { Button, Container, Typography, Stack, Grid, TextField, Box, Modal } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { addcourt } from '../redux/actions/actions';

const useStyles = makeStyles({
  paper: {
    overflowY: 'scroll',
    height: '450px'
  }
});
function AddCourt(props) {
  const [court, setCourt] = useState({
    playableGame: '',
    courtName: ''
  });
  const classes = useStyles();
  const [price, setPrice] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  const dispatch = useDispatch();
  const MenuProps = {
    autoFocus: false
  };
  const handleChange = (e) => {
    setCourt({ ...court, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const pri = Number(price);
    const from = timeFrom;
    const to = timeTo;
    const time = `${from}-${to}`;
    dispatch(addcourt({ ...court, duration: time, price: pri, stadiumId: data }));
  };

  return (
    <div>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4" pl={2} gutterBottom>
            Add Court
          </Typography>
        </Stack>
        <Grid container mb={4}>
          <Grid item sm={12} lg={6} md={6} xs={12} pr={2} pl={2} pt={2}>
            <TextField name="courtName" label="Court Name" onChange={handleChange} fullWidth />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField
              name="playableGame"
              label="Playable Game"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={5}>
            <TextField
              name="price"
              label="Price"
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
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
                marginRight: '20px',
                marginTop: '10px'
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
      </Container>
    </div>
  );
}

export default AddCourt;
