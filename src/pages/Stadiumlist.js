import React, { useEffect, useState } from 'react';
import './style.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';
import { Box, Chip, Icon, IconButton, Modal, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Loader from '../components/Loader';
import { stadiumlist, stadiumupdate, changestatus } from '../redux/actions/actions';

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
  const [id, setId] = useState('');
  const [modalImage, setModalImage] = useState();
  const handleOpen = (img) => {
    setModalImage(img);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(stadiumlist()).then((res) => {
      setId(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  const handleclick = (val) => {
    dispatch(changestatus({ stadiumId: 1, status: val }));
  };
  console.log(id);
  const list =
    useSelector(({ stadiumlist }) => {
      console.log('stadiums : ', stadiumlist.payload);
      let payload =
        Array.isArray(stadiumlist.payload) &&
        stadiumlist.payload.map((v, i) => {
          const index = i + 1;
          return { ...v, sno: index };
        });
      payload = stadiumlist.payload === 'No stadiums found' ? [] : payload;
      return payload;
    }) ?? [];
  const dispatch = useDispatch();
  const VID = Array.isArray(list) && list?.map((data) => data.id);
  const CID = VID;
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
                style={{ aspectRatio: '16/9', objectFit: 'cover', width: '150px' }}
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
          const status = value === 'active' ? 'active' : 'inactive';
          return (
            <Chip
              onClick={() => handleclick(status)}
              label={value}
              sx={{ backgroundColor: color, color: 'white', textTransform: 'capitalize' }}
            />
          );
        }
      }
    },
    {
      name: 'id',
      label: 'Actions',
      center: true,
      options: {
        sort: true,
        customHeadRender: (columnMeta, updateDirection) => (
          <th key={columnMeta.index}>{columnMeta.label}</th>
        ),
        customBodyRender: (value, tableMeta, updateValue) => (
          <Box display="flex">
            <Link to={`/admin/Stadiumfulldetails/${value}`}>
              <Button
                color="warning"
                sx={{ boxShadow: 'none' }}
                disableElevation
                variant="contained"
              >
                <VisibilityIcon />
              </Button>
            </Link>
            <Button
              color="secondary"
              sx={{ boxShadow: 'none', marginLeft: '10px' }}
              disableElevation
              variant="contained"
            >
              <EditIcon />
            </Button>
            <Button
              color="error"
              sx={{ boxShadow: 'none', marginLeft: '10px' }}
              disableElevation
              variant="contained"
            >
              <DeleteIcon />
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

  console.log(list);

  return list ? (
    <div>
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
    </div>
  ) : (
    <Loader />
    // <div>no data found</div>
  );
}
