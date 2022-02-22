import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

/**
 * @name Img
 * @param {*} alt
 * @param {*} error
 * @param {*} height
 * @param {*} width
 * @param {*} src
 * @returns
 */

function Img(props) {
  return (
    <img
      alt={props.alt}
      onError={(e) => (e.currentTarget.src = props.error)}
      height={props.height}
      width={props.width}
      onLoad={(e) => {
        if (e.currentTarget.src === `${window.location.origin}/static/mock-images/loading.gif`) {
          e.currentTarget.src = props.src;
        }
      }}
      src="/static/mock-images/loading.gif"
    />
  );
}
Img.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  error: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};
Img.defaultProps = {
  src: '',
  alt: 'Loading Failed',
  error: '/static/mock-images/NotFound.gif',
  height: 200,
  width: 200
};

/**
 * @name Row
 * @param {*} style
 * @param {*} children
 * @param {*} spacing
 * @returns
 */

function Row(props) {
  return (
    <Grid container spacing={props.spacing} style={props.style}>
      {props.children}
    </Grid>
  );
}
Row.propTypes = {
  style: PropTypes.object,
  children: PropTypes.func,
  spacing: PropTypes.number
};
Row.defaultProps = {
  style: {},
  spacing: 2
};

/**
 * @name Col
 * @param {*} style
 * @param {*} xs
 * @param {*} children
 * @returns
 */
function Col(props) {
  return (
    <Grid item xs={props.xs} style={props.style}>
      {props.children}
    </Grid>
  );
}
Col.propTypes = {
  style: PropTypes.object,
  children: PropTypes.func,
  xs: PropTypes.number
};
Col.defaultProps = {
  style: {},
  xs: 6
};

export { Img, Row, Col };
