import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plusFill from '@iconify/icons-eva/plus-fill';
import * as Yup from 'yup';
import eyeFill from '@iconify/icons-eva/eye-fill';
import arrowBackFill from '@iconify/icons-eva/arrow-back-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import { DropzoneArea } from 'material-ui-dropzone';

// material
import {
  Card,
  Grid,
  Table,
  Avatar,
  Button,
  Box,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  TableContainer,
  Input,
  TablePagination
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import SearchNotFound from '../../components/SearchNotFound';
import { TableListHead, TableListToolbar, TableMoreMenu } from '../../components/_dashboard/Table';
// import { addstadium } from '../../redux/actions/actions';
//
import { addstadium } from '../../redux/actions/actions';
import USERLIST from '../../_mocks_/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function User() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    }
  });
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });
  const { errors, touched, values, isSubmitting, getFieldProps } = formik;
  const [data, setData] = useState({
    name: '',
    desc: '',
    address: '',
    photos: []

    // official_document: ''
  });
  const [error, setError] = useState('');
  const [docerror, setDocerror] = useState('');
  const [nameerror, setNameError] = useState('');
  const [locationerror, setLocationError] = useState('');
  const [descerror, setDescError] = useState('');
  const [addrerror, setAddrError] = useState('');
  const [urlimage, setImageUl] = useState('');
  const [urlimage2, setImageUl2] = useState('');
  const [urlimage3, setImageUl3] = useState('');
  const [urlimage4, setImageUl4] = useState('');
  const [docname, setDocName] = useState('');
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const imageChange = (e) => {
    const [one] = e.target.files;
    const temp = data.photos;
    temp[0] = one;
    if (e.target.files && e.target.files.length > 0) {
      setData({ ...data, [e.target.name]: temp });
      setImageUl(URL.createObjectURL(e.target.files[0]));
      // console.log('image', URL.createObjectURL(e.target.files[0]));
    }
  };
  const imageChange2 = (e) => {
    const [one] = e.target.files;
    const temp = data.photos;
    temp[1] = one;
    if (e.target.files && e.target.files.length > 0) {
      setData({ ...data, [e.target.name]: temp });
      setImageUl2(URL.createObjectURL(e.target.files[0]));
      // console.log('image', URL.createObjectURL(e.target.files[0]));
    }
  };
  const imageChange3 = (e) => {
    const [one] = e.target.files;
    const temp = data.photos;
    temp[2] = one;
    if (e.target.files && e.target.files.length > 0) {
      setData({ ...data, [e.target.name]: temp });
      setImageUl3(URL.createObjectURL(e.target.files[0]));
      // console.log('image', URL.createObjectURL(e.target.files[0]));
    }
  };
  const imageChange4 = (e) => {
    const [one] = e.target.files;
    const temp = data.photos;
    temp[3] = one;
    if (e.target.files && e.target.files.length > 0) {
      setData({ ...data, [e.target.name]: temp });
      setImageUl4(URL.createObjectURL(e.target.files[0]));
      // console.log('image', URL.createObjectURL(e.target.files[0]));
    }
  };

  // const handleDoc = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setData({ ...data, [e.target.name]: e.target.files[0] });
  //     setDocName(e.target.files[0].name);
  //   }
  // };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(data);
    if (data.name === '') {
      setNameError('Enter the Name');
    } else if (data.address === '') {
      setLocationError('Enter the Address');
    } else if (data.desc === '') {
      setDescError('Enter the Description');
    } else if (data.photos === '') {
      setDocerror('Add At least One Photo ');
    } else {
      const formData = new FormData();
      Object.entries(data).map(([key, value]) => formData.append(key, value));
      data.photos.map((data, i) => formData.append(`photos[${i}]`, data));
      dispatch(addstadium(formData));
      // setTimeout(() => {
      // window.location.href = '/admin/ListStadium';
      // }, 3000);
    }
  };

  return (
    <Page title="User" style={{ paddingTop: '0px', paddingBottom: '0px', marginTop: '-25px' }}>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add Stadium
          </Typography>
          {
            // <Button
            //   variant="contained"
            //   component={RouterLink}
            //   to="/admin/ListStadium"
            //   endIcon={<Icon icon="eva:arrow-back-fill" />}
            // >
            //   Back
            // </Button>
          }
        </Stack>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3} sx={{ my: 2 }}>
              <TextField
                autoComplete="name"
                name="name"
                onChange={handleChange}
                label="Name"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Icon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
              {nameerror ? (
                <span style={{ marginLeft: '10px', color: 'red' }}>{nameerror}</span>
              ) : (
                false
              )}
              <TextField
                autoComplete="address"
                type="text"
                onChange={handleChange}
                label="address"
                name="address"
                // {...getFieldProps('location')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
              {locationerror ? (
                <span style={{ marginLeft: '10px', color: 'red' }}>{locationerror}</span>
              ) : (
                false
              )}
              <TextField
                placeholder="Description"
                name="desc"
                multiline
                onChange={handleChange}
                rows={2}
                maxRows={4}
              />
              {descerror ? (
                <span style={{ marginLeft: '10px', color: 'red' }}>{descerror}</span>
              ) : (
                false
              )}
              <TextField
                autoComplete="address"
                type="text"
                onChange={handleChange}
                name="address"
                label="Address"
                // {...getFieldProps('Description')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
              {addrerror ? (
                <span style={{ marginLeft: '10px', color: 'red' }}>{addrerror}</span>
              ) : (
                false
              )}
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <label htmlFor="upload-document">
                  <input
                    id="upload-document"
                    name="photos"
                    onChange={imageChange}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                  <Button color="primary" variant="contained" component="span">
                    Upload Stadium Image 1
                  </Button>
                  {urlimage ? (
                    <img
                      src={urlimage}
                      style={{ width: '200px', height: '20vh', marginTop: '20px', color: 'red' }}
                      alt="example"
                    />
                  ) : (
                    false
                  )}
                </label>
                <label htmlFor="upload-document2">
                  <input
                    id="upload-document2"
                    name="photos"
                    onChange={imageChange2}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                  <Button color="primary" variant="contained" component="span">
                    Upload Stadium Image 2
                  </Button>
                  {urlimage2 ? (
                    <img
                      src={urlimage2}
                      style={{ width: '200px', height: '20vh', marginTop: '20px', color: 'red' }}
                      alt="example"
                    />
                  ) : (
                    false
                  )}
                </label>
                <label htmlFor="upload-document3">
                  <input
                    id="upload-document3"
                    name="photos"
                    onChange={imageChange3}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                  <Button color="primary" variant="contained" component="span">
                    Upload Stadium Image 3
                  </Button>
                  {urlimage3 ? (
                    <img
                      src={urlimage3}
                      style={{ width: '200px', height: '20vh', marginTop: '20px', color: 'red' }}
                      alt="example"
                    />
                  ) : (
                    false
                  )}
                </label>
                <label htmlFor="upload-document4">
                  <input
                    id="upload-document4"
                    name="photos"
                    onChange={imageChange4}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                  <Button color="primary" variant="contained" component="span">
                    Upload Stadium Image 4
                  </Button>
                  {urlimage4 ? (
                    <img
                      src={urlimage4}
                      style={{ width: '200px', height: '20vh', marginTop: '20px', color: 'red' }}
                      alt="example"
                    />
                  ) : (
                    false
                  )}
                </label>
              </Box>
              <span style={{ color: 'red', marginLeft: '10px' }}>{docerror}</span>

              {
                // <label htmlFor="btn-upload">
                //   <input
                //     id="btn-upload"
                //     name="official_document"
                //     style={{ display: 'none' }}
                //     type="file"
                //     onChange={handleDoc}
                //   />
                //   <Button className="btn-choose" variant="outlined" component="span">
                //     Upload Stadium Document
                //   </Button>
                //   {docname ? <span style={{ marginLeft: '10px' }}>{docname}</span> : false}
                // </label>
              }
            </Stack>
            <Button fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
              Submit
            </Button>
          </Form>
        </FormikProvider>
      </Container>
    </Page>
  );
}
