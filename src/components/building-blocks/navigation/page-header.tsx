'use client'

import { useSession } from 'next-auth/react'

import Link from 'next/link'
import LogoutButton from '../auth/logout-button'
import If from '../conditional/if'
import { getServerSession } from 'next-auth'

export default function PageHeader() {
  const { data: session } = useSession()

  return (
    <If condition={session !== null}>
      <header className="fixed w-full flex items-center text-slate-50 bg-slate-800 py-2">
        <nav className="flex w-full items-center justify-between m-auto max-w-screen-xl">
          <Link rel="stylesheet" href="/">
            Logo
          </Link>
          <ul className="flex items-center justify-between gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/public">Public</Link>
            </li>
            <li>
              <Link href="/private">Private</Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </nav>
      </header>
    </If>
  )
}
