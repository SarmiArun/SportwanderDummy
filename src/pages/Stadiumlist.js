import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Container from '@mui/material/Container';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { stadiumlist } from '../redux/actions/actions';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(stadiumlist());
  }, []);
  const list = useSelector(({ stadiumlist }) => stadiumlist.payload);
  console.log(list);

  return (
    <Container>
      <h1>Booked Stadium List</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Stadium Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Document</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Stadium Approved </TableCell>
              <TableCell>Status update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(list) &&
              list.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row?.location}</TableCell>
                  <TableCell>{row?.offc_doc}</TableCell>
                  <TableCell>{row?.address}</TableCell>
                  <TableCell>
                    {row?.approved === false ? (
                      <span style={{ color: 'red' }}> Not Approved</span>
                    ) : (
                      <span style={{ color: 'green' }}>Appoved </span>
                    )}
                  </TableCell>
                  <FormControl fullWidth style={{ marginTop: '10px' }}>
                    <InputLabel id="demo-simple-select-label">Approved</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
                      <MenuItem
                        onClick={() => {
                          dispatch(stadiumlist({ id: row.id, status: true }));
                        }}
                      >
                        Ten
                      </MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
