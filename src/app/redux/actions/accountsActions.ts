// import Swal from 'sweetalert2';

// import { db } from '../firebase/firebase-config';
// import { types } from '../types/types';
// import { loadaccounts } from '../helpers/loadaccounts';
// import { fileUpload } from '../helpers/fileUpload';

import { ResponseGenerator } from '../reducers/AuthRedux';
import { UserModel } from '../../modules/global/models/UserModel';
import { accountTypes } from '../types/accountTypes';

export const accountsActions = {
    load: (payload: any) => ({
        type: accountTypes.accountsLoad,
        payload: {accounts:payload.result}
    }),
    clear: () => ({type: accountTypes.accountsClear,}),
//     updateTableHeads: (payload: any) => ({type: accountTypes.LoadTableHeads, payload: payload}),
  }


// export const startNewNote = () => {
//     return async( dispatch, getState ) => {

//         const { uid } = getState().auth;
        
//         const newNote = {
//             title: '',
//             body: '',
//             date: new Date().getTime()
//         }

//         const doc = await db.collection(`${ uid }/journal/accounts`).add( newNote );

//         dispatch( activeNote( doc.id, newNote ) );
//         dispatch( addNewNote( doc.id, newNote ) );

//     }
// }

// export const activeNote = ( id, note ) => ({
//     type: types.accountsActive,
//     payload: {
//         id,
//         ...note
//     }
// });

// export const addNewNote = ( id, note ) => ({
//     type: types.accountsAddNew,
//     payload: {
//         id, ...note
//     }
// })


// export const startLoadingaccounts = ( uid ) => {
//     return async( dispatch ) => {
        
//         const accounts = await loadaccounts( uid );
//         dispatch( setaccounts( accounts ) );

//     }
// }


// export const setaccounts = ( accounts ) => ({
//     type: types.accountsLoad,
//     payload: accounts
// });


// export const startSaveNote = ( note ) => {
//     return async( dispatch, getState ) => {

//         const { uid } = getState().auth;

//         if ( !note.url ){
//             delete note.url;
//         }

//         const noteToFirestore = { ...note };
//         delete noteToFirestore.id;

//         await db.doc(`${ uid }/journal/accounts/${ note.id }`).update( noteToFirestore );

//         dispatch( refreshNote( note.id, noteToFirestore ) );
//         Swal.fire('Saved', note.title, 'success');
//     }
// }

// export const refreshNote = ( id, note ) => ({
//     type: types.accountsUpdated,
//     payload: {
//         id,
//         note: {
//             id,
//             ...note
//         }
//     }
// });


// export const startUploading = ( file ) => {
//     return async( dispatch, getState ) => {

//         const { active:activeNote } = getState().accounts;

//         Swal.fire({
//             title: 'Uploading...',
//             text: 'Please wait...',
//             allowOutsideClick: false,
//             onBeforeOpen: () => {
//                 Swal.showLoading();
//             }
//         });

//         const fileUrl = await fileUpload( file );
//         activeNote.url = fileUrl;

//         dispatch( startSaveNote( activeNote ) )
        

//         Swal.close();
//     }
// }


// export const startDeleting = ( id ) => {
//     return async( dispatch, getState ) => {
         
//         const uid = getState().auth.uid;
//         await db.doc(`${ uid }/journal/accounts/${ id }`).delete();

//         dispatch( deleteNote(id) );

//     }
// }

// export const deleteNote = (id) => ({
//     type: types.accountsDelete,
//     payload: id
// });


// export const noteLogout = () => ({
//     type: types.accountsLogoutCleaning
// });

