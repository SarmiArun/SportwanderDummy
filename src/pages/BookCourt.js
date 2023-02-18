import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, useParams, useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import { Container, Button, Box, Grid, Card, Chip } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import { courtbook } from '../redux/actions/actions';

const BookCourt = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [datep, setDatep] = React.useState();
  const [data, setData] = React.useState([]);
  const [slotselected, setSlotSelected] = useState([]);
  const [slotlist, setSlotlist] = useState([]);
  const [slot, setSlot] = useState([]);
  const [bookprice, setBookprice] = useState([]);
  const navigate = useNavigate();
  console.log(datep);
  const { stadiumId, courtId } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = moment(datep).format('DD-MM-YYYY');

    dispatch(
      courtbook({
        date,
        courtId: String(courtId),
        stadiumId: String(stadiumId)
      })
    ).then((res) => {
      setData(res.data.data);
      console.log(data);
    });
  };

  const slots = slotselected;
  slots[index] = !slots[index];
  const filteredslots = slotlist
    .filter((data, index) => slots[index])
    .map((data) => Number(data.price));
  let price = 0;
  if (filteredslots.length > 0) price = filteredslots.reduce((from, to) => from + to);
  else setBookprice(price);
  setSlotSelected([...slotselected]);

  return (
    <Box>
      <Grid container mb={4}>
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Grid item sm={12} lg={12} md={12} xs={12} pl={2} pr={3} pt={2}>
          <div style={{ display: 'flex' }}>
            <div>
              {' '}
              <FormLabel>Enter the Date</FormLabel>
              <br />
              <input
                type="date"
                id="date"
                placeholder="Date"
                name="date"
                onChange={(e) => setDatep(e.target.value)}
                style={{
                  width: '200px',
                  height: '60px',
                  border: '1px solid #dce0e4',
                  borderRadius: '8px',
                  fontFamily: 'poppins',
                  fontSize: '18px',
                  padding: '10px',
                  marginRight: '10px',
                  marginTop: '10px'
                }}
              />
            </div>
            <div
              style={{
                marginTop: '40px'
              }}
            >
              <Button
                className="pr-2"
                variant="contained"
                onClick={handleSubmit}
                style={{
                  textTransform: 'uppercase',
                  boxShadow: 'none',
                  marginRight: '10px'
                }}
                size="large"
              >
                Submit
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="mt-3">
        {Array.isArray(data) && data?.length > 0
          ? data.map((x, index) => (
              <Grid item sm={12} lg={2} md={6} xs={12} pr={2} pl={2} pt={2}>
                <Card
                  onClick={(e) => setSlot(index)}
                  style={{
                    borderRadius: '12px',
                    width: '200px',
                    padding: '15px',
                    cursor: 'pointer'
                  }}
                >
                  <Typography
                    style={{
                      fontSize: '18px',
                      lineHeight: '18px',
                      display: 'flex',
                      justifyContent: 'center',
                      fontFamily: 'poppins',
                      fontWeight: '500'
                    }}
                    gutterBottom
                  >
                    {x.time}
                  </Typography>
                </Card>
              </Grid>
            ))
          : false}
      </Grid>
    </Box>
  );
};

export default BookCourt;
