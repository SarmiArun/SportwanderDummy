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

function Sponsers() {
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
  const sponser = 'CO_SPONSOR';
  return (
    <div>
      <Container>
        <h1>Sponsers</h1>
        <br />
        <h2>Add </h2>
        <h4>Sponser Type</h4>
        <br />
        <FormControl fullWidth style={{ marginTop: '10px' }}>
          <InputLabel id="demo-simple-select-label">Sponser type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sponser Type"
            name="type"
            onChange={handleChange}
          >
            <MenuItem value="TITLE_SPONSOR"> TITLE_SPONSOR</MenuItem>
            <MenuItem value="ASSOCIATE_SPONSOR"> ASSOCIATE_SPONSOR</MenuItem>
            <MenuItem value="PARTNER"> PARTNER</MenuItem>
            <MenuItem value="CO_SPONSOR"> CO_SPONSOR</MenuItem>
          </Select>
        </FormControl>

        <br />
        <h4>Sponser Image</h4>
        <br />
        <TextField
          autoComplete="location"
          type="text"
          style={{ width: '100%', marginRight: '10px' }}
          label="Enter Url"
          onChange={handleChange}
          name="image"
        />
        <br />
        <Box mt={2}>
          <Button fullWidth size="large" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
        <br />
        <Box mb={2}>
          <h2>Sponser List</h2>
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
                label="TITLE_SPONSOR"
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
                label="ASSOCIATE_SPONSOR"
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
                label="PARTNER"
                component={RouterLink}
                to={`/admin/Sponserlist/${partner}`}
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
                label="CO-SPONSOR"
                color="secondary"
                component={RouterLink}
                to={`/admin/Sponserlist/${sponser}`}
              />
            </div>
          </Grid>
        </Grid>

        <br />
      </Container>
    </div>
  );
}

export default Sponsers;
