import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { marathonlist } from '../redux/actions/actions';

const columns = [
  {
    field: 'id',
    headerName: 'id',
    width: 50,
    editable: false
  },
  {
    field: 'fname',
    headerName: 'Name',
    width: 150,
    editable: false
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: false
  },
  {
    field: 'phone',
    headerName: 'Phone ',
    width: 150,
    editable: false
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 150,
    editable: false
  },
  {
    field: 'dob',
    headerName: 'DOB',
    width: 150,
    editable: false
  },
  {
    field: 'bloodGroup',
    headerName: 'Blood Group',
    width: 150,
    editable: false
  },
  {
    field: 'categories',
    headerName: 'Category',
    width: 150,
    editable: false
  },
  {
    field: 'tshirtSize',
    headerName: 'T-Shirt Size',
    width: 150,
    editable: false
  },
  {
    field: 'emergencyContactName',
    headerName: 'Emergency Name',
    width: 150,
    editable: false
  },
  {
    field: 'emergencyContactPhone',
    headerName: 'Emergency Number',
    width: 150,
    editable: false
  },
  {
    field: 'healthIssue',
    headerName: 'Health Issues',
    width: 150,
    editable: false
  },
  {
    field: 'idType',
    headerName: 'ID Type',
    width: 150,
    editable: false
  },
  {
    field: 'idNumber',
    headerName: 'ID Number',
    width: 150,
    editable: false
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
    editable: false
  },
  {
    field: 'type',
    headerName: 'Payment Mode',
    width: 150,
    editable: false
  },
  {
    field: 'ErodeEvent',
    headerName: 'Payment Status',
    width: 150,
    editable: false
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    editable: false
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
  let playerlist = useSelector(({ marathonlist }) => marathonlist.payload);
  if (playerlist) {
    playerlist = playerlist.map((data) => ({
      ...data,
      healthIssue: data.healthIssue ? 'Yes' : 'No'
    }));
  }
  if (playerlist) {
    playerlist = playerlist.map((data, i) => {
      const d = {
        ...data,
        ErodeEvent: data.ErodeEvent ? 'Paid' : 'Unpaid'
      };
      d.type = data.ErodeEvent ? data.ErodeEvent.type : 'None';
      d.id = i + 1;
      return d;
    });
  }

  return (
    <>
      {load ? (
        <div>
          <p>loading</p>
        </div>
      ) : (
        <Box sx={{ height: 720, width: '100%' }}>
          <DataGrid
            rows={playerlist}
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[10]}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      )}
    </>
  );
}
