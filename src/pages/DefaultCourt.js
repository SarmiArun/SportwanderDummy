import React, { useState } from 'react';
import { useLocation, Link, useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Stack,
  Grid,
  TextField,
  Box,
  Modal,
  Chip
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { defaulttime } from '../redux/actions/actions';

function DefaultCourt(props) {
  const [values, setValues] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    time: '00:00 - 01:00',
    price: '',
    status: ''
  });
  const [data1, setData1] = React.useState({
    time: '01:00 - 02:00',
    price: '',
    status: ''
  });
  const [data2, setData2] = React.useState({
    time: '02:00 - 03:00',
    price: '',
    status: ''
  });
  const [data3, setData3] = React.useState({
    time3: '03:00 - 04:00',
    price3: '',
    status3: ''
  });
  const [data4, setData4] = React.useState({
    time: '04:00 - 05:00',
    price: '',
    status: ''
  });
  const [data5, setData5] = React.useState({
    time: '05:00 - 06:00',
    price: '',
    status: ''
  });
  const [data6, setData6] = React.useState({
    time: '06:00 - 07:00',
    price: '',
    status: ''
  });
  const [data7, setData7] = React.useState({
    time: '07:00 - 08:00',
    price: '',
    status: ''
  });
  const [data8, setData8] = React.useState({
    time: '08:00 - 09:00',
    price: '',
    status: ''
  });
  const [data9, setData9] = React.useState({
    time: '09:00 - 10:00',
    price: '',
    status: ''
  });
  const [data10, setData10] = React.useState({
    time: '10:00 - 11:00',
    price: '',
    status: ''
  });
  const [data11, setData11] = React.useState({
    time: '11:00 - 12:00',
    price: '',
    status: ''
  });
  const [data12, setData12] = React.useState({
    time: '12:00 - 13:00',
    price: '',
    status: ''
  });
  const [data13, setData13] = React.useState({
    time: '13:00 - 14:00',
    price: '',
    status: ''
  });
  const [data14, setData14] = React.useState({
    time: '14:00 - 15:00',
    price: '',
    status: ''
  });
  const [data15, setData15] = React.useState({
    time: '15:00 -  16:00',
    price: '',
    status: ''
  });
  const [data16, setData16] = React.useState({
    time: '16:00 - 17:00',
    price: '',
    status: ''
  });
  const [data17, setData17] = React.useState({
    time: '17:00 - 18:00',
    price: '',
    status: ''
  });
  const [data18, setData18] = React.useState({
    time: '18:00 - 19:00',
    price: '',
    status: ''
  });
  const [data19, setData19] = React.useState({
    time: '19:00 - 20:00',
    price: '',
    status: ''
  });
  const [data20, setData20] = React.useState({
    time: '20:00  - 21:00',
    price: '',
    status: ''
  });
  const [data21, setData21] = React.useState({
    time: '21:00  - 22:00',
    price: '',
    status: ''
  });
  const [data22, setData22] = React.useState({
    time: '22:00 - 23:00',
    price: '',
    status: ''
  });
  const [data23, setData23] = React.useState({
    time: '23:00 - 00:00',
    price: '',
    status: ''
  });
  const handlecardchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handlecardchange1 = (e) => {
    setData1({ ...data1, [e.target.name]: e.target.value });
  };
  const handlecardchange2 = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };
  const handlecardchange3 = (e) => {
    setData3({ ...data3, [e.target.name]: e.target.value });
  };
  const handlecardchange4 = (e) => {
    setData4({ ...data4, [e.target.name]: e.target.value });
  };
  const handlecardchange5 = (e) => {
    setData5({ ...data5, [e.target.name]: e.target.value });
  };
  const handlecardchange6 = (e) => {
    setData6({ ...data6, [e.target.name]: e.target.value });
  };
  const handlecardchange7 = (e) => {
    setData7({ ...data7, [e.target.name]: e.target.value });
  };
  const handlecardchange8 = (e) => {
    setData8({ ...data8, [e.target.name]: e.target.value });
  };
  const handlecardchange9 = (e) => {
    setData9({ ...data9, [e.target.name]: e.target.value });
  };
  const handlecardchange10 = (e) => {
    setData10({ ...data10, [e.target.name]: e.target.value });
  };
  const handlecardchange11 = (e) => {
    setData11({ ...data11, [e.target.name]: e.target.value });
  };
  const handlecardchange12 = (e) => {
    setData12({ ...data12, [e.target.name]: e.target.value });
  };
  const handlecardchange13 = (e) => {
    setData13({ ...data13, [e.target.name]: e.target.value });
  };
  const handlecardchange14 = (e) => {
    setData14({ ...data14, [e.target.name]: e.target.value });
  };
  const handlecardchange15 = (e) => {
    setData15({ ...data15, [e.target.name]: e.target.value });
  };
  const handlecardchange16 = (e) => {
    setData16({ ...data16, [e.target.name]: e.target.value });
  };
  const handlecardchange17 = (e) => {
    setData17({ ...data17, [e.target.name]: e.target.value });
  };
  const handlecardchange18 = (e) => {
    setData18({ ...data18, [e.target.name]: e.target.value });
  };
  const handlecardchange19 = (e) => {
    setData19({ ...data19, [e.target.name]: e.target.value });
  };
  const handlecardchange20 = (e) => {
    setData21({ ...data20, [e.target.name]: e.target.value });
  };
  const handlecardchange21 = (e) => {
    setData21({ ...data21, [e.target.name]: e.target.value });
  };
  const handlecardchange22 = (e) => {
    setData22({ ...data22, [e.target.name]: e.target.value });
  };
  const handlecardchange23 = (e) => {
    setData23({ ...data23, [e.target.name]: e.target.value });
  };
  const { stadiumId, courtId } = location.state;
  console.log(stadiumId);
  console.log(courtId);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(timeFrom1, timeTo1, price, status);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ data });
  };
  const handleallsubmit = (e) => {
    e.preventDefault();
    dispatch(defaulttime({ time: values, stadiumId: String(stadiumId), courtId: String(courtId) }));
    console.log([
      (values[0] = data),
      (values[1] = data1),
      (values[2] = data2),
      (values[3] = data3),
      (values[4] = data4),
      (values[5] = data5),
      (values[6] = data6),
      (values[7] = data7),
      (values[8] = data8),
      (values[9] = data9),
      (values[10] = data10),
      (values[11] = data11),
      (values[12] = data12),
      (values[13] = data13),
      (values[14] = data14),
      (values[15] = data15),
      (values[16] = data16),
      (values[17] = data17),
      (values[18] = data18),
      (values[19] = data19),
      (values[20] = data20),
      (values[21] = data21),
      (values[22] = data22),
      (values[23] = data23)
    ]);
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log({ data1 });
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log({ data2 });
  };
  const handleSubmit3 = (e) => {
    e.preventDefault();
    console.log({ data3 });
  };
  const handleSubmit4 = (e) => {
    e.preventDefault();
    console.log({ data4 });
  };
  const handleSubmit5 = (e) => {
    e.preventDefault();
    console.log({ data5 });
  };
  const handleSubmit6 = (e) => {
    e.preventDefault();
    console.log({ data6 });
  };
  const handleSubmit7 = (e) => {
    e.preventDefault();
    console.log({ data7 });
  };
  const handleSubmit8 = (e) => {
    e.preventDefault();
    console.log({ data8 });
  };
  const handleSubmit9 = (e) => {
    e.preventDefault();
    console.log({ data9 });
  };
  const handleSubmit10 = (e) => {
    e.preventDefault();
    console.log({ data10 });
  };
  const handleSubmit11 = (e) => {
    e.preventDefault();
    console.log({ data11 });
  };
  const handleSubmit12 = (e) => {
    e.preventDefault();
    console.log({ data12 });
  };
  const handleSubmit13 = (e) => {
    e.preventDefault();
    console.log({ data13 });
  };
  const handleSubmit14 = (e) => {
    e.preventDefault();
    console.log({ data14 });
  };
  const handleSubmit15 = (e) => {
    e.preventDefault();
    console.log({ data15 });
  };
  const handleSubmit16 = (e) => {
    e.preventDefault();
    console.log({ data16 });
  };
  const handleSubmit17 = (e) => {
    e.preventDefault();
    console.log({ data17 });
  };
  const handleSubmit18 = (e) => {
    e.preventDefault();
    console.log({ data18 });
  };
  const handleSubmit19 = (e) => {
    e.preventDefault();
    console.log({ data19 });
  };
  const handleSubmit20 = (e) => {
    e.preventDefault();
    console.log({ data20 });
  };
  const handleSubmit21 = (e) => {
    e.preventDefault();
    console.log({ data21 });
  };
  const handleSubmit22 = (e) => {
    e.preventDefault();
    console.log({ data22 });
  };
  const handleSubmit23 = (e) => {
    e.preventDefault();
    console.log({ data23 });
  };
  const [status, setStatus] = React.useState('');
  // const handleSubmit = (e)
  const handleChangee = (event) => {
    setStatus(event.target.value);
    console.log(event.target.value);
  };
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4" pl={2} gutterBottom>
          Add Default Court time
        </Typography>
      </Stack>
      <Grid container mb={4}>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <FormLabel>From</FormLabel>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <FormLabel>To</FormLabel>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <FormLabel>Price</FormLabel>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormLabel>Status</FormLabel>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormLabel> </FormLabel>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="00.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="01.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="01.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="02.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange1} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange1}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit1}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="02.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="03.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange2} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange2}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit2}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="03.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="04.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange3} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange3}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit3}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="04.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="05.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange4} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange4}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit4}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="05.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="06.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange5} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange4}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit5}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="06.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="07.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange6} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange6}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit6}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="07.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="08.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange7} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange7}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit7}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="08.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="09.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange8} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange8}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit8}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="09.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="10.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange9} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange9}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit9}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="10.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="11.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange10} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange10}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit10}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="11.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="12.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange11} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange11}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit11}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="12.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="13.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange12} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange12}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit12}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="13.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="14.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange13} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange13}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit13}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="14.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="15.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange14} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange14}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit14}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="15.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="16.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange15} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange15}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit15}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="16.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="17.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange16} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange16}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit16}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="17.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="18.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange17} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange17}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit17}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="18.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="19.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange18} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange18}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit18}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="19.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="20.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange19} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange19}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit19}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="20.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="21.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange20} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange20}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit20}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="21.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="22.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange21} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange21}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit21}>Add</Button>
        </Grid>{' '}
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="22.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="23.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange22} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange22}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit22}>Add</Button>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="23.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pr={3} pl={3} pt={2}>
          <div>
            <Chip
              style={{
                color: 'black',
                backgroundColor: '#f4f6f8',
                borderRadius: '8px',
                marginRight: '20px',
                textTransform: 'capitalize',
                fontSize: '16px',
                lineHeight: '28px',
                padding: '30px 20px'
              }}
              label="00.00"
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <TextField name="price" onChange={handlecardchange23} label="₹ Price" />
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={3} pr={3} pt={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="status"
              label="Status"
              onChange={handlecardchange23}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="close">Close</MenuItem>
              <MenuItem value="leave">Leave</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={2.1} md={6} xs={12} pl={2} pr={2} pt={2}>
          <Button onClick={handleSubmit23}>Add</Button>
        </Grid>
      </Grid>
      <Button
        className="pr-2"
        variant="contained"
        style={{ textTransform: 'uppercase', boxShadow: 'none', marginRight: '10px' }}
        size="large"
        onClick={handleallsubmit}
        type="submit"
      >
        Submit
      </Button>
    </Container>
  );
}

export default DefaultCourt;
