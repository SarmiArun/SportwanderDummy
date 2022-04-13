import React, { useState, useEffect } from 'react';
import {
  Card,
  Grid,
  Table,
  Avatar,
  Button,
  Box,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  TableContainer,
  Input,
  TablePagination
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik, Form, FormikProvider } from 'formik';

function Moderators() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <h1>Moderators</h1>
        <br />
        <h2>Add </h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField
              autoComplete="location"
              type="email"
              onChange={handleChange}
              style={{ width: '100%', marginRight: '10px' }}
              label="Enter Email"
              name="link"
            />
          </Box>
          <br />
          <TextField
            autoComplete="location"
            type="password"
            onChange={handleChange}
            style={{ width: '100%', marginRight: '10px' }}
            label="Enter Password"
            name="link"
          />
          <br />
          <Box mt={4}>
            <Button fullWidth size="large" type="submi t" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
        <br />
      </Container>
    </div>
  );
}

export default Moderators;
