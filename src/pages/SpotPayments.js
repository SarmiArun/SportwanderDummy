import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Chip from '@mui/material/Chip';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { marathonlist } from '../redux/actions/actions';
import loader from './loader.gif';

function SpotPayments() {
  const [spotPayment, setSpotPayment] = useState(false);
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(marathonlist()).then((res) => {
      setLoad(false);
    });
  }, []);
  const playerlist = useSelector(({ marathonlist }) => marathonlist.payload);

  return (
    <>
      {load ? (
        <h2>
          <img
            src={loader}
            alt="loader"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '20vh'
            }}
          />
        </h2>
      ) : (
        <>
          <h2 style={{ color: 'red' }}>Spot Registrations</h2>
          <TableHead>
            <TableRow>
              <TableCell align="center">S No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Blood</TableCell>
              <TableCell align="center">Category / Tshirt</TableCell>
              <TableCell align="center">Emergency Name / Number</TableCell>
              <TableCell align="center">Health Issues</TableCell>
              <TableCell align="center">ID Type</TableCell>
              <TableCell align="center">ID Number</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Payment Status</TableCell>
              <TableCell align="center">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(playerlist) &&
              playerlist
                .filter((dataa) => dataa.ErodeEvent !== null && dataa.ErodeEvent.type === 'LOCAL')
                .map((data, i) => {
                  const date = new Date();
                  const currentYear = date.getFullYear();
                  const dob = new Date(data.dob);
                  const age = Number(currentYear) - Number(dob.getFullYear());

                  return (
                    <TableRow key="2">
                      <TableCell align="center">{i + 1}</TableCell>
                      <TableCell align="center">{data?.fname}</TableCell>
                      <TableCell align="center">{data?.email}</TableCell>
                      <TableCell align="center">{data?.phone}</TableCell>
                      <TableCell align="center">{data?.gender}</TableCell>
                      <TableCell align="center">{age}</TableCell>
                      <TableCell align="center">{data?.bloodGroup}</TableCell>
                      <TableCell align="center">
                        {data?.categories} / {data?.tshirtSize}
                      </TableCell>
                      <TableCell align="center">
                        {data?.emergencyContactName} / {data?.emergencyContactPhone}
                      </TableCell>
                      <TableCell align="center">{data?.healthIssue ? 'Yes' : 'No'}</TableCell>
                      <TableCell align="center">{data?.idType}</TableCell>
                      <TableCell align="center">{data?.idNumber}</TableCell>
                      <TableCell align="center">{data?.city}</TableCell>
                      <TableCell align="center">
                        {data?.ErodeEvent == null ? (
                          <Chip
                            label="Unpaid"
                            style={{ color: 'white', backgroundColor: '#E51E25' }}
                          />
                        ) : (
                          <Chip
                            label="Paid"
                            style={{ color: 'white', backgroundColor: '#128C7E' }}
                          />
                        )}
                      </TableCell>
                      <TableCell align="center">{data?.createdAt}</TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </>
      )}
    </>
  );
}
export default SpotPayments;
