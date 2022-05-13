import React, { useState, useEffect } from 'react';
import { Button, Box, Container, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik, Form, FormikProvider } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { udpateversion, getversion } from '../redux/actions/actions';

function Version() {
  const dispatch = useDispatch();
  const [ver, setVersion] = useState('');
  const versionlist = useSelector(({ getversion }) => getversion.payload);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(udpateversion({ version: ver }));
  };
  useEffect(() => {
    dispatch(getversion());
  }, []);

  return (
    <div>
      <Container>
        <h1>Version</h1>
        <br />
        <Box mt={2}>
          <TextField
            type="text"
            style={{ width: '100%', marginRight: '10px' }}
            label="Enter Version"
            onChange={(e) => setVersion(e.target.value)}
            name="version"
          />
        </Box>
        <br />
        <Box mt={2}>
          <Button fullWidth size="large" onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Box>
        <br />
        <h3>Current version </h3>
        <br />
        Version <b>{versionlist?.version}</b>
      </Container>
    </div>
  );
}

export default Version;
