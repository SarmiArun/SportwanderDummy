import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { Button, Container, Typography, Stack, Grid, TextField, Box, Modal } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
import { addcourt } from '../redux/actions/actions';

function AddCourt(props) {
  const [court, setCourt] = useState({
    playableGame: '',
    courtName: ''
  });

  const [price, setPrice] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCourt({ ...court, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const pri = Number(price);
    const from = moment(timeFrom, 'HH:mm').format('h:mm a');
    const to = moment(timeTo, 'HH:mm').format('h:mm a');
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '20px'
                }}
              >
                <FormLabel pb={2}>Duration</FormLabel>
              </div>
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

          <Button
            variant="contained"
            style={{ textTransform: 'uppercase', boxShadow: 'none', marginRight: '10px' }}
            size="large"
          >
            Court Timing
          </Button>

          <Button
            variant="contained"
            style={{ textTransform: 'uppercase', boxShadow: 'none' }}
            size="large"
          >
            Default Timing
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default AddCourt;
