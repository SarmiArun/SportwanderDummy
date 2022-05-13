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
  stadium,
  player,
  issues,
  Sponsor
} from '../actiontype/actiontype';

const initialState = {};

export const userlogin = (state = initialState, actions) => {
  switch (actions.type) {
    case user.login.success:
      return {
        status: true,
        payload: actions.data
      };
    case user.login.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const kyclistall = (state = initialState, actions) => {
  switch (actions.type) {
    case KYC.all.success:
      return {
        status: true,
        payload: actions.data
      };
    case KYC.all.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const kycverify = (state = initialState, actions) => {
  switch (actions.type) {
    case KYC.verify.success:
      return {
        status: true,
        payload: actions.data
      };
    case KYC.verify.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const kycpending = (state = initialState, actions) => {
  switch (actions.type) {
    case KYC.pending.success:
      return {
        status: true,
        payload: actions.data
      };
    case KYC.pending.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const kycreject = (state = initialState, actions) => {
  switch (actions.type) {
    case KYC.rejected.success:
      return {
        status: true,
        payload: actions.data
      };
    case KYC.rejected.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const kycupdate = (state = initialState, actions) => {
  switch (actions.type) {
    case KYC.update.success:
      return {
        status: true,
        payload: actions.data
      };
    case KYC.update.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumownercreate = (state = initialState, actions) => {
  switch (actions.type) {
    case stadiumowner.create.success:
      return {
        status: true,
        payload: actions.data
      };
    case stadiumowner.create.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumownerlist = (state = initialState, actions) => {
  switch (actions.type) {
    case stadiumowner.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case stadiumowner.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumownercount = (state = initialState, actions) => {
  switch (actions.type) {
    case stadiumowner.count.success:
      return {
        status: true,
        payload: actions.data
      };
    case stadiumowner.count.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumeventlist = (state = initialState, actions) => {
  switch (actions.type) {
    case event.List.success:
      return {
        status: true,
        payload: actions.data
      };
    case event.List.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumlist = (state = initialState, actions) => {
  switch (actions.type) {
    case stadium.List.success:
      return {
        status: true,
        payload: actions.data
      };
    case stadium.List.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const stadiumupdate = (state = initialState, actions) => {
  switch (actions.type) {
    case stadium.update.success:
      return {
        status: true,
        payload: actions.data
      };
    case stadium.update.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const eventorgcount = (state = initialState, actions) => {
  switch (actions.type) {
    case event.count.success:
      return {
        status: true,
        payload: actions.data
      };
    case event.count.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const privacypolicyadd = (state = initialState, actions) => {
  switch (actions.type) {
    case privacy.add.success:
      return {
        status: true,
        payload: actions.data
      };
    case privacy.add.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const privacypolicylist = (state = initialState, actions) => {
  switch (actions.type) {
    case privacy.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case privacy.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const sponseradd = (state = initialState, actions) => {
  switch (actions.type) {
    case Sponsor.add.success:
      return {
        status: true,
        payload: actions.data
      };
    case Sponsor.add.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const sponserlist = (state = initialState, actions) => {
  switch (actions.type) {
    case Sponsor.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case Sponsor.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const sponserdelete = (state = initialState, actions) => {
  switch (actions.type) {
    case Sponsor.delete.success:
      return {
        status: true,
        payload: actions.data
      };
    case Sponsor.delete.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const termsadd = (state = initialState, actions) => {
  switch (actions.type) {
    case terms.add.success:
      return {
        status: true,
        payload: actions.data
      };
    case terms.add.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const termslist = (state = initialState, actions) => {
  switch (actions.type) {
    case terms.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case terms.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const notifyadd = (state = initialState, actions) => {
  switch (actions.type) {
    case notify.add.success:
      return {
        status: true,
        payload: actions.data
      };
    case notify.add.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const addmoderators = (state = initialState, actions) => {
  switch (actions.type) {
    case moderators.add.success:
      return {
        status: true,
        payload: actions.data
      };
    case moderators.add.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const updateversion = (state = initialState, actions) => {
  switch (actions.type) {
    case version.udpate.success:
      return {
        status: true,
        payload: actions.data
      };
    case version.udpate.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const getversion = (state = initialState, actions) => {
  switch (actions.type) {
    case version.get.success:
      return {
        status: true,
        payload: actions.data
      };
    case version.get.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const cataddbanner = (state = initialState, actions) => {
  switch (actions.type) {
    case catbanner.add.success:
      return {
        status: true,
        payload: actions.data
      };
    case catbanner.add.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const catlistbanner = (state = initialState, actions) => {
  switch (actions.type) {
    case catbanner.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case catbanner.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const catdeletebanner = (state = initialState, actions) => {
  switch (actions.type) {
    case catbanner.delete.success:
      return {
        status: true,
        payload: actions.data
      };
    case catbanner.delete.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const mainaddbanner = (state = initialState, actions) => {
  switch (actions.type) {
    case catbanner.add.success:
      return {
        status: true,
        payload: actions.data
      };
    case catbanner.add.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const mainlistbanner = (state = initialState, actions) => {
  switch (actions.type) {
    case catbanner.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case catbanner.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const maindeletebanner = (state = initialState, actions) => {
  switch (actions.type) {
    case catbanner.delete.success:
      return {
        status: true,
        payload: actions.data
      };
    case catbanner.delete.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const playerCount = (state = initialState, actions) => {
  switch (actions.type) {
    case player.count.success:
      return {
        status: true,
        payload: actions.data
      };
    case player.count.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const playerList = (state = initialState, actions) => {
  switch (actions.type) {
    case player.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case player.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const issuesList = (state = initialState, actions) => {
  switch (actions.type) {
    case issues.list.success:
      return {
        status: true,
        payload: actions.data
      };
    case issues.list.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
export const updateissues = (state = initialState, actions) => {
  switch (actions.type) {
    case issues.update.success:
      return {
        status: true,
        payload: actions.data
      };
    case issues.update.error:
      return {
        status: false,
        payload: actions.data
      };
    default:
      return state;
  }
};
