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
  Box,
  Chip
} from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { cataddbanner, catlistbanner, catdeletebanner } from '../redux/actions/actions';

function Catbanner() {
  const { id } = useParams();
  const catid = id;
  const dispatch = useDispatch();
  const [data, setData] = useState({
    banner: '',
    categoryId: id
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
    dispatch(cataddbanner(formData));
  };

  useEffect(() => {
    dispatch(catlistbanner({ id: catid }));
  }, []);

  const handleDelete = (i, L) => {
    dispatch(catdeletebanner({ id: L.id, categoryId: Number(catid) }));
    console.log(i, L);
  };

  return (
    <>
      <Container>
        <h2>Category banner</h2>
        <br />
        <Box>
          <h2>Add Banner</h2>
        </Box>

        <br />
        <h4>Banner Image</h4>
        <br />
        <div>
          <input type="file" onChange={imageChange} name="banner" />
        </div>
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
          {Array.isArray(bannerlist) ? (
            bannerlist.map((L) => (
              <Grid item xs={4} style={{ marginBottom: '25px' }}>
                <Card xs={4} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia component="img" height="240" image={L.banner} alt={L.name} />
                    <CardContent>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography gutterBottom variant="h6" component="div">
                          <Chip onClick={(e) => handleDelete(e, L)} label="Delete" color="error" />
                        </Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            <h2>No Banner Found!</h2>
          )}
        </Grid>
      </Container>
    </>
  );
}
export default Catbanner;
