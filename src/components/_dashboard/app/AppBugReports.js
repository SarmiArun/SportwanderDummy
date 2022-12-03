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
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
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
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 0;

export default function AppBugReports() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(marathonlist());
  }, []);

  const count = useSelector(({ marathonlist }) => marathonlist.payload);

  const total = Array.isArray(count) && count.filter((d) => d.ErodeEvent !== null);
  let money = 0;

  const _totalPayments =
    Array.isArray(total) &&
    total.map((a) => {
      let discount = 0;

      if (a.ErodeEvent.type === 'LOCAL') {
        discount = 1;
      } else if (
        a.ErodeEvent.promo_code === 'GRNCTY' ||
        a.ErodeEvent.promo_code === 'VETIAS' ||
        a.ErodeEvent.promo_code === 'KKSK' ||
        a.ErodeEvent.promo_code === 'V2CRNS' ||
        a.ErodeEvent.promo_code === 'CTRPHY' ||
        a.ErodeEvent.promo_code === '360PLAY' ||
        a.ErodeEvent.promo_code === 'PYNAGY' ||
        a.ErodeEvent.promo_code === 'EGGPRO' ||
        a.ErodeEvent.promo_code === 'SSPYSO' ||
        a.ErodeEvent.promo_code === 'CARE24' ||
        a.ErodeEvent.promo_code === 'ERODLS' ||
        a.ErodeEvent.promo_code === 'PLAYZO' ||
        a.ErodeEvent.promo_code === 'ANOOS' ||
        a.ErodeEvent.promo_code === 'NUTZ' ||
        a.ErodeEvent.promo_code === 'SRYNFM' ||
        a.ErodeEvent.promo_code === 'MKYMST' ||
        a.ErodeEvent.promo_code === 'ERO2PI'
      ) {
        discount = 0.1;
      } else if (a.ErodeEvent.promo_code === 'KNGYM') {
        discount = 0.2;
      } else if (a.ErodeEvent.promo_code === 'NUTZOFFER') {
        discount = 1;
      } else if (a.ErodeEvent.promo_code === 'CODE') {
        discount = 0;
      }

      switch (a.categories) {
        case '21.1 km':
          money += 700 - 700 * discount;
          break;
        case '10 km':
          money += 600 - 600 * discount;
          break;
        case '5 km':
          money += 500 - 500 * discount;
          break;
        default:
          money += 0;
          break;
      }
      return money;
    });
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={bugFilled} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{`₹ ${fCurrency(money)}`}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Payment
      </Typography>
    </RootStyle>
  );
}
