import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container, Box, Typography } from '@mui/material';
import DashboardCountComponent from '../../components/_dashboard/app/DashboardCountComponent';
import { dashboardData } from '../../redux/actions/actions';

function NewDashboard() {
  const countdata = useDispatch();
  useEffect(() => {
    countdata(dashboardData());
  }, []);

  const data = useSelector(({ dashboardcount }) => dashboardcount.payload);

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCountComponent count={data?.total_events} title="Total Events" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCountComponent count={data?.live_events} title="Lived Events" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCountComponent count={data?.notLiveEvents} title="Not Lived Events" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCountComponent count="100" title="Total Users" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCountComponent count="100" title="Dummy" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCountComponent count="100" title="Dummy" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default NewDashboard;
