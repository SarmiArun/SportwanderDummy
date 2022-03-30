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
  stadiumeventlist,
  eventorgcount
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
  stadiumeventlist,
  eventorgcount
});
