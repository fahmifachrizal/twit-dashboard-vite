import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    <>
      <div className='flex font-raleway'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout