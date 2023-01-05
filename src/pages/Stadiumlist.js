import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import MUIDataTable from 'mui-datatables';

import { Box, Chip, Icon, IconButton, Modal, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Loader from '../components/Loader';
import banner from '../Images/banner2.jpg';

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
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState();
  const handleOpen = (img) => {
    setModalImage(img);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(stadiumlist());
  }, []);

  const list =
    useSelector(({ stadiumlist }) => {
      console.log('stadiums : ', stadiumlist.payload);

      const payload =
        Array.isArray(stadiumlist.payload) &&
        stadiumlist.payload.map((v, i) => {
          const index = i + 1;
          return { ...v, sno: index };
        });

      return payload;
    }) ?? [];
  const dispatch = useDispatch();

  const columns = [
    {
      name: 'sno',
      label: 'S.No',
      options: {
        sort: true
      }
    },
    {
      name: 'images',
      label: 'Image',
      options: {
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>
            <Button onClick={() => handleOpen(value)}>
              <img
                src={value}
                alt="stadium_img"
                style={{ aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <img src={modalImage} alt="stadium_img" style={{ objectFit: 'cover' }} />
              </Box>
            </Modal>
          </>
        )
      }
    },
    {
      name: 'name',
      label: 'Name',
      options: {
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Typography
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3
            }}
          >
            {value.trim()}
          </Typography>
        )
      }
    },
    {
      name: 'location',
      label: 'Location',
      options: {
        sort: true
      }
    },
    {
      name: 'address',
      label: 'Address',
      options: {
        sort: true
      }
    },
    {
      name: 'phone',
      label: 'Phone',
      options: {
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => <Typography noWrap>{value}</Typography>
      }
    },
    {
      name: 'availability',
      label: 'Availability',
      options: {
        sort: true
      }
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const color = value === 'active' ? '#2DA043' : 'primary';
          return (
            <Chip
              label={value}
              sx={{ backgroundColor: color, color: 'white', textTransform: 'capitalize' }}
            />
          );
        }
      }
    },
    {
      name: 'action',
      label: 'Actions',
      center: true,
      options: {
        sort: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th key={columnMeta.index}>{columnMeta.label}</th>
        ),
        customBodyRender: (value, tableMeta, updateValue) => (
          <Box display="flex">
            <Button
              color="warning"
              startIcon={<VisibilityIcon />}
              sx={{ boxShadow: 'none' }}
              disableElevation
              variant="contained"
            >
              View
            </Button>
            <Button
              color="secondary"
              startIcon={<EditIcon />}
              sx={{ boxShadow: 'none', marginLeft: '10px' }}
              disableElevation
              variant="contained"
            >
              Edit
            </Button>
            <Button
              color="error"
              startIcon={<DeleteIcon />}
              sx={{ boxShadow: 'none', marginLeft: '10px' }}
              disableElevation
              variant="contained"
            >
              Delete
            </Button>
          </Box>
        )
      }
    }
  ];

  const options = {
    elevation: 0,
    expandableRows: false,
    filter: false,
    responsive: 'standard',
    selectableRows: false,
    downloadOptions: {
      filename: `sw_stadiums.csv`,
      filterOptions: {
        useDisplayedColumnsOnly: true,
        useDisplayedRowsOnly: true
      }
    }
  };

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

      <Card style={{ padding: '25px' }}>
        <MUIDataTable title="Stadiums" data={list} columns={columns} options={options} />
      </Card>
    </Container>
  ) : (
    <Loader />
  );
}
