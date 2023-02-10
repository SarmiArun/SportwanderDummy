import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState('no');
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [stadium, setStadium] = React.useState({
    name: '',
    street: '',
    district: '',
    state: '',
    country: '',
    pincode: '',
    phone: '',
    gst: '',
    stadium: ''
  });
  const dispatch = useDispatch();
  const [timeFrom, setTimeFrom] = React.useState(null);
  const [timeTo, setTimeTo] = React.useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handlechange = (event) => {
    setStadium(event.target.value);
  };
  useEffect(() => {
    dispatch(addstadium());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(stadium).map(([key, value]) => formData.append(key, value));
    dispatch(addstadium(formData));
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setStadium({ ...stadium, [e.target.name]: e.target.files[0] });
    }
  };
  return (
    <Page title="Add Stadium">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4" pl={2} gutterBottom>
            Add Stadium
          </Typography>
        </Stack>
        <Grid container mb={4}>
          <Grid item sm={12} lg={6} md={6} xs={12} pr={2} pl={2} pt={2}>
            <TextField name="name" label="Stadium Name" onChange={handlechange} fullWidth />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pr={2} pl={2} pt={2}>
            <TextField name="street" label="Street Name" onChange={handlechange} fullWidth />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField name="district" label="District" onChange={handlechange} fullWidth />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField name="state" label="State" onChange={handlechange} fullWidth />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField name="country" label="Country" onChange={handlechange} fullWidth />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField name="pincode" label="Pincode" onChange={handlechange} fullWidth />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField name="phone" label="Phone Number" onChange={handlechange} fullWidth />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField name="gst" label="GST Number" onChange={handlechange} fullWidth />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Bookable</FormLabel>

              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                row
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
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
            <div>
              <input
                type="file"
                onChange={imageChange}
                name="stadium"
                style={{ fontSize: '22px', color: '#637381' }}
              />
            </div>
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
