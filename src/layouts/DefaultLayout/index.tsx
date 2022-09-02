import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { DefaultLayoutContainner } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainner>
      <Header />
      <Outlet />
    </DefaultLayoutContainner>
  )
}
