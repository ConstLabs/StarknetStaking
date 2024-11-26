import Link from 'next/link'
import ConnectModel from '@/app/component/connect-model'

export function Navbar() {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto">
        <div className="flex justify-between h-16 items-center">
          <img src="https://docs.starknet.io/_/img/starknet-logo-dark.svg" alt="logo" className="h-10" />
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <ConnectModel />
          </div>
        </div>
      </div>
    </nav>
  )
}
