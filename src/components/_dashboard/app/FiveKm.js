import faker from 'faker';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// material
import { Box, Grid, Card, Paper, Typography, CardHeader, CardContent } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import { marathonlist } from '../../../redux/actions/actions';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: PropTypes.object
};

function SiteItem({ site }) {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        <Typography variant="h6">{fShortenNumber(value)}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default function FiveKm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(marathonlist());
  }, []);

  const count = useSelector(({ marathonlist }) => marathonlist.payload);

  const men =
    Array.isArray(count) &&
    count.filter((d) => d.ErodeEvent !== null && d.categories === '5 km' && d.gender === 'male')
      .length;

  const women =
    Array.isArray(count) &&
    count.filter((d) => d.ErodeEvent !== null && d.categories === '5 km' && d.gender === 'female')
      .length;

  const SOCIALS = [
    {
      name: 'Men',
      value: men
      // icon: <Icon icon={facebookFill} color="#1877F2" width={32} height={32} />
    },
    {
      name: 'Women',
      value: women
      // icon: <Icon icon={googleFill} color="#DF3E30" width={32} height={32} />
    }
  ];

  return (
    <Card>
      <CardHeader title="5 Km" />
      <CardContent>
        <Grid container spacing={2}>
          {SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
