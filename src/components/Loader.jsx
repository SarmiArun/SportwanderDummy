import React from 'react';
import ReactLoading from 'react-loading';
import { Container } from '@mui/material';

const Loader = () => (
  <>
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '35rem'
        }}
      >
        <ReactLoading type="spin" height="100px" color="black" />
      </div>
    </Container>
  </>
);

export default Loader;
