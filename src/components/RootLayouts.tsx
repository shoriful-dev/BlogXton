
import RootHeader from './RootHeader'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
    <div>
      <RootHeader/>
      <Outlet/>
    </div>
  )
}

export default RootLayouts;
