import {toAbsoluteUrl} from '../../../helpers'

export function FallbackView() {
  return (
    <div className='splash-screen'>
      <img src={toAbsoluteUrl('/media/soa/layout/logo.svg')} alt='Start logo' />
      <span>Cargando...</span>
    </div>
  )
}
