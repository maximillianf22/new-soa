import React, { useEffect } from 'react'
import {createUserSchemas, initialValues} from './Helpers'
import {InputDueDate, InputSelect} from '../../../global/components/inputs'
import {InputProfile} from '../UserPermits/InputProfile'
import {Field, Form, Formik, FormikProps} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../../setup'
import { UserModel } from '../../../global/models/UserModel'
import { actions } from '../../redux/UsersRedux'

const optionsPlataforms = [
  {value: 'addiuva', label: 'Addiuva'},
  {value: 'ikatech', label: 'Ikatech'},
  {value: 'elRoble', label: 'El Roble'},
]

interface ISelectedUser {
  SelectedUser: UserModel | undefined
}

export const FormRegular = () => {
  const SelectedUser: any = useSelector<RootState>(({users}) => users.SelectedUser)
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(actions.ClearSelectedUser());
  }
  const MyInput = ({ field, form, ...props }: any) => {
    // console.log(field.name)
    // console.log(SelectedUser[field?.name]);
    if (SelectedUser?.toEdit === false) {
      field.value = SelectedUser[field?.name];
    }
    // if (field.name === 'id') {
    //   field.value = SelectedUser?.id;
    // }
    return <input className='form-control' {...field} {...props} />;
  };
  
  const initialValues = {    
    first_name: '',
    id: '',
    last_name: '',
    email: '',
    username: '',
    password_change: false,
  }

  return (
    <>
      <div className='card' style={{minHeight: '62vh'}}>
      <Formik
       initialValues={initialValues}
       onSubmit={(values) => {
         console.log('en submit', values, )
         if (values.id.length > 0) {
           dispatch(actions.updateUser(values))
         } else {
          dispatch(actions.createUser(values))
         }
       }}
     >
       {(props: FormikProps<any>) => (
         <Form>
         <div className='card-body'>
           <div className='card-body py-0 px-4'>
             <div className='row'>
               <div className='col-md-4 px-5 fv-row my-3'>
                 <label className='col-form-label required fw-bold fs-6'>Nombre</label>
                 <Field name='first_name' placeholder='Nombre' component={MyInput}/>
               </div>
               {SelectedUser?.toEdit === true &&
                <div className='col-md-4 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6'>ID</label>
                  <Field name='id' placeholder='id' component={MyInput}/>
                </div>
               }
               <div className='col-md-4 px-5 fv-row my-3'>
                 <label className='col-form-label required fw-bold fs-6'>Apellido</label>
                 <Field name='last_name' placeholder='Apellido' component={MyInput}/>
               </div>
               <div className='col-md-4 px-5 fv-row my-3'>
                 <label className='col-form-label required fw-bold fs-6'>Correo</label>
                 <Field name='email' type='email' placeholder='Correo' component={MyInput}/>
               </div>
               <div className='col-md-4 px-5 fv-row my-3'>
                 <label className='col-form-label required fw-bold fs-6'>Usuario</label>
                 <Field name='username' placeholder='Usuario' component={MyInput}/>
               </div>
               
               { !SelectedUser && (
                 <>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <label className='col-form-label required fw-bold fs-6'>Contraseña</label>
                    <Field name='password' type='password' placeholder='Contraseña' component={MyInput}/>
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <label className='col-form-label required fw-bold fs-6'>
                      Confirmar contraseña
                    </label>
                    <Field name='confirmPassword' type='password' placeholder='Confirmar' component={MyInput}/>
                  </div>
                 </>
               ) }
               <div className='col-md-4 px-5 fv-row my-3'>
                { SelectedUser ? (
                  <InputDueDate init_date_validity={SelectedUser.init_date_validity} end_date_validity={SelectedUser.end_date_validity} isRequired='required' />
                ) : (
                  <InputDueDate isRequired='required' />
                ) }
               </div>
               <div className='col-md-4 px-5 fv-row my-3'>
                 <label className='col-form-label required fw-bold fs-6'>Plataforma</label>
                 <Field name='plataform' component={InputSelect} options={optionsPlataforms} />
               </div>
               <div className='col-md-4 px-5 fv-row my-3'>
                 <InputProfile />
               </div>

               {/* TODO: cambiar los checkboxes de toda la plataforma a los que trae react-bootstrap-formik
               <Form.Checkbox
                 custom
                 label='Checkbox 1'
                 name='checkbox1'
                 onChange={function noRefCheck() {}}
               /> */}

               {/* <div className='col-md-3 px-5 fv-row text-end'>
                 <div className='form-check form-check-custom form-check-solid my-auto h-100'>
                   <Field
                     className='form-check-input h-25px w-25px'
                     name='password_change'
                     type='checkbox'
                     checked={ SelectedUser?.password_change }
                     id='flexCheckChecked'
                   />
                   <label className='form-check-label'>¿Permite cambio de contraseña?</label>
                 </div>
               </div> */}

               {/* <div className='col-md-3 px-5 fv-row'>
                 <div className='my-auto h-100 text-center'>
                   <div className='form-check form-switch form-check-custom form-check-solid'>
                     <input
                       className='form-check-input h-25px'
                       type='checkbox'
                       value=''
                       id='flexSwitchChecked'
                     />
                     <label className='form-check-label'>¿Activo?</label>
                   </div>
                 </div>
               </div> */}
             </div>
           </div>
           <div className='px-5 pt-5 fv-row text-end'>
             {/* <button className='btn btn-primary' type='submit'>
               Guardar
             </button> */}

             {SelectedUser?.toEdit === false ? (
               <button 
                  type="button" 
                  className="btn btn-secondary" 
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >Cerrar</button>
             )
              : (
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >Guardar cambios</button>
             )}
           </div>
         </div>
       </Form>
       )}
     </Formik>
        
      </div>
    </>
  )
}


// export const FormRegular = () => {
  //   return (
  //     <>
  //       <div className='card' style={{minHeight: '62vh'}}>
  //         <Form
  //           initialValues={initialValues}
  //           validationSchema={createUserSchemas}
  //           onSubmit={({value}) => {
  //             console.log(value)
  //           }}
  //         >
  //           <div className='card-body'>
  //             <div className='card-body py-0 px-4'>
  //               <div className='row'>
  //                 <div className='col-md-4 px-5 fv-row my-3'>
  //                   <label className='col-form-label required fw-bold fs-6'>Nombre</label>
  //                   <Form.Input name='name' placeholder='Nombre' />
  //                 </div>
  //                 <div className='col-md-4 px-5 fv-row my-3'>
  //                   <label className='col-form-label required fw-bold fs-6'>Apellido</label>
  //                   <Form.Input name='lastName' placeholder='Apellido' />
  //                 </div>
  //                 <div className='col-md-4 px-5 fv-row my-3'>
  //                   <label className='col-form-label required fw-bold fs-6'>Correo</label>
  //                   <Form.Input name='email' type='email' placeholder='Correo' />
  //                 </div>
  //                 <div className='col-md-4 px-5 fv-row my-3'>
  //                   <label className='col-form-label required fw-bold fs-6'>Usuario</label>
  //                   <Form.Input name='username' placeholder='Usuario' />
  //                 </div>
                  
  //                 <div className='col-md-4 px-5 fv-row my-3'>
  //                   <label className='col-form-label required fw-bold fs-6'>Contraseña</label>
  //                   <Form.Input name='password' type='password' placeholder='Contraseña' />
  //                 </div>
  //                 <div className='col-md-4 px-5 fv-row my-3'>
  //                   <label className='col-form-label required fw-bold fs-6'>
  //                     Confirmar contraseña
  //                   </label>
  //                   <Form.Input name='confirmPassword' type='password' placeholder='Confirmar' />
  //                 </div>
  //                 <div className='col-md-4 px-5 fv-row my-3'>
  //                   <InputDueDate isRequired='required' />
  //                 </div>
  //                 <div className='col-md-4 px-5 fv-row my-3'>
  //                   <label className='col-form-label required fw-bold fs-6'>Plataforma</label>
  //                   <Field name='plataform' component={InputSelect} options={optionsPlataforms} />
  //                 </div>
  //                 <div className='col-md-4 px-5 fv-row my-3'>
  //                   <InputProfile />
  //                 </div>
  
  //                 {/* TODO: cambiar los checkboxes de toda la plataforma a los que trae react-bootstrap-formik
  //                 <Form.Checkbox
  //                   custom
  //                   label='Checkbox 1'
  //                   name='checkbox1'
  //                   onChange={function noRefCheck() {}}
  //                 /> */}
  
  //                 <div className='col-md-3 px-5 fv-row text-end'>
  //                   <div className='form-check form-check-custom form-check-solid my-auto h-100'>
  //                     <input
  //                       className='form-check-input h-25px w-25px'
  //                       type='checkbox'
  //                       value=''
  //                       id='flexCheckChecked'
  //                     />
  //                     <label className='form-check-label'>¿Permite cambio de contraseña?</label>
  //                   </div>
  //                 </div>
  
  //                 <div className='col-md-3 px-5 fv-row'>
  //                   <div className='my-auto h-100 text-center'>
  //                     <div className='form-check form-switch form-check-custom form-check-solid'>
  //                       <input
  //                         className='form-check-input h-25px'
  //                         type='checkbox'
  //                         value=''
  //                         id='flexSwitchChecked'
  //                       />
  //                       <label className='form-check-label'>¿Activo?</label>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className='px-5 pt-5 fv-row text-end'>
  //               <button className='btn btn-primary' type='submit'>
  //                 Guardar
  //               </button>
  //             </div>
  //           </div>
  //         </Form>
  //       </div>
  //     </>
  //   )
  // }