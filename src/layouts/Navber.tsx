import { HiBars3CenterLeft } from 'react-icons/hi2';
import Container from '../components/Container';
import { NavLink } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';

const Navber = () => {
  const handleShow = () => {
    console.log('clickdd')
  }
  return (
    <>
      <div className="bg-[#F2F2DE] py-5">
        <Container>
          <nav className="flex justify-between items-center px-5 lg:px-0">
            <div onClick={handleShow}>
              <HiBars3CenterLeft className="text-3xl hover:text-red transition-all duration-500" />
            </div>
            <div>
              <ul className="lg:flex translate-x-1/2 lg:space-x-10 hidden">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'font-bold text-red'
                        : 'font-[600] text-gray-600'
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'font-bold text-red'
                        : 'font-[600] text-gray-600'
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/topic"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'font-bold text-red'
                        : 'font-[600] text-gray-600'
                    }`
                  }
                >
                  Topic
                </NavLink>
                <NavLink
                  to="/post"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'font-bold text-red'
                        : 'font-[600] text-gray-600'
                    }`
                  }
                >
                  Post
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'font-bold text-red'
                        : 'font-[600] text-gray-600'
                    }`
                  }
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/pages"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'font-bold text-red'
                        : 'font-[600] text-gray-600'
                    }`
                  }
                >
                  Pages
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'font-bold text-red'
                        : 'font-[600] text-gray-600'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </ul>
            </div>
            <div className="flex space-x-5 items-center ml-auto">
              <IoSearch className="text-xl text-gray-600 hover:text-red transition-all duration-300" />
              <FaRegUser className="text-xl text-gray-600 hover:text-red transition-all duration-300" />
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navber;
