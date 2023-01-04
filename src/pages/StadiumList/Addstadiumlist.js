import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// material
import { Button, Container, Typography, Stack, Grid, TextField, Box, Modal } from '@mui/material';

import { MotionContainer, varBounceIn } from '../../components/animate';
// components
import Page from '../../components/Page';
import flash from '../../Images/flash.jpg';
import { addstadium } from '../../redux/actions/actions';

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

  return (
    <Page title="Add Stadium">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4" pl={2} gutterBottom>
            Add Stadium
          </Typography>
        </Stack>
        <Grid container mb={4}>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField label="Image Link" fullWidth />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pr={2} pl={2} pt={2}>
            <TextField label="Stadium Name" fullWidth />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pr={2} pl={2} pt={2}>
            <TextField label="Address" fullWidth />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12} pl={2} pr={2} pt={2}>
            <TextField label="City" fullWidth />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            style={{ textTransform: 'uppercase', boxShadow: 'none' }}
            size="large"
            onClick={handleOpen}
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
