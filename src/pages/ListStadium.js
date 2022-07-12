import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { filter } from 'lodash';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import {
  Card,
  Container,
  Stack,
  Typography,
  Table,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination
} from '@mui/material';
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import { TableListHead, TableListToolbar, TableMoreMenu } from '../components/_dashboard/Table';
import { stadiumownerlist } from '../redux/actions/actions';
import USERLIST from '../_mocks_/user';

const TABLE_HEAD = [
  { id: 'userId', label: 'User Id', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'phone', label: 'Phone', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'gender', label: 'Gender', alignRight: false },
  { id: 'address', label: 'Address', alignRight: false }
];

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

function BookedStadiums() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  useEffect(() => {
    dispatch(stadiumownerlist());
  }, []);
  const ownerlist = useSelector(({ stadiumownerlist }) => stadiumownerlist.payload);

  return (
    <div>
      <Container>
        <Card style={{ padding: '40px' }}>
          <Typography variant="h3" component="h2">
            Booked List
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> S No</TableCell>
                  <TableCell> User Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="Calories" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  {Array.isArray(ownerlist) &&
                    ownerlist.map((owner, i) => (
                      <>
                        <TableCell component="th" scope="row">
                          {i + 1}
                        </TableCell>
                        <TableCell style={{ textTransform: 'capitalize' }}>
                          {owner.userid}
                        </TableCell>
                        <TableCell style={{ textTransform: 'capitalize' }}>{owner.name}</TableCell>
                        <TableCell>{owner.email}</TableCell>
                        <TableCell>{owner.phone}</TableCell>
                        <TableCell style={{ textTransform: 'capitalize' }}>
                          {owner.address}
                        </TableCell>
                      </>
                    ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
      {
        // <Container>
        //   <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        //     <Typography variant="h4" gutterBottom>
        //       Booked Stadiums
        //     </Typography>
        //     <Button
        //       variant="contained"
        //       component={RouterLink}
        //       to="/admin/BookedEvents"
        //       endIcon={<Icon icon={plusFill} />}
        //     >
        //       BOOK
        //     </Button>
        //   </Stack>
        //   <Card>
        //     <TableListToolbar
        //       numSelected={selected.length}
        //       filterName={filterName}
        //       onFilterName={handleFilterByName}
        //     />
        //     <Scrollbar>
        //       <TableContainer sx={{ minWidth: 800 }}>
        //         <Table>
        //           <TableListHead
        //             headLabel={TABLE_HEAD}
        //             // onRequestSort={handleRequestSort}
        //             // onSelectAllClick={handleSelectAllClick}
        //           />
        //           <TableBody>
        //             <>
        //               <>
        //                 <TableRow>
        //                   {Array.isArray(ownerlist) &&
        //                     ownerlist.map((owner) => (
        //                       <>
        //                         <TableCell align="center">check</TableCell>
        //                         <TableCell align="left">{owner.userid}</TableCell>
        //                         <TableCell align="left">{owner.name}</TableCell>
        //                         <TableCell align="left">{owner.phone}</TableCell>
        //                         <TableCell align="left">{owner.email}</TableCell>
        //                         <TableCell align="left">{owner.gender}</TableCell>
        //                         <TableCell align="left">{owner.address}</TableCell>
        //                       </>
        //                     ))}
        //                 </TableRow>
        //               </>
        //             </>
        //             {emptyRows > 0 && (
        //               <TableRow style={{ height: 53 * emptyRows }}>
        //                 <TableCell colSpan={6} />
        //               </TableRow>
        //             )}
        //           </TableBody>
        //           {isUserNotFound && (
        //             <TableBody>
        //               <TableRow>
        //                 <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
        //                   <SearchNotFound searchQuery={filterName} />
        //                 </TableCell>
        //               </TableRow>
        //             </TableBody>
        //           )}
        //         </Table>
        //       </TableContainer>
        //     </Scrollbar>
        //     <TablePagination
        //       rowsPerPageOptions={[5, 10, 25]}
        //       component="div"
        //       count={USERLIST.length}
        //       rowsPerPage={rowsPerPage}
        //       page={page}
        //       onPageChange={handleChangePage}
        //       onRowsPerPageChange={handleChangeRowsPerPage}
        //     />
        //   </Card>
        // </Container>
      }
    </div>
  );
}

export default BookedStadiums;
