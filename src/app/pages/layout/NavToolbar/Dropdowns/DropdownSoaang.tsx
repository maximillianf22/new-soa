import { useSelector } from 'react-redux'
import { RootState } from '../../../../../setup'
import { permitByModule } from '../../../../modules/permits/PermitFilter'
import { ItemDropdown } from './ItemDropdown'

export const DropdownSoaang = () => {
  const {permits}: any = useSelector<RootState>(({permits}) => permits)
  return (
    <>
      <div
        className='menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-3 w-lg-300px'
        data-kt-menu-dismiss='true'
      >
        <div
          className='menu-item menu-lg-down-accordion me-lg-1'
          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
          data-kt-menu-placement='right-start'
        >
          { permitByModule(permits, '_Accounts_') && (
            <ItemDropdown title='Cuentas' link='/accounts/home'/>
          )}
          { permitByModule(permits, '_Plans_') && (
            <ItemDropdown title='Planes' link='/plans/home'/>
          )}
          { permitByModule(permits, '_Services_') && (
            <ItemDropdown title='Servicios' link='/plan-service/home'/>
          )}
          { permitByModule(permits, '_Families_') && (
            <ItemDropdown title='Familias' link='/families/home'/>
          )}
          { permitByModule(permits, '_Providers_') && (
            <ItemDropdown title='Proveedores' link='/providers/home'/>
          )}
        </div>
      </div>
    </>
  )
}
