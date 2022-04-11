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
import { privacypolicyadd, privacypolicylist } from '../redux/actions/actions';

function Privacypolicy() {
  const [link, setLink] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(privacypolicylist());
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(privacypolicyadd({ url: link }));
  };

  const privacylist = useSelector(({ privacypolicylist }) => privacypolicylist.payload);
  console.log(privacylist);

  return (
    <div>
      <Container>
        <h1>Privacy Policy</h1>
        <br />
        <h2>Add </h2>
        <br />
        <TextField
          autoComplete="location"
          type="text"
          style={{ width: '100%', marginRight: '10px' }}
          label="Enter Url"
          onChange={(e) => setLink(e.target.value)}
          name="link"
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

        {Array.isArray(privacylist)
          ? privacylist?.map((privacy) => <h4>{privacy?.pp_url} </h4>)
          : false}
      </Container>
    </div>
  );
}

export default Privacypolicy;
