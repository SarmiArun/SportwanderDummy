import { axiosInstance } from '../../Services';
import {
  user,
  KYC,
  stadiumowner,
  event,
  privacy,
  terms,
  notify,
  moderators,
  version,
  catbanner,
  mainbanner,
  player,
  issues
} from '../actiontype/actiontype';

export function userlogin(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/login', data)
        .then((res) => {
          localStorage.setItem('AuthTokAdmin', res.data.data);
          dispatch({
            type: user.login.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: user.login.error,
            data: err
          });
          reject(err);
        })
    );
}
export function kycpending(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/kyc/pending')
        .then((res) => {
          dispatch({
            type: KYC.pending.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: KYC.pending.error,
            data: err
          });
          reject(err);
        })
    );
}
export function kyclistall(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/kyc/all')
        .then((res) => {
          dispatch({
            type: KYC.all.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: KYC.all.error,
            data: err
          });
          reject(err);
        })
    );
}
export function kycverify(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/kyc/verified')
        .then((res) => {
          dispatch({
            type: KYC.verify.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: KYC.verify.error,
            data: err
          });
          reject(err);
        })
    );
}
export function kycreject(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/kyc/rejected')
        .then((res) => {
          dispatch({
            type: KYC.rejected.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: KYC.rejected.error,
            data: err
          });
          reject(err);
        })
    );
}

export function kycupdate(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/kyc/update', data)
        .then((res) => {
          dispatch({
            type: KYC.update.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: KYC.update.error,
            data: err
          });
          reject(err);
        })
    );
}
export function stadiumownercreate(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/stdowner/signup', data)
        .then((res) => {
          dispatch({
            type: stadiumowner.create.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: stadiumowner.create.error,
            data: err
          });
          reject(err);
        })
    );
}
export function stadiumownerlist() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/stadium_owner/list')
        .then((res) => {
          dispatch({
            type: stadiumowner.list.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: stadiumowner.list.error,
            data: err
          });
          reject(err);
        })
    );
}
export function stadiumownercount() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/stadium_owner/count')
        .then((res) => {
          if (res.data.data === 'Access Denied, Invalid Token') {
            localStorage.removeItem('AuthTokAdmin');
            window.location.href = '/login';
          }
          dispatch({
            type: stadiumowner.count.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: stadiumowner.count.error,
            data: err
          });
          reject(err);
        })
    );
}
export function eventorglist() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/organizer/list')
        .then((res) => {
          dispatch({
            type: event.List.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: event.List.error,
            data: err
          });
          reject(err);
        })
    );
}
export function eventorgcount() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/organizer/count')
        .then((res) => {
          dispatch({
            type: event.count.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: event.count.error,
            data: err
          });
          reject(err);
        })
    );
}
export function privacypolicyadd(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/addpp', data)
        .then((res) => {
          dispatch({
            type: privacy.add.success,
            data: res?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: privacy.add.error,
            data: err
          });
          reject(err);
        })
    );
}
export function privacypolicylist(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/getpp')
        .then((res) => {
          dispatch({
            type: privacy.list.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: privacy.list.error,
            data: err
          });
          reject(err);
        })
    );
}
export function termsadd(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/addtc', data)
        .then((res) => {
          dispatch({
            type: terms.add.success,
            data: res?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: terms.add.error,
            data: err
          });
          reject(err);
        })
    );
}
export function termslist(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/fetchtc')
        .then((res) => {
          dispatch({
            type: terms.list.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: terms.list.error,
            data: err
          });
          reject(err);
        })
    );
}
export function notifyadd(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/notify', data)
        .then((res) => {
          dispatch({
            type: notify.add.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: notify.add.error,
            data: err
          });
          reject(err);
        })
    );
}
export function addmoderators(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/login', data)
        .then((res) => {
          dispatch({
            type: moderators.add.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: moderators.add.error,
            data: err
          });
          reject(err);
        })
    );
}
export function udpateversion(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/upversion', data)
        .then((res) => {
          dispatch({
            type: version.udpate.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: version.udpate.error,
            data: err
          });
          reject(err);
        })
    );
}

export function getversion(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/version')
        .then((res) => {
          dispatch({
            type: version.get.success,
            data: res?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: version.get.error,
            data: err
          });
          reject(err);
        })
    );
}
export function cataddbanner(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/addbanner', data)
        .then((res) => {
          dispatch({
            type: catbanner.add.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: catbanner.add.error,
            data: err
          });
          reject(err);
        })
    );
}
export function catlistbanner(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/listbanner', data)
        .then((res) => {
          dispatch({
            type: catbanner.list.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: catbanner.list.error,
            data: err
          });
          reject(err);
        })
    );
}
export function catdeletebanner(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/deletebanner', data)
        .then((res) => {
          dispatch({
            type: catbanner.delete.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: catbanner.delete.error,
            data: err
          });
          reject(err);
        })
    );
}
export function mainaddbanner(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/addmainbanner', data)
        .then((res) => {
          dispatch({
            type: mainbanner.add.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: mainbanner.add.error,
            data: err.response.data
          });
          reject(err);
        })
    );
}
export function mainlistbanner(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/listmainbanner')
        .then((res) => {
          dispatch({
            type: mainbanner.list.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: mainbanner.list.error,
            data: err
          });
          reject(err);
        })
    );
}
export function maindeletebanner(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/delmainbanner', data)
        .then((res) => {
          dispatch({
            type: mainbanner.delete.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: mainbanner.delete.error,
            data: err
          });
          reject(err);
        })
    );
}
export function playerCount(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/pcount')
        .then((res) => {
          dispatch({
            type: player.count.success,
            data: res?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: player.count.error,
            data: err
          });
          reject(err);
        })
    );
}
export function playerList(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/getplayer')
        .then((res) => {
          dispatch({
            type: player.list.success,
            data: res?.data.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: player.list.error,
            data: err
          });
          reject(err);
        })
    );
}
export function issuesList(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('get', '/v1/admin/issues/fetch')
        .then((res) => {
          dispatch({
            type: issues.list.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: issues.list.error,
            data: err
          });
          reject(err);
        })
    );
}
export function updateissues(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      axiosInstance('post', '/v1/admin/issues/update')
        .then((res) => {
          dispatch({
            type: issues.update.success,
            data: res?.data?.data
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: issues.update.error,
            data: err
          });
          reject(err);
        })
    );
}
