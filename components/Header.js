import React from 'react'
import {
  header,
  logo,
  img,
  span,
  ul,
  li,
  active
} from '../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = ({ navigations }) => {
  const router = useRouter()
  return (
    <header className={header}>
      <div>
        <Link href='/'>
          <a className={logo}>
            <img src='logo.svg' className={img} />
            <span className={span}>Next Movie</span>
          </a>
        </Link>
      </div>
      <nav>
        <ul className={ul}>
          {navigations.map(navigation => {
            return (
              <li key={navigations.id} className={li}>
                <Link href={navigation.slug}>
                  <a
                    className={
                      router.pathname === navigation.slug ? active : ''
                    }
                  >
                    {navigation.title}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
