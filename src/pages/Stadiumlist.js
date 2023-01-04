import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { saveAs } from 'file-saver';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

import Loader from '../components/Loader';

import { stadiumlist, stadiumupdate } from '../redux/actions/actions';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
};

export default function Bookedstadiumlist() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(stadiumlist());
  }, []);
  let list = [];
  list = useSelector(({ stadiumlist }) => stadiumlist.payload) ?? [];
  console.log(list);

  return list ? (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ marginBottom: '20px' }}>Stadium List</h1>
        <Link to="/admin/addstadium" style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{ height: '3rem', boxShadow: '0' }}>
            Add Stadium
          </Button>
        </Link>
      </div>

      <Card style={{ padding: '40px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: '8%', textAlign: 'center' }} colSpan={1}>
                  S No
                </TableCell>
                <TableCell style={{ textAlign: 'center', width: '20%' }}> Images </TableCell>
                <TableCell style={{ textAlign: 'center', width: '20%' }}> Stadium Name</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Location</TableCell>
                <TableCell style={{ textAlign: 'center', width: '16%' }}>Uploaded By</TableCell>
                <TableCell style={{ textAlign: 'center', width: '16%' }}>Status</TableCell>
                <TableCell style={{ textAlign: 'center', width: '16%' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.length > 0 ? (
                list.map((v, i) => (
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell scope="row" style={{ textAlign: 'center' }}>
                      {i + 1}
                    </TableCell>
                    <TableCell scope="row" style={{ textAlign: 'center' }}>
                      <Button
                        padding={1}
                        onClick={handleOpen}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'transparent'
                          }
                        }}
                      >
                        <img
                          src="https://images.livemint.com/img/2022/12/06/1600x900/Stadium_974_1670308763958_1670308770302_1670308770302.jpg"
                          alt="stadium-1"
                        />
                      </Button>

                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={modalStyle}>
                          <img
                            src="https://images.livemint.com/img/2022/12/06/1600x900/Stadium_974_1670308763958_1670308770302_1670308770302.jpg"
                            alt="fullscreen-view"
                            height="100%"
                          />
                        </Box>
                      </Modal>
                    </TableCell>
                    <TableCell style={{ textAlign: 'center', textTransform: 'capitalize' }}>
                      {v.name}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center', textTransform: 'capitalize' }}>
                      {v.location}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {v.owner ? 'Owner' : 'Admin'}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      <Chip
                        label={v.active ? 'Active' : 'Inactive'}
                        style={{
                          backgroundColor: v.active ? '#376F37' : '#FF5252',
                          color: 'white'
                        }}
                      />
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex' }}>
                        <Chip
                          label="View Details"
                          sx={{ backgroundColor: '#006EC6', color: 'white', marginRight: '5px' }}
                        />
                        <Chip
                          label="Inactive"
                          sx={{ backgroundColor: '#FF5252', color: 'white', marginRight: '5px' }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    <Typography p={5}>No Data Found!</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  ) : (
    <Loader />
  );
}
