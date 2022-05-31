import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// material
import {
  Grid,
  Table,
  Avatar,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  TableContainer,
  Input,
  TablePagination,
  FormLabel,
  Box,
  Chip
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { mainaddbanner, mainlistbanner, maindeletebanner } from '../redux/actions/actions';
import offer from '../Images/offerbanner.jpg';
import main from '../Images/banner2.jpg';
import event from '../Images/banner3.jpg';

function Mainbanner() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [data, setData] = useState({
    banner: '',
    name: ''
  });

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setData({ ...data, [e.target.name]: e.target.files[0] });
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(data).map(([key, value]) => formData.append(key, value));
    dispatch(mainaddbanner(formData))
      .then((res) => {
        console.log('then');
      })
      .catch((err) => setError(err.response.data.data));
  };
  const banneradd = useSelector(({ mainaddbanner }) => mainaddbanner.payload);
  console.log('bannererror', banneradd);
  useEffect(() => {
    dispatch(mainlistbanner());
  }, []);

  const bannerlist = [
    {
      id: 1,
      name: 'Offer banner',
      image: offer
    },
    {
      id: 2,
      name: 'Main banner',
      image: main
    },
    {
      id: 3,
      name: 'Event banner',
      image: event
    }
  ];
  return (
    <>
      <Container>
        <h2>Main banner</h2>

        {
          //   <div>
          //   <div style={{ marginTop: '10px' }}>
          //     <TextField
          //       type="text"
          //       style={{ width: '50%' }}
          //       onChange={handleChange}
          //       name="name"
          //       required
          //     />
          //   </div>
          // </div>
          // <h4 style={{ marginTop: '20px' }}>Banner Image</h4>
          // <div style={{ marginTop: '10px' }}>
          //   <input type="file" onChange={imageChange} name="banner" required />
          // </div>
          // <span style={{ color: 'red', marginTop: '10px' }}> {error}</span>
          // <Button
          //   color="primary"
          //   variant="contained"
          //   style={{ marginTop: '20px' }}
          //   onClick={handleSubmit}
          // >
          //   Add Banner
          // </Button>
        }
        <br />

        <Box>
          <h2>Banner List</h2>
        </Box>
        <br />
        <Grid container spacing={2}>
          {Array.isArray(bannerlist)
            ? bannerlist.map((L) => (
                <Grid item xs={4} style={{ marginBottom: '25px' }}>
                  <Card xs={4} sx={{ maxWidth: 380 }}>
                    <CardActionArea component={RouterLink} to={`/admin/Catbanner/${L.id}`}>
                      <CardMedia component="img" height="240" image={L.image} alt={L.name} />
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
                      component={RouterLink}
                      to={`/admin/Catbanner/${L.id}`}
                      label="View"
                      color="secondary"
                    />
                  </div>
                </Grid>
              ))
            : false}
        </Grid>
      </Container>
    </>
  );
}
export default Mainbanner;
