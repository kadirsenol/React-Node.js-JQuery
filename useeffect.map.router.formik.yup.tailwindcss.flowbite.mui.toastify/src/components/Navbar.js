import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import navbariot from '../assest/image/iotnavbar.png'
import { Login, PersonAdd, ShoppingCartCheckout } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import user from '../assest/image/user2.png'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { Button } from '@mui/material'



const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Login', href: '/Login', current: false },
  { name: 'Register', href: '/Register', current: false },
  { name: 'Profile', href: '/Profile', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
  chackToken();
  },[isLogin])

  const chackToken = ()=>{
    const token = localStorage.getItem("token")
    if(token){
      const deCodeJwt = jwtDecode(token)
      const expToken = deCodeJwt.exp
      let date = new Date();
      const currentDate = date.getTime() / 1000
      console.log(currentDate, expToken)

      if(expToken >= currentDate ){
        console.log(currentDate, expToken)
        setIsLogin(true)
      }
  }
}

  const navigate = useNavigate()
  const products = useSelector((state)=>state.cart.products)
  
  return ( 
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
                <div className="flex flex-shrink-0 justify-center items-center cursor-pointer">             
                  <img
                    className="h-8 w-auto sm:mr-6 hidden sm:block hover:bg-gray-700 rounded-md" 
                    src={navbariot}
                    alt="MyCompany"
                    onClick={()=>(navigate("/"))}                  
                  />
                </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                        <div className='flex'>
                      <button
                        key={item.name}
                        onClick={()=>(navigate(item.href))}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {isLogin ? 
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={()=>{navigate("/Card")}}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <div className='relative'>
                    {products.length!==0 ? <div className=' w-4 h-4 text-xs text-white absolute -top-3 -right-1 bg-red-500 rounded-full'> {products.length} </div> : null }
                     <ShoppingCartCheckout className="h-6 w-6" aria-hidden="true" />
                     </div>
                </button>

                <Menu as="div" className="relative ml-3 hover:bg-slate-500 rounded-xl">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full" 
                        src={user}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          
                          <button                            
                            onClick={()=>{navigate("/Profile")}}
                            className={classNames(active ? 'bg-gray-100 w-full text-left' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}
                          >
                            Your Profile
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={()=>{navigate("/Profile")}}                            
                            className={classNames(active ? 'bg-gray-100 w-full text-left' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}
                          >
                            Settings
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={()=>{navigate("/Card")}}                            
                            className={classNames(active ? 'bg-gray-100 w-full text-left' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}
                          >
                            Your Cart
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={()=>{
                              localStorage.removeItem('token');
                              navigate("/")}}                                                        
                            className={classNames(active ? 'bg-gray-100 w-full text-left' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div> :
              <div className='flex justify-end'>
              <div>
                <Button startIcon={<Login/>} color='success' variant='contained' onClick={()=>navigate("/Login")} >Login</Button>
              </div>
              <div className='ms-2'>
                <Button endIcon={<PersonAdd/>} color='primary' variant='outlined' onClick={()=>navigate("/Register")}>Register</Button>
              </div>
              </div>
                }       
            </div>                      
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={()=>{navigate(item.href)}}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white cursor-pointer' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
