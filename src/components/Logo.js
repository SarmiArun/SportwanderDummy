import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import { Row } from './CustomComponent';
import image2 from '../Images/logo.svg';
import image from '../Images/logoTitle.svg';
// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <>
      <Box component="img" src={image2} sx={{ width: 40, px: 1, height: 40, ...sx }} />
      <Box component="img" src={image} sx={{ width: '190px', ...sx }} />
    </>
  );
}
