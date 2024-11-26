import Link from 'next/link'
import ConnectModel from '@/app/component/connect-model'

export function Navbar() {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto">
        <div className="flex justify-between h-16 items-center">
          <img src="/Constlab_logo.svg" alt="Constlabs Logo" className="h-10" />
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <ConnectModel />
          </div>
        </div>
      </div>
    </nav>
  )
}
