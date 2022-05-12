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
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sponserlist, sponserdelete } from '../redux/actions/actions';

function Sponserlist() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(sponserlist({ type: id }));
  }, []);
  const data = useSelector(({ sponserlist }) => sponserlist.payload);

  return (
    <div>
      <Box mb={2}>
        <h2>Sponsor List</h2>
      </Box>
      <Grid container spacing={2}>
        {Array.isArray(data) ? (
          data.map((Sponsor) => (
            <Grid item xs={3} style={{ marginBottom: '25px' }}>
              <Card xs={3} sx={{ maxWidth: 380 }}>
                <CardActionArea>
                  <CardMedia component="img" height="240" image={Sponsor.image} alt="" />
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
                  label="Delete"
                  color="primary"
                  onClick={() => dispatch(sponserdelete({ id: Sponsor.id }))}
                />
              </div>
            </Grid>
          ))
        ) : (
          <h1 style={{ marginLeft: '20%' }}>{data} </h1>
        )}
      </Grid>
    </div>
  );
}

export default Sponserlist;
