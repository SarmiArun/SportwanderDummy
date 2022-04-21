import React, { useState, useEffect } from 'react';
import { Button, Box, Container, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik, Form, FormikProvider } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { notifyadd } from '../redux/actions/actions';

function Notify() {
  const [data, setData] = useState({
    title: '',
    message: ''
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // dispatch(notifyadd(data));
  };

  return (
    <div>
      <Container>
        <h1>Notifications</h1>
        <br />
        <Box mt={2}>
          <TextField
            autoComplete="location"
            type="text"
            style={{ width: '100%', marginRight: '10px' }}
            label="Enter Title"
            onChange={handleChange}
            name="title"
          />
        </Box>
        <br />
        <TextField
          autoComplete="location"
          type="text"
          style={{ width: '100%', marginRight: '10px' }}
          label="Enter Message"
          onChange={handleChange}
          name="message"
        />

        <br />
        <Box mt={2}>
          <Button fullWidth size="large" onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Box>
        <br />
      </Container>
    </div>
  );
}

export default Notify;
