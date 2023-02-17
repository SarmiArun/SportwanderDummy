import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import moment from 'moment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TagsInput } from 'react-tag-input-component';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, Container, Typography, Stack, Grid, TextField, Box, Modal } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { MotionContainer, varBounceIn } from '../../components/animate';
// components
import Page from '../../components/Page';
import flash from '../../Images/flash.jpg';
import { addstadium } from '../../redux/actions/actions';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: ['poppins'].join(',')
  }
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
};
export default function AddStadiumlist() {
  const img = [];
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState('no');
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [stadium, setStadium] = React.useState({
    name: '',
    amenities: '',
    street: '',
    landmark: '',
    district: '',
    location: '',
    state: '',
    country: '',
    pincode: '',
    phone: '',
    gst: '',
    stadium: '',
    about: ''
  });
  const dispatch = useDispatch();
  const [timeFrom, setTimeFrom] = useState('');
  const [image, setImage] = useState([]);
  const [sports, setSports] = useState([]);
  const [timeTo, setTimeTo] = useState('');
  const [book, setBook] = useState('');
  const handlechange = (e) => {
    setStadium({ ...stadium, [e.target.name]: e.target.value });
  };

  // const handleImage = (event) => {
  //   img.push(image);
  //   setImage(event.target.value);
  //   console.log(img[0]);
  // };
  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setImage({ [e.target.name]: e.target.files[0] });
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = moment(timeFrom, 'HH:mm').format('h:mm a');
    const to = moment(timeTo, 'HH:mm').format('h:mm a');
    const time = `${from}-${to}`;

    dispatch(
      addstadium({
        ...stadium,
        availability: time,
        bookable: book,
        sports_available: sports,
        image
      })
    );
  };

  return (
    <Page title="Add Stadium">
      <Container>
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4" pl={2} gutterBottom>
            Add Stadium
          </Typography>
        </Stack>
        <Grid container mb={4}>
          <Grid item sm={12} lg={6} md={6} xs={12} pr={2} pl={2} pt={2}>
            <TextField
              name="name"
              label="Stadium Name"
              onChange={handlechange}
              inputProps={{ minLength: 3 }}
              fullWidth
            />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12} pr={2} pl={2} pt={2}>
            <TextField
              name="street"
              label="Street Name"
              onChange={handlechange}
              inputProps={{ minLength: 3 }}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField
              name="district"
              label="District"
              onChange={handlechange}
              inputProps={{ minLength: 3 }}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField
              name="state"
              label="State"
              onChange={handlechange}
              inputProps={{ minLength: 3 }}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField
              name="country"
              label="Country"
              onChange={handlechange}
              inputProps={{ minLength: 3 }}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField
              name="pincode"
              label="Pincode"
              onChange={handlechange}
              inputProps={{ maxLength: 6 }}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pr={2} pl={2} pt={2}>
            <TextField
              name="landmark"
              label="Land Mark"
              onChange={handlechange}
              inputProps={{ minLength: 3 }}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pr={2} pl={2} pt={2}>
            <TextField
              name="location"
              label="Location"
              inputProps={{ minLength: 3 }}
              onChange={handlechange}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField
              name="phone"
              label="Phone Number"
              onChange={handlechange}
              inputProps={{ maxLength: 10 }}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField
              name="gst"
              label="GST Number"
              onChange={handlechange}
              inputProps={{ maxLength: 15 }}
              fullWidth
            />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Bookable</FormLabel>

              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="book"
                onChange={(e) => setBook(e.target.value)}
                row
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <div style={{ display: 'flex' }}>
              {' '}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '20px'
                }}
              >
                {' '}
                <FormLabel pb={2}>Availability Time</FormLabel>
              </div>
              <div>
                <FormLabel pb={2}>From</FormLabel>
                <br />
                <input
                  placeholder="From"
                  type="time"
                  name="timeFrom"
                  onChange={(e) => setTimeFrom(e.target.value)}
                  style={{
                    width: '130px',
                    height: '50px',
                    border: '1px solid #dce0e4',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div>
                {' '}
                <FormLabel pb={2}>To</FormLabel>
                <br />
                <input
                  type="time"
                  name="timeTo"
                  placeholder="To"
                  onChange={(e) => setTimeTo(e.target.value)}
                  style={{
                    width: '130px',
                    height: '50px',
                    border: '1px solid #dce0e4',
                    borderRadius: '8px',
                    marginLeft: '20px'
                  }}
                />
              </div>
            </div>
          </Grid>
          <Grid item sm={12} lg={12} md={12} xs={12} pl={2} pr={2} pt={2}>
            <TagsInput
              value={image}
              onChange={setImage}
              name="images"
              placeHolder="Enter Image Link"
            />
            <em>press enter to add new image link</em>
          </Grid>
          <Grid item sm={12} lg={12} md={12} xs={12} pl={2} pr={2} pt={2}>
            <TextField
              name="about"
              label="About"
              onChange={handlechange}
              inputProps={{ minLength: 3 }}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={12} md={12} xs={12} pl={2} pr={2} pt={2}>
            <TextField
              name="amenities"
              label="Amenities"
              onChange={handlechange}
              inputProps={{ minLength: 3 }}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} lg={12} md={12} xs={12} pl={2} pr={2} pt={2}>
            <TagsInput
              value={sports}
              onChange={setSports}
              name="sports_available"
              placeHolder="Enter Sports"
            />
            <em>press enter to add new sports</em>
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            style={{ textTransform: 'uppercase', boxShadow: 'none' }}
            size="large"
            onClick={handleSubmit}
          >
            submit
          </Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <MotionContainer initial="initial" open>
              <motion.div variants={varBounceIn}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Box component="img" src={flash} sx={{ height: 260 }} />
                </div>
              </motion.div>
              <Typography variant="h4" textAlign="center" mt="20px">
                Hooray! Stadium Added 🥳
              </Typography>
            </MotionContainer>
          </Box>
        </Modal>
      </Container>
    </Page>
  );
}
