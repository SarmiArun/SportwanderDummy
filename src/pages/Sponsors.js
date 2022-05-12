import React, { useState, useEffect } from 'react';
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
import { LoadingButton } from '@mui/lab';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { useFormik, Form, FormikProvider } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { sponseradd, sponserlist } from '../redux/actions/actions';

function Sponsors() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    type: '',
    image: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(sponseradd(data));
    navigate(`/Sponserlist/${data.type}`);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const title = 'TITLE_SPONSOR';
  const associate = 'ASSOCIATE_SPONSOR';
  const partner = 'PARTNER';
  const Sponsor = 'CO_SPONSOR';
  return (
    <div>
      <Container>
        <h1>Sponsors</h1>
        <br />
        <h2>Add </h2>
        <h4 style={{ marginTop: '10px' }}>Sponsor Type</h4>

        <FormControl fullWidth style={{ marginTop: '10px' }}>
          <InputLabel id="demo-simple-select-label">Sponsor Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sponsor Type"
            name="type"
            onChange={handleChange}
          >
            <MenuItem value="TITLE_SPONSOR"> TITLE SPONSOR</MenuItem>
            <MenuItem value="ASSOCIATE_SPONSOR"> ASSOCIATE SPONSORS</MenuItem>
            <MenuItem value="PARTNER"> PARTNERS</MenuItem>
            <MenuItem value="CO_SPONSOR"> CO SPONSORS</MenuItem>
          </Select>
        </FormControl>

        <h4 style={{ marginTop: '20px' }}>Sponsor Image</h4>

        <TextField
          autoComplete="location"
          type="text"
          style={{ width: '100%', marginRight: '10px', marginTop: '10px' }}
          label="Enter URL"
          onChange={handleChange}
          name="image"
        />
        <br />
        <Box mt={3}>
          <Button fullWidth size="large" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
        <br />
        <Box mb={2} mt={2}>
          <h2>Sponsors List</h2>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={3} style={{ marginBottom: '25px' }}>
            <Card xs={3} sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://media.istockphoto.com/photos/become-a-sponsor-written-on-business-card-picture-id881120664?k=20&m=881120664&s=612x612&w=0&h=0unjH0WrQGRAFLnHzxfswg-o70xmvC-6Sxm3JEy9Mlc="
                  alt=""
                />
              </CardActionArea>
            </Card>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
                color: 'white'
              }}
            >
              <Chip
                style={{ color: 'white', fontWeight: 'bolder', fontSize: '15px' }}
                label="TITLE SPONSOR"
                component={RouterLink}
                to={`/admin/Sponserlist/${title}`}
                color="secondary"
              />
            </div>
          </Grid>
          <Grid item xs={3} style={{ marginBottom: '25px' }}>
            <Card xs={3} sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://media.istockphoto.com/photos/become-a-sponsor-written-on-business-card-picture-id881120664?k=20&m=881120664&s=612x612&w=0&h=0unjH0WrQGRAFLnHzxfswg-o70xmvC-6Sxm3JEy9Mlc="
                  alt=""
                />
              </CardActionArea>
            </Card>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
                color: 'white'
              }}
            >
              <Chip
                style={{ color: 'white', fontWeight: 'bolder', fontSize: '15px' }}
                label="CO SPONSORS"
                color="secondary"
                component={RouterLink}
                to={`/admin/Sponserlist/${Sponsor}`}
              />
            </div>
          </Grid>
          <Grid item xs={3} style={{ marginBottom: '25px' }}>
            <Card xs={3} sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://media.istockphoto.com/photos/become-a-sponsor-written-on-business-card-picture-id881120664?k=20&m=881120664&s=612x612&w=0&h=0unjH0WrQGRAFLnHzxfswg-o70xmvC-6Sxm3JEy9Mlc="
                  alt=""
                />
              </CardActionArea>
            </Card>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
                color: 'white'
              }}
            >
              <Chip
                style={{ color: 'white', fontWeight: 'bolder', fontSize: '15px' }}
                label="ASSOCIATE SPONSORS"
                component={RouterLink}
                to={`/admin/Sponserlist/${associate}`}
                color="secondary"
              />
            </div>
          </Grid>
          <Grid item xs={3} style={{ marginBottom: '25px' }}>
            <Card xs={3} sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://media.istockphoto.com/photos/become-a-sponsor-written-on-business-card-picture-id881120664?k=20&m=881120664&s=612x612&w=0&h=0unjH0WrQGRAFLnHzxfswg-o70xmvC-6Sxm3JEy9Mlc="
                  alt=""
                />
              </CardActionArea>
            </Card>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
                color: 'white'
              }}
            >
              <Chip
                style={{ color: 'white', fontWeight: 'bolder', fontSize: '15px' }}
                label="PARTNERS"
                component={RouterLink}
                to={`/admin/Sponserlist/${partner}`}
                color="secondary"
              />
            </div>
          </Grid>
        </Grid>

        <br />
      </Container>
    </div>
  );
}

export default Sponsors;
