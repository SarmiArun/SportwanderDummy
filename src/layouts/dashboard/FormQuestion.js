import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Grid,
  Container,
  Box,
  Select,
  FormControl,
  MenuItem,
  TextField,
  Button
} from '@mui/material';
import { formquestion } from '../../redux/actions/actions';

function FormQuestion() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: '',
    formtype: 'int',
    value: '',
    qtype: 'none'
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    dispatch(formquestion(data));
  };
  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return (
    <>
      <Box
        sx={{
          '& .MuiTextField-root': { width: '40ch' }
        }}
      >
        <Container>
          <h1 style={{ marginBottom: '50px' }}>Form Questions</h1>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid xs={12} md={6} lg={6}>
                <div>
                  <h4 style={{ marginBottom: '10px' }}>Title</h4>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="title"
                    onChange={handleChange}
                  />
                </div>
              </Grid>
              <Grid xs={12} md={6} lg={6}>
                <h4 style={{ marginBottom: '10px' }}>Form Type</h4>
                <FormControl sx={{ minWidth: 350 }}>
                  <Select
                    value={data.formtype}
                    inputProps={{ 'aria-label': 'Without label' }}
                    onChange={handleChange}
                    name="formtype"
                  >
                    <MenuItem value="int">Number</MenuItem>
                    <MenuItem value="string">String</MenuItem>
                    <MenuItem value="enum">Value</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} md={6} lg={6} style={{ marginTop: '20px' }}>
                <h4 style={{ marginBottom: '10px' }}>Value</h4>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  onChange={handleChange}
                  name="value"
                />
              </Grid>
              <Grid xs={12} md={6} lg={6} style={{ marginTop: '20px' }}>
                <h4 style={{ marginBottom: '10px' }}>Question Type</h4>
                <FormControl sx={{ minWidth: 350 }}>
                  <Select
                    value={data.qtype}
                    inputProps={{ 'aria-label': 'Without label' }}
                    onChange={handleChange}
                    name="qtype"
                  >
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="default">Default</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Button style={{ marginTop: '30px', width: '10%' }} variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
}

export default FormQuestion;
