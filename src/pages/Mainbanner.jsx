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

function Mainbanner() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [data, setData] = useState({
    banner: '',
    name: ''
  });
  const bannerlist = useSelector(({ mainlistbanner }) => mainlistbanner.payload);
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
  const banneradd = useSelector((mainaddbanner) => mainaddbanner.payload);
  console.log('bannererror', banneradd);
  useEffect(() => {
    dispatch(mainlistbanner());
  }, []);

  return (
    <>
      <Container>
        <h2>Main banner</h2>
        <br />
        <Box>
          <h2>Add Banner</h2>
        </Box>
        <div>
          <h4>Banner Name</h4>
          <br />
          <div>
            <TextField
              type="text"
              style={{ width: '50%' }}
              onChange={handleChange}
              name="name"
              required
            />
          </div>
        </div>
        <br />
        <h4>Banner Image</h4>
        <br />
        <div>
          <input type="file" onChange={imageChange} name="banner" required />
        </div>
        <br />
        <span style={{ color: 'red' }}> {error}</span>
        <br />
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Add Banner
        </Button>
        <br />

        <Box>
          <h2>Banner List</h2>
        </Box>
        <br />
        <Grid container spacing={2}>
          {Array.isArray(bannerlist)
            ? bannerlist.map((L) => (
                <Grid item xs={4} style={{ marginBottom: '25px' }}>
                  <Card xs={4} sx={{ maxWidth: 345 }}>
                    <CardActionArea component={RouterLink} to={`/admin/Catbanner/${L.id}`}>
                      <CardMedia component="img" height="240" image={L.banner} alt={L.name} />
                      <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography gutterBottom variant="h6" component="div">
                            <span style={{ textTransform: 'capitalize' }}> {L.name} </span>
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            style={{ zIndex: '1' }}
                            component="div"
                          >
                            <Chip onClick={() => console.log('test')} label="View" color="error" />
                          </Typography>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))
            : false}
        </Grid>
      </Container>
    </>
  );
}
export default Mainbanner;
