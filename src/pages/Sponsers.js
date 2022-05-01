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
import { useDispatch, useSelector } from 'react-redux';
import { sponseradd, sponserlist } from '../redux/actions/actions';

function Sponsers() {
  const [data, setData] = useState({
    name: '',
    image: ''
  });
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(sponseradd(data));
  };

  const sponserlist = useSelector(({ sponserlist }) => sponserlist.payload);
  console.log(sponserlist);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Container>
        <h1>Sponsers</h1>
        <br />
        <h2>Add </h2>

        <h4>Sponser Name</h4>
        <br />
        <TextField
          autoComplete="location"
          type="text"
          style={{ width: '100%', marginRight: '10px' }}
          label="Enter Name"
          onChange={handleChange}
          name="name"
        />
        <br />
        <h4>Sponser Image</h4>
        <br />
        <TextField
          autoComplete="location"
          type="text"
          style={{ width: '100%', marginRight: '10px' }}
          label="Enter Url"
          onChange={handleChange}
          name="image"
        />
        <br />
        <Box mt={2}>
          <Button fullWidth size="large" onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Box>
        <br />
        <h2>List </h2>
        <br />
      </Container>
    </div>
  );
}

export default Sponsers;
