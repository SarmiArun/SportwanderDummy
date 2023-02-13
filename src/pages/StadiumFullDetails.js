import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Chip
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { stadiumdetails, changestatus } from '../redux/actions/actions';

export default function StadiumFullDetails() {
  const [details, setDetails] = useState({
    name: ''
  });
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(stadiumdetails({ id: String(id) }));
  }, [id]);
  const data = useSelector(({ stadiumdetails }) => stadiumdetails.payload);

  console.log('list', data);

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
          <Grid item xs={8} md={9} lg={7}>
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
              {Array.isArray(data?.images) ? (
                (data?.images).map((L) => (
                  <Box sx={{ marginTop: '30px' }}>
                    <img src={L} alt="ghjdfoihoi" />
                  </Box>
                ))
              ) : (
                <h2>No image Found!</h2>
              )}
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
                    {' '}
                    {data?.amenities}
                  </div>
                </div>
              ) : null}
            </div>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <div>
              <div style={{ fontSize: '24px', lineHeight: '24px', fontWeight: '500' }}>
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
            <div style={{ marginTop: '30px' }}>
              <div style={{ fontSize: '24px', lineHeight: '24px', fontWeight: '500' }}>
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
                  marginTop: '20px'
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
              <div>
                {Array.isArray(data?.courts)
                  ? (data?.courts).map((c) => (
                      <Box sx={{ marginTop: '30px' }}>
                        <div style={{ fontSize: '24px', lineHeight: '24px', fontWeight: '500' }}>
                          Court Details
                        </div>
                        <div style={{ fontSize: '20px', lineHeight: '40px', marginTop: '20px' }}>
                          Court Name: {c.court_name}
                          <br />
                          Playable Game: {c.playable_game}
                          <br />
                          Duration: {c.duration}
                          <br />
                          Created At : {c.createdAt}, <br />
                          Price: ₹ {c.price}
                          <br />
                          {c.date ? <span>Date : {c.date}</span> : null}
                        </div>
                      </Box>
                    ))
                  : null}
              </div>
              <div>
                <div style={{ display: 'flex', marginTop: '20px' }}>
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
    </div>
  );
}
