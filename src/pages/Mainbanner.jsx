import React, { useState, useEffect } from 'react';
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
  TablePagination,
  Box
} from '@mui/material';
import { mainaddbanner, mainlistbanner, maindeletebanner } from '../redux/actions/actions';

function Mainbanner() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    banner: '',
    name: ''
  });
  const bannerlist = useSelector(({ mainlistbanner }) => mainlistbanner.payload);
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
    dispatch(mainaddbanner(formData));
  };
  useEffect(() => {
    dispatch(mainlistbanner());
  }, []);

  return (
    <>
      <Container>
        <h2>Main banner</h2>
        <Box mt={2}>
          <h3>Add</h3>
        </Box>
        <Input type="file" accept="image/*" onChange={imageChange} name="banner" /> <br />
        Name
        <Input type="text" label="Name" onChange={handleChange} name="name" />
        <br />
        <Button color="primary" onClick={handleSubmit} variant="contained">
          Submit
        </Button>
        <br />
        <Box mt={2}>
          <h3>Banner list</h3>
          {Array.isArray(bannerlist) &&
            bannerlist.map((list) => (
              <>
                <img src={list.banner} alt={list.name} />
                <button onClick={dispatch(maindeletebanner({ id: list.id }))}>Delete </button>
              </>
            ))}
        </Box>
      </Container>
    </>
  );
}
export default Mainbanner;
