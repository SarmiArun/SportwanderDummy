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
  MenuItem,
  Input,
  Select,
  TablePagination,
  InputLabel,
  FormControl
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { stadiumownercreate } from '../redux/actions/actions';

// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import { TableListHead, TableListToolbar, TableMoreMenu } from '../components/_dashboard/Table';

//
import USERLIST from '../_mocks_/user';

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
    userid: '',
    phone: '',
    dob: '',
    gender: '',
    email: '',
    photo: '',
    password: '',
    address: '',
    bank_accno: '',
    ifsc: '',
    aadhaarno: '',
    aadhaar_fron: '',
    aadhaar_back: '',
    aadhaar_selfie: '',
    branch: ''
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setData({ ...data, [e.target.name]: e.target.files[0] });
    }
  };

  const handleDoc = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setData({ ...data, [e.target.name]: e.target.files[0] });
    }
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(data).map(([key, value]) => formData.append(key, value));
    dispatch(stadiumownercreate(data));
  };
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Create Stadium Owner
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/admin/ListStadium"
            endIcon={<Icon icon="eva:arrow-back-fill" />}
          >
            Back
          </Button>
        </Stack>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3} sx={{ my: 2 }}>
              <div style={{ display: 'flex' }}>
                <TextField
                  autoComplete="location"
                  type="text"
                  style={{ width: '25%', marginRight: '10px' }}
                  onChange={handleChange}
                  label="Name"
                  name="name"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  autoComplete="location"
                  type="email"
                  style={{ width: '25%', marginRight: '10px' }}
                  onChange={handleChange}
                  label="Email"
                  name="email"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  autoComplete="location"
                  type="text"
                  style={{ width: '25%', marginRight: '10px' }}
                  onChange={handleChange}
                  label="User Id"
                  name="userid"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  autoComplete="location"
                  type="text"
                  style={{ width: '25%' }}
                  onChange={handleChange}
                  label="Phone"
                  name="phone"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
            </Stack>
            <Stack spacing={3} sx={{ my: 2 }}>
              <div style={{ display: 'flex' }}>
                <TextField
                  autoComplete="location"
                  type="date"
                  style={{ width: '50%', marginRight: '10px' }}
                  onChange={handleChange}
                  name="dob"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />

                <FormControl fullWidth style={{ marginRight: '10px' }}>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gender"
                    name="gender"
                    onChange={handleChange}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="others">Others</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  autoComplete="location"
                  type="text"
                  style={{ width: '50%' }}
                  onChange={handleChange}
                  label="Image"
                  name="photo"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
            </Stack>
            <Stack spacing={3} sx={{ my: 2 }}>
              <div style={{ display: 'flex' }}>
                <TextField
                  autoComplete="location"
                  type="password"
                  style={{ width: '33%', marginRight: '10px' }}
                  onChange={handleChange}
                  label="Password"
                  name="password"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  autoComplete="location"
                  type="number"
                  style={{ width: '34%', marginRight: '10px' }}
                  onChange={handleChange}
                  label="Bank Account"
                  name="bank_accno"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  autoComplete="location"
                  type="text"
                  style={{ width: '33%' }}
                  onChange={handleChange}
                  label="IFSC"
                  name="ifsc"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
            </Stack>
            <Stack spacing={3} sx={{ my: 2 }}>
              <div style={{ display: 'flex' }}>
                <TextField
                  autoComplete="location"
                  type="text"
                  style={{ width: '33%', marginRight: '10px' }}
                  onChange={handleChange}
                  label="Branch"
                  name="branch"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  autoComplete="location"
                  type="text"
                  style={{ width: '33%', marginRight: '10px' }}
                  onChange={handleChange}
                  label="Aadhar Front Link"
                  name="aadhaar_fron"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  autoComplete="location"
                  type="text"
                  style={{ width: '33%' }}
                  onChange={handleChange}
                  label="Aadhar_back Link"
                  name="aadhaar_back"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
            </Stack>
            <Stack spacing={3} sx={{ my: 2 }}>
              <div style={{ display: 'flex' }}>
                <TextField
                  autoComplete="location"
                  type="text"
                  style={{ width: '35%', marginRight: '10px' }}
                  onChange={handleChange}
                  label="Aadhar Selfie Link"
                  name="aadhaar_selfie"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  autoComplete="location"
                  type="number"
                  style={{ width: '35%', marginRight: '10px' }}
                  onChange={handleChange}
                  label="Aadhar No"
                  name="aadhaarno"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  autoComplete="location"
                  type="text"
                  style={{ width: '35%' }}
                  onChange={handleChange}
                  label="Address"
                  name="address"
                  // {...getFieldProps('location')}
                  error={Boolean(touched.address && errors.address)}
                  helperText={touched.address && errors.address}
                />
              </div>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Submit
            </LoadingButton>
          </Form>
        </FormikProvider>
      </Container>
    </Page>
  );
}
