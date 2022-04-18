import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// material
import {
  Card,
  Table,
  Avatar,
  Button,
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
import { cataddbanner } from '../redux/actions/actions';

function Catbanner() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    banner: '',
    categoryId: ''
  });
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setData({ ...data, [e.target.name]: e.target.files[0] });
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(data).map(([key, value]) => formData.append(key, value));
    dispatch(cataddbanner(formData));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <h2>Category banner</h2>
          <h4>Add</h4>
          <Input type="file" accept="image/*" onChange={imageChange} name="banner" /> <br />
          Category Id
          <Input type="text" label="CategoryId" onChange={handleChange} name="categoryId" />
          <br />
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </Container>
      </form>
    </>
  );
}
export default Catbanner;
