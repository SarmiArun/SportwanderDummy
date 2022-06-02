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
import { promocodeadd } from '../redux/actions/actions';

function Promocode() {
  const [promo, setPromo] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [discount, setDiscount] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(promocodeadd({ promo, expiryDate, discount }));
  };

  const privacylist = useSelector(({ promocodeadd }) => promocodeadd.payload);

  return (
    <div>
      <Container>
        <h1>Promo Code</h1>
        <br />
        <h2>Add </h2>
        <br />
        <TextField
          autoComplete="location"
          type="text"
          style={{ width: '100%', marginRight: '10px' }}
          label="Enter Promo Code"
          onChange={(e) => setPromo(e.target.value)}
          name="promo"
        />
        <br />
        <TextField
          autoComplete="location"
          type="date"
          style={{ width: '100%', marginRight: '10px', marginTop: '20px' }}
          onChange={(e) => setExpiryDate(e.target.value)}
          name="expiryDate"
        />
        <br />
        <TextField
          autoComplete="location"
          type="text"
          style={{ width: '100%', marginRight: '10px', marginTop: '20px' }}
          label="Enter Discount"
          onChange={(e) => setDiscount(e.target.value)}
          name="discount"
        />
        <br />
        <Box mt={2}>
          <Button fullWidth size="large" onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Box>
        <br />
        {
          // <h2>List </h2>
          // <br />
          // {Array.isArray(privacylist)
          //   ? privacylist?.map((privacy) => <h4>{privacy?.pp_url} </h4>)
          //   : false}
        }
      </Container>
    </div>
  );
}

export default Promocode;
