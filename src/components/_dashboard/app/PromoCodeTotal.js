import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from '@iconify/react';
import bugFilled from '@iconify/icons-ant-design/bug-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fCurrency, fShortenNumber } from '../../../utils/formatNumber';
import { marathonlist } from '../../../redux/actions/actions';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary,
  backgroundColor: theme.palette.primary.lighter
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
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 0;

export default function PromoCodeTotal() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(marathonlist());
  }, []);

  const count = useSelector(({ marathonlist }) => marathonlist.payload);

  const total =
    Array.isArray(count) &&
    count.filter(
      (d) =>
        d.ErodeEvent !== null &&
        d.ErodeEvent.promo_code_used &&
        d.ErodeEvent.promo_code === 'NUTZOFFER'
    );
  let money = 0;
  const _totalPayments =
    Array.isArray(total) &&
    total.map((a) => {
      switch (a.categories) {
        case '21.1 km':
          // money += 700 - 700 * 0.1;
          money += 700;

          break;
        case '10 km':
          // money += 600 - 600 * 0.1;
          money += 600;
          break;
        case '5 km':
          // money += 500 - 500 * 0.1;
          money += 500;
          break;
        default:
          money += 0;
          break;
      }
      return money;
    });

  console.log(total);
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={bugFilled} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{`₹ ${fCurrency(money)}`}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        NUTZOFFER coupon code
      </Typography>
    </RootStyle>
  );
}
