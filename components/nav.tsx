import cn from 'classnames'
import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import Container from './container'
import { useSession } from "next-auth/react"
import useTranslation from 'next-translate/useTranslation'
import AppContext from '../lib/AppContext'
export default function NavBar() {
  const appConfig = useContext(AppContext)
  const { t } = useTranslation("nav");
  const { data: session } = useSession()

  const NAV = {
    navigation: [
      { name: 'articles', href: `${appConfig.links.articles}`, current: false },
      { name: 'about', href: `${appConfig.links.about}`, current: false },
    ],
    navUser: [
      { name: 'profile', href: `${appConfig.links.profile}` },
      { name: 'settings', href: `${appConfig.links.settings}` },
      { name: 'sign out', href: `${appConfig.links.signOut}` },
    ],
    signIn: `${appConfig.links.signIn}`,
    msg: `${appConfig.links.message}`,

  }

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed min-w-full top-0 z-10 ">
      {({ open }) => (
        <>
          <Container>
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden duration-300">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center ">
                  <Link href='/'>
                    <a className="block lg:hidden h-8 w-8 ">
                      <Image
                        src="/favicon.ico"
                        width={32}
                        height={32}
                        alt="WeusCloud"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hidden lg:block h-8 w-8">
                      <Image
                        width={32}
                        height={32}
                        src="/favicon.ico"
                        alt="WeusCloud"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {NAV.navigation.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                      >
                        <a
                          key={item.name}
                          className={cn(
                            item.current ? 'bg-gray-900 text-white' : 'cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {t(item.name)}
                        </a>
                      </Link>

                    ))}
                  </div>
                </div>
              </div>
              {session && (session.user?.email || session.user?.name) ? (<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="hidden md:block bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >

                  <Link href={NAV.msg}>
                    <a >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </a>

                  </Link>

                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative z-10 ">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm ">
                      <span className="sr-only">Open user menu</span>
                      <div className="relative h-6 w-6 opacity-90 duration-300 hover:opacity-100">
                      <Image
                       layout='fill'
                       className='rounded-full'
                        src={session.user.image||'/user/default.png'}
                        alt="Personal Info"
                      />
                      </div>
                      
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ">
                      {NAV.navUser.map(item => (
                        <Menu.Item key={item.name}>
                          <Link
                            key={item.name}
                            href={item.href}>
                            <a
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 '
                            >
                              {t(item.name)}
                            </a>
                          </Link>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>) : (
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <Link href={NAV.signIn}>
                    <a className=' px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md'>Sign In</a>
                  </Link>
                </div>)}
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {NAV.navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={cn(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {t(item.name)}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Container>


        </>
      )}
    </Disclosure>
  )
}
