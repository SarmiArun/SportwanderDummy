import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container, Box, Typography } from '@mui/material';
import outlineStadium from '@iconify/icons-ic/outline-stadium';
import offline from '@iconify/icons-mdi/download';
import online from '@iconify/icons-mdi/cloud-outline';
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
            <DashboardCountComponent count={0} title="Total Stadiums" icon={outlineStadium} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCountComponent count={0} title="Offline Stadiums" icon={offline} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCountComponent count={0} title="Online Stadiums" icon={online} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default NewDashboard;
