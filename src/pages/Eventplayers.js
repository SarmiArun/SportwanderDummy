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

// export default function EventPlayers() {
//   const [show, setShow] = useState(false);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(marathonlist());
//   }, []);
//   const playerlist = useSelector(({ marathonlist }) => marathonlist.payload);
//   return (
//     <>
//       {show ? (
//         <Chip
//           onClick={() => setShow(!show)}
//           label="Paid Players"
//           style={{ color: 'white', backgroundColor: '#E51E25' }}
//         />
//       ) : (
//         <Chip
//           onClick={() => setShow(!show)}
//           label="All Players"
//           style={{ color: 'white', backgroundColor: '#128C7E' }}
//         />
//       )}
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell align="center">S No</TableCell>
//             <TableCell align="center">Name</TableCell>
//             <TableCell align="center">Email</TableCell>
//             <TableCell align="center">Phone</TableCell>
//             <TableCell align="center">Gender</TableCell>
//             <TableCell align="center">Blood</TableCell>
//             <TableCell align="center">Category / Tshirt</TableCell>
//             <TableCell align="center">Emergency Name / Number</TableCell>
//             <TableCell align="center">Health Issues</TableCell>
//             <TableCell align="center">ID Type</TableCell>
//             <TableCell align="center">ID Number</TableCell>
//             <TableCell align="center">Location</TableCell>
//             <TableCell align="center">Time</TableCell>
//             <TableCell align="center">Payment Status</TableCell>
//           </TableRow>
//         </TableHead>
//         {show ? (
//           <TableBody>
//             {Array.isArray(playerlist) &&
//               playerlist
//                 .filter((dataa) => dataa.ErodeEvent !== null)
//                 .map((data, i) => (
//                   <TableRow key="2">
//                     <TableCell align="center">{i + 1}</TableCell>
//                     <TableCell align="center">{data?.fname}</TableCell>
//                     <TableCell align="center">{data?.email}</TableCell>
//                     <TableCell align="center">{data?.phone}</TableCell>
//                     <TableCell align="center">{data?.gender}</TableCell>
//                     <TableCell align="center">{data?.bloodGroup}</TableCell>
//                     <TableCell align="center">
//                       {data?.categories} / {data?.tshirtSize}
//                     </TableCell>
//                     <TableCell align="center">
//                       {data?.emergencyContactName} / {data?.emergencyContactPhone}
//                     </TableCell>
//                     <TableCell align="center">{data?.healthIssue ? 'Yes' : 'No'}</TableCell>
//                     <TableCell align="center">{data?.idType}</TableCell>
//                     <TableCell align="center">{data?.idNumber}</TableCell>
//                     <TableCell align="center">{data?.city}</TableCell>
//                     <TableCell align="center">
//                       {data?.ErodeEvent == null ? (
//                         <Chip
//                           label="Unpaid"
//                           style={{ color: 'white', backgroundColor: '#E51E25' }}
//                         />
//                       ) : (
//                         <Chip label="Paid" style={{ color: 'white', backgroundColor: '#128C7E' }} />
//                       )}
//                     </TableCell>
//                     <TableCell align="center">{data?.createdAt}</TableCell>
//                   </TableRow>
//                 ))}
//           </TableBody>
//         ) : (
//           <TableBody>
//             {Array.isArray(playerlist) &&
//               playerlist.map((data, i) => (
//                 <TableRow key="2">
//                   <TableCell align="center">{i + 1}</TableCell>
//                   <TableCell align="center">{data?.fname}</TableCell>
//                   <TableCell align="center">{data?.email}</TableCell>
//                   <TableCell align="center">{data?.phone}</TableCell>
//                   <TableCell align="center">{data?.gender}</TableCell>
//                   <TableCell align="center">{data?.bloodGroup}</TableCell>
//                   <TableCell align="center">
//                     {data?.categories} / {data?.tshirtSize}
//                   </TableCell>
//                   <TableCell align="center">
//                     {data?.emergencyContactName} / {data?.emergencyContactPhone}
//                   </TableCell>
//                   <TableCell align="center">{data?.healthIssue ? 'Yes' : 'No'}</TableCell>
//                   <TableCell align="center">{data?.idType}</TableCell>
//                   <TableCell align="center">{data?.idNumber}</TableCell>
//                   <TableCell align="center">{data?.city}</TableCell>
//                   <TableCell align="center">
//                     {data?.ErodeEvent == null ? (
//                       <Chip label="Unpaid" style={{ color: 'white', backgroundColor: '#E51E25' }} />
//                     ) : (
//                       <Chip label="Paid" style={{ color: 'white', backgroundColor: '#128C7E' }} />
//                     )}
//                   </TableCell>
//                   <TableCell align="center">{data?.createdAt}</TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         )}
//       </Table>
//     </>
//   );
// }

const columns = [
  {
    field: 'fname',
    headerName: 'Name',
    width: 150,
    editable: true
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true
  },
  {
    field: 'phone',
    headerName: 'Phone ',
    width: 150,
    editable: true
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 150,
    editable: true
  },
  {
    field: 'bloodGroup',
    headerName: 'Blood Group',
    width: 150,
    editable: true
  },
  {
    field: 'categories',
    headerName: 'Category',
    width: 150,
    editable: true
  },
  {
    field: 'tshirtSize',
    headerName: 'T-Shirt Size',
    width: 150,
    editable: true
  },
  {
    field: 'emergencyContactName',
    headerName: 'Emergency Name',
    width: 150,
    editable: true
  },
  {
    field: 'emergencyContactPhone',
    headerName: 'Emergency Number',
    width: 150,
    editable: true
  },
  {
    field: 'healthIssue',
    headerName: 'Health Issues',
    width: 150,
    editable: true
  },
  {
    field: 'idType',
    headerName: 'ID Type',
    width: 150,
    editable: true
  },
  {
    field: 'idNumber',
    headerName: 'ID Number',
    width: 150,
    editable: true
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
    editable: true
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    editable: true
  }
];

export default function EventPlayers() {
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(marathonlist()).then(() => {
      setLoad(false);
    });
  }, []);
  const playerlist = useSelector(({ marathonlist }) => marathonlist.payload);
  return (
    <>
      {load ? (
        <div>
          <p>loading</p>
        </div>
      ) : (
        <Box sx={{ height: 720, width: '100%' }}>
          <DataGrid rows={playerlist} columns={columns} pageSize={12} rowsPerPageOptions={[10]} />
        </Box>
      )}
    </>
  );
}
