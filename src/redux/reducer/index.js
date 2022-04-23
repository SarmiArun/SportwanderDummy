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
  eventorgcount,
  kyclistall,
  privacypolicyadd,
  privacypolicylist,
  termsadd,
  termslist,
  notifyadd,
  updateversion,
  getversion,
  cataddbanner,
  catlistbanner,
  catdeletebanner,
  mainaddbanner,
  mainlistbanner,
  maindeletebanner,
  playerCount,
  playerList,
  stadiumlist,
  issuesList,
  updateissues
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
  eventorgcount,
  kyclistall,
  privacypolicyadd,
  privacypolicylist,
  termsadd,
  termslist,
  notifyadd,
  updateversion,
  getversion,
  cataddbanner,
  catlistbanner,
  catdeletebanner,
  mainaddbanner,
  mainlistbanner,
  maindeletebanner,
  playerCount,
  playerList,
  issuesList,
  updateissues,
  stadiumlist
});
