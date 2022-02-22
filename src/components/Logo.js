import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import { Row } from './CustomComponent';
// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <>
      {' '}
      <Box component="img" src="/static/logo.svg" sx={{ width: 40, px: 1, height: 40, ...sx }} />
      <Box component="img" src="/static/logoTitle.svg" sx={{ width: '190px', ...sx }} />
    </>
  );
}
