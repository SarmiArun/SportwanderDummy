import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Container, Typography, Stack, Grid, TextField, Box, Modal } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';

export default function StadiumOwner() {
  return (
    <div>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4" pl={2} gutterBottom>
            Stadium Owner
          </Typography>
        </Stack>
        <Grid container mb={4}>
          <Grid item sm={12} lg={6} md={6} xs={12} pr={2} pl={2} pt={2}>
            <TextField
              name="username"
              label="User Name"
              //  onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField
              name="email"
              label="Email Id"
              type="email"
              //   onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={5}>
            <TextField
              name="phone"
              label="Phone Number"
              inputProps={{ maxLength: 10 }}
              //   onChange={(e) => setPrice(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={5}>
            <TextField
              name="password"
              label="Password"
              //   onChange={(e) => setPrice(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={5}>
            <FormLabel>Bank Details</FormLabel>
            <TextField
              name="accno"
              label="Account Number"
              inputProps={{ minLength: 9, maxLength: 18 }}
              //   onChange={(e) => setPrice(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={5} mt={3}>
            <TextField
              name="accname"
              label="Account Name"
              inputProps={{ maxLength: 17 }}
              //   onChange={(e) => setPrice(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={5}>
            <TextField
              name="ifc"
              label="IFC Code"
              inputProps={{ maxLength: 11 }}
              //   onChange={(e) => setPrice(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            className="pr-2"
            variant="contained"
            style={{ textTransform: 'uppercase', boxShadow: 'none', marginRight: '10px' }}
            size="large"
            // onClick={handleSubmit}
          >
            submit
          </Button>
        </div>
      </Container>
    </div>
  );
}
