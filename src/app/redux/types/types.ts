export const tableTypes = {
  asyncLoad: '[TableRedux] start loading data',
  Load: '[TableRedux] load data to reducer',
  clearTable: '[TableRedux] clear data to reducer',
  LoadTableHeads: '[TableRedux] Load tableHeads'
}

export const usersTypes = {
  AsyncLoad: '[usersRedux] start loading data',
  Load: '[usersRedux] load data do reducer',
  Clear: '[usersRedux] clear reducer data',
  Delete: '[usersRedux] delete user',
  Update: '[usersRedux] update user',
  Create: '[usersRedux] create user',
  SelectedUser: '[usersRedux] selected user',
  ClearSelectedUser: '[usersRedux] clear selected user',
}

export const authTypes = {
  asyncLogin: '[Login] asyncLogin',
  Login: '[Login] Action',
  LoginError: '[Login] Login error',
  Loading: '[Login] Loading',
  Logout: '[Logout] Action',
  Register: '[Register] Action',
  UserRequested: '[Request User] Action',
  UserLoaded: '[Load User] Auth API',
  SetUser: '[Set User] Action',
}

export const familiesTypes = {
  AsyncLoad: '[familyRedux] start loading data',
  Load: '[familyRedux] load data do reducer',
  Clear: '[familyRedux] clear reducer data',
  Delete: '[familyRedux] delete family',
  Update: '[familyRedux] update family',
  Create: '[familyRedux] create family',
  SelectedFamily: '[familyRedux] selected family',
  ClearSelectedFamily: '[familyRedux] clear selected family',

  DeleteFromReducer: '[familyRedux] delete family from reducer',
}

export const uiTypes = {
  uiSetError: '[UI] Set Error',
  uiRemoveError: '[UI] Remove Error',
  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',
  uiIsEditing: '[UI] Is editing',
  uiIsCreating: '[UI] Is creating',
}