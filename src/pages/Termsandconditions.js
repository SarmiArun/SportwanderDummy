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
import { termsadd, termslist } from '../redux/actions/actions';

function Termsandconditions() {
  const [link, setLink] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(termsadd({ url: link }));
  };
  const termschange = useSelector(({ termsadd }) => termsadd.payload);
  useEffect(() => {
    dispatch(termslist());
  }, [termschange]);
  const termsList = useSelector(({ termslist }) => termslist.payload);

  return (
    <div>
      <Container>
        <h1>Terms and Conditions</h1>
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
        {Array.isArray(termsList) ? termsList.map((terms) => <h4> {terms?.pp_url}</h4>) : false}
      </Container>
    </div>
  );
}

export default Termsandconditions;
