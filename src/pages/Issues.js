import React, { useState, useEffect } from 'react';
import { Button, Box, Container, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik, Form, FormikProvider } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { issueslist, updateissues } from '../redux/actions/actions';

function Issues() {
  const [ver, setVersion] = useState('');
  //   const versionlist = useSelector(({ getversion }) => getversion.payload);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateissues({ status: ver }));
  };

  //   useEffect(() => {
  //     dispatch(issueslist());
  //   }, []);
  return (
    <div>
      <Container>
        <h1>Issues</h1>
        <br />
        <h3>Issues List </h3>
        <br />
        <Box mt={2}>
          <TextField
            type="text"
            style={{ width: '100%', marginRight: '10px' }}
            label="Enter Status"
            onChange={(e) => setVersion(e.target.value)}
            name="status"
          />
        </Box>
        <Box mt={2}>
          <Button fullWidth size="large" onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Issues;
