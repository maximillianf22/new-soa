import { useField, Formik, Form, FormikProps, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../../setup'
import { actions } from '../../redux/UsersRedux'
import { InputDueDate } from '../../../global/components/inputs/InputDueDate';
import { InputSelect } from '../../../global/components/inputs/InputSelect';
import { InputProfile } from '../UserPermits/InputProfile';

const optionsPlataforms = [
  {value: 'addiuva', label: 'Addiuva'},
  {value: 'ikatech', label: 'Ikatech'},
  {value: 'elRoble', label: 'El Roble'},
]

export const FormRegular = () => {
  const SelectedUser: any = useSelector<RootState>(({users}) => users.SelectedUser)
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(actions.ClearSelectedUser());
  }
  // MyTextField puede ir en otro archivo para reducir el tamaño de este componente
  const MyTextField = ({ label, ...props }: any) => { 
    const [field, meta, helpers] = useField(props);
    if (field.value === null) {
      field.value = '';
    }
    return (
      <>
        <label>
          {label}
          <input className="form-control" {...field} {...props} />
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  return (
    <>
      <div className='card' style={{minHeight: '62vh'}}>
      <Formik
       initialValues={{...SelectedUser}}
       enableReinitialize={true}
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
                 {/* <label className='col-form-label required fw-bold fs-6'>Nombre</label> */}
                 <MyTextField type="text" name='first_name' label="Nombre" />
               </div>
               {SelectedUser?.toEdit === true &&
                <div className='col-md-4 px-5 fv-row my-3'>
                  <MyTextField type="text" name='id' label="id" />
                </div>
               }
               <div className='col-md-4 px-5 fv-row my-3'>
               <MyTextField type="text" name='last_name' label="Apellido" />
               </div>
               <div className='col-md-4 px-5 fv-row my-3'>
                <MyTextField type="email" name='email' label="Correo" />
               </div>
               <div className='col-md-4 px-5 fv-row my-3'>
               <MyTextField type="username" name='username' label="Nombre de usuario" />
               </div>

               { SelectedUser.id < 1 && (
                 <>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <MyTextField type="password" name='password' label="Contraseña" />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <MyTextField type="password" name='confirmPassword' label="Confirmar contraseña" />
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

               <div className='col-md-3 px-5 fv-row text-end'>
                 <div className='form-check form-check-custom form-check-solid my-auto h-100'>
                   <MyTextField
                       className='form-check-input h-25px'
                       type='checkbox'
                       name='password_change'
                        checked={ SelectedUser?.password_change }
                       id='flexCheckChecked'
                     />
                   <label className='form-check-label'>¿Permite cambio de contraseña?</label>
                 </div>
               </div>

               <div className='col-md-3 px-5 fv-row'>
                 <div className='my-auto h-100 text-center'>
                   <div className='form-check form-switch form-check-custom form-check-solid'>
                     <MyTextField
                       className='form-check-input h-25px'
                       type='checkbox'
                       name='is_active'
                       id='flexSwitchChecked'
                     />
                     <label className='form-check-label'>¿Activo?</label>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className='px-5 pt-5 fv-row text-end'>
             {SelectedUser?.toEdit === false ? (
               <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >Cerrar</button>
             ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={handleClose}
                  >Cerrar</button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleClose}
                  >Guardar cambios</button>
                </>
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