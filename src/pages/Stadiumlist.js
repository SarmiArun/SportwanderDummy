import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Box from '@mui/material/Box';
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
import { stadiumlist, stadiumupdate } from '../redux/actions/actions';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

export default function Bookedstadiumlist() {
  const verifyy = useSelector(({ stadiumupdate }) => stadiumupdate.payload);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(stadiumlist());
  }, [verifyy]);
  const list = useSelector(({ stadiumlist }) => stadiumlist.payload);
  console.log(list);

  const saveFile = (row) => {
    saveAs(row.offc_doc);
    console.log(row.offc_doc);
  };
  return (
    <Container>
      <h1 style={{ marginBottom: '20px' }}>Booked Stadium List</h1>
      <Card style={{ padding: '40px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: '8%', textAlign: 'center' }} colSpan={1}>
                  S No
                </TableCell>
                <TableCell style={{ textAlign: 'center', width: '15%' }}> Stadium Name</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Location</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Document</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Address</TableCell>
                <TableCell style={{ textAlign: 'center', width: '16%' }}>
                  Stadium Approved
                </TableCell>
                <TableCell style={{ textAlign: 'center', width: '16%' }}>Status Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(list) &&
                list.map((row, i) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell scope="row" style={{ textAlign: 'center' }}>
                      {i + 1}
                    </TableCell>
                    <TableCell scope="row" style={{ textAlign: 'center' }}>
                      {row.name}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row?.location}</TableCell>
                    <TableCell>
                      <Button size="small" variant="outlined" onClick={() => saveFile(row)}>
                        Download
                      </Button>
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row?.address}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.approved === false ? (
                        <Chip label="Not Approved" color="primary" variant="outlined" />
                      ) : (
                        <Chip label="Approved" color="secondary" variant="outlined" />
                      )}
                    </TableCell>

                    <FormControl fullWidth style={{ marginTop: '10px', textAlign: 'center' }}>
                      <InputLabel id="demo-simple-select-label">Update</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Gender"
                        name="gender"
                      >
                        <MenuItem
                          value="2"
                          onClick={() => {
                            dispatch(stadiumupdate({ id: `${row.id}`, status: true }));
                          }}
                        >
                          Approved
                        </MenuItem>
                        <MenuItem
                          value="1"
                          onClick={() => {
                            dispatch(stadiumupdate({ id: `${row.id}`, status: false }));
                          }}
                        >
                          Not Approved
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
}
