import { combineReducers } from 'redux';
import {
  userlogin,
  kycverify,
  kycpending,
  kycreject,
  kycupdate,
  stadiumownercreate,
  stadiumownercount,
  stadiumownerlist,
  stadiumeventlist
} from './reducer';

export default combineReducers({
  userlogin,
  kycverify,
  kycpending,
  kycreject,
  kycupdate,
  stadiumownercreate,
  stadiumownercount,
  stadiumownerlist,
  stadiumeventlist
});
