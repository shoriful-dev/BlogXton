import Footer from '../layouts/Footer';
import RootHeader from './RootHeader'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
    <div>
      <RootHeader/>
      <Outlet/>
      <Footer />
    </div>
  )
}

export default RootLayouts;
