import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import moment from 'moment';
import { Container, Button, Box, Grid, Card, Chip } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { stadiumdetails, changestatus, courtbook } from '../redux/actions/actions';

export default function StadiumFullDetails() {
  const [open, setOpen] = React.useState(false);
  const [courtID, setCourtID] = useState('');

  const [status, setStatus] = useState('');
  const [datep, setDatep] = React.useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(stadiumdetails({ id: String(id) }));
  }, [id]);
  const data = useSelector(({ stadiumdetails }) => stadiumdetails.payload);
  console.log('list', data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = moment(datep).format('DD-MM-YYYY');

    dispatch(
      courtbook({
        date,
        courtId: String(courtID),
        stadiumId: id
      })
    );
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ marginBottom: '20px' }}>Stadium Details</h1>
        <Link to="/admin/addcourt" state={{ data: id }} style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{ height: '3rem', boxShadow: '0' }}>
            Add Court
          </Button>
        </Link>
      </div>
      <Card style={{ padding: '50px' }}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={9} lg={6}>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  textTransform: 'capitalize',
                  fontSize: '28px',
                  lineHeight: '24px',
                  fontWeight: '500',
                  marginRight: '10px'
                }}
              >
                {data?.name},
              </div>
              <div
                style={{
                  fontSize: '20px',
                  marginRight: '10px',
                  lineHeight: '24px',
                  textTransform: 'capitalize'
                }}
              >
                {' '}
                {data?.street},
              </div>
              <div
                style={{
                  fontSize: '20px',
                  lineHeight: '24px',
                  marginRight: '10px',
                  textTransform: 'capitalize'
                }}
              >
                {data?.district}.
              </div>
              <div>
                {data?.bookable === 'yes' ? (
                  <Chip style={{ backgroundColor: 'green', color: 'white' }} label="Bookable" />
                ) : null}
              </div>
              <div>
                {data?.status === 'active' ? (
                  <Button
                    style={{
                      background: 'green',
                      color: 'white'
                    }}
                  >
                    {data?.status}
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      dispatch(changestatus({ stadiumId: String(data?.id), status: 'active' }));
                    }}
                    style={{
                      background: 'Red',
                      color: 'white'
                    }}
                  >
                    {data?.status}
                  </Button>
                )}
              </div>
            </div>
            <div
              style={{ marginTop: '30px', fontSize: '20px', lineHeight: '20px', fontWeight: '500' }}
            >
              Availability Time : <Chip style={{ color: 'red' }} label={data?.availability} />
            </div>

            <div>
              <div
                style={{
                  fontSize: '24px',
                  lineHeight: '24px',
                  fontWeight: '500',
                  marginTop: '30px'
                }}
              >
                Location
              </div>
              <div
                style={{
                  textTransform: 'capitalize',
                  fontSize: '20px',
                  lineHeight: '40px',
                  marginTop: '20px'
                }}
              >
                {data?.street}, {data?.landmark}, {data?.district},<br /> {data?.state},{' '}
                {data?.country}- {data?.pincode}.
              </div>
            </div>
            <div>
              {data?.message ? (
                <p style={{ fontSize: '16px', lineHeight: '20px', textTransform: 'capitalize' }}>
                  {data?.message}
                </p>
              ) : null}
            </div>
            <div>
              {data?.amenities ? (
                <div style={{ marginTop: '30px' }}>
                  <div style={{ fontSize: '24px', lineHeight: '24px', fontWeight: '500' }}>
                    Amenities
                  </div>
                  <div style={{ fontSize: '20px', lineHeight: '20px', marginTop: '20px' }}>
                    {data?.amenities}
                  </div>
                </div>
              ) : null}
            </div>
            <div
              style={{ fontSize: '24px', lineHeight: '24px', fontWeight: '500', marginTop: '30px' }}
            >
              Phone Number:
            </div>
            <div
              style={{
                textTransform: 'capitalize',
                fontSize: '20px',
                lineHeight: '30px',
                marginTop: '20px'
              }}
            >
              {data?.phone}
            </div>
            <div
              style={{
                fontSize: '24px',
                lineHeight: '24px',
                fontWeight: '500',
                marginTop: '30px'
              }}
            >
              GST Number:
            </div>
            <div
              style={{
                textTransform: 'capitalize',
                fontSize: '20px',
                lineHeight: '30px',
                marginTop: '20px'
              }}
            >
              {data?.gst_no}
            </div>
          </Grid>
          <Grid item xs={4} md={4} lg={6}>
            <div style={{ marginTop: '30px' }}>
              <div>
                <Carousel showThumbs={false} emulateTouch="true" infiniteLoop="true">
                  {Array.isArray(data?.images) ? (
                    (data?.images).map((L) => (
                      <div>
                        <img
                          src={L}
                          alt="stadium_image"
                          style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                        />
                      </div>
                    ))
                  ) : (
                    <h2>No image Found!</h2>
                  )}
                </Carousel>
              </div>

              <div>
                <div style={{ display: 'flex', marginTop: '30px' }}>
                  <div
                    style={{
                      fontSize: '24px',
                      lineHeight: '24px',
                      fontWeight: '500',
                      marginRight: '10px'
                    }}
                  >
                    Full Court Details
                  </div>
                  <div>
                    {data?.fullcourt_available ? (
                      <Chip style={{ color: 'green' }} label="Full Court Available" />
                    ) : (
                      <Chip style={{ color: 'red' }} label="Full Court Not Available" />
                    )}
                  </div>
                </div>
                {data?.fullcourt_courts ? (
                  <div
                    style={{
                      textTransform: 'capitalize',
                      fontSize: '20px',
                      lineHeight: '30px',
                      marginTop: '20px'
                    }}
                  >
                    fullcourt_courts: {data?.fullcourt_courts}
                  </div>
                ) : null}
                <div
                  style={{
                    textTransform: 'capitalize',
                    fontSize: '20px',
                    lineHeight: '30px',
                    marginTop: '20px'
                  }}
                >
                  Fullcourt Price: ₹ {data?.fullcourt_price}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {Array.isArray(data?.courts)
          ? (data?.courts).map((c) => (
              <Grid item xs={12} md={6} lg={3}>
                <Card style={{ padding: '20px' }}>
                  <div>
                    <Box>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div
                          style={{
                            fontSize: '32px',
                            lineHeight: '30px',
                            marginTop: '10px',
                            fontWeight: '700',
                            color: 'black',
                            textTransform: 'capitalize'
                          }}
                        >
                          {c.court_name}{' '}
                        </div>
                        <Chip
                          style={{
                            color: 'red',
                            borderRadius: '8px',
                            marginRight: '20px',
                            textTransform: 'capitalize'
                          }}
                          label={c.playable_game}
                        />
                      </div>
                      <div style={{ fontSize: '20px', lineHeight: '40px', marginTop: '20px' }}>
                        <span
                          style={{
                            fontSize: '20px',
                            lineHeight: '20px',
                            marginTop: '10px',
                            fontWeight: '500',
                            color: 'black',
                            textTransform: 'capitalize'
                          }}
                        >
                          Created At :
                        </span>
                        {c.createdAt}, <br />
                        <span
                          style={{
                            fontSize: '20px',
                            lineHeight: '20px',
                            marginTop: '10px',
                            fontWeight: '500',
                            color: 'black',
                            textTransform: 'capitalize'
                          }}
                        >
                          Updated At :
                        </span>{' '}
                        {c.updatedAt}, <br />
                        <span
                          style={{
                            fontSize: '20px',
                            lineHeight: '20px',
                            marginTop: '10px',
                            fontWeight: '500',
                            color: 'black',
                            textTransform: 'capitalize'
                          }}
                        >
                          Price:
                        </span>
                        ₹ {c.price}
                        <br />
                        {c.date ? <span>Date : {c.date}</span> : null}
                      </div>
                    </Box>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Link
                      to="/admin/courttiming"
                      style={{ textDecoration: 'none' }}
                      state={{ stadiumId: c.stadium_id, courtId: c.id }}
                    >
                      {' '}
                      <Button
                        style={{
                          background: 'green',
                          color: 'white'
                        }}
                      >
                        Court Timing
                      </Button>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to="/admin/defaultcourt"
                      state={{ stadiumId: c.stadium_id, courtId: c.id }}
                    >
                      {' '}
                      <Button
                        style={{
                          background: 'Red',
                          color: 'white'
                        }}
                      >
                        Default Timing
                      </Button>{' '}
                    </Link>{' '}
                    <Link
                      style={{ textDecoration: 'none' }}
                      to="/admin/bookcourt"
                      state={{ stadiumId: c.stadium_id, courtId: c.id }}
                    >
                      {' '}
                      <Button
                        style={{
                          background: 'blue',
                          color: 'white'
                        }}
                      >
                        Book Court
                      </Button>
                    </Link>{' '}
                  </div>
                </Card>
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
}
