import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import { eventorgcount, marathonlist } from '../../../redux/actions/actions';
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 1352831;

export default function AppNewUsers() {
  const dispatch = useDispatch();
  const orgcount = useSelector(({ eventorgcount }) => eventorgcount.payload);

  useEffect(() => {
    dispatch(eventorgcount());
    dispatch(marathonlist());
  }, []);
  const paid = useSelector(({ marathonlist }) => marathonlist.payload);

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={appleFilled} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">
        {Array.isArray(paid) && paid.filter((dataa) => dataa?.ErodeEvent !== null)?.length}
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Paid Members
      </Typography>
    </RootStyle>
  );
}
