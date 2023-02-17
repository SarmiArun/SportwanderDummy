import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, useParams, useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import { Container, Button, Box, Grid, Card, Chip } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import { courtbook, BookedCourts } from '../redux/actions/actions';

const BookCourt = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [datep, setDatep] = React.useState();
  const navigate = useNavigate();
  console.log(datep);
  const { stadiumId, courtId } = location.state;

  useEffect(() => {
    dispatch(BookedCourts());
  }, []);
  const data = useSelector(({ BookedCourts }) => BookedCourts.payload);
  console.log('list', data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = moment(datep).format('DD-MM-YYYY');

    dispatch(
      courtbook({
        date,
        courtId: String(courtId),
        stadiumId: String(stadiumId)
      })
    );
  };
  return (
    <Box>
      <Grid container mb={4}>
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Grid item sm={12} lg={12} md={12} xs={12} pl={2} pr={3} pt={2}>
          <div style={{ display: 'flex' }}>
            {' '}
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
      {data ? (
        <Grid container spacing={2} className="mt-3">
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card
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
                ,kjhv
              </Typography>
            </Card>
          </Grid>
        </Grid>
      ) : null}
    </Box>
  );
};

export default BookCourt;
