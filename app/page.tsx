'use client'
import { Navbar } from '@/components/navbar'
import { StakeForm } from '@/components/form'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="max-w-3xl mx-auto p-6 my-8 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="space-y-4">
            <p className="text-yellow-800">
              This tool is designed for validators to create delegation pools, not for general users and delegators. 
              If you are not planning to run a node yourself, please visit{' '}
              <a href="https://voyager.online/staking-dashboard" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Voyager Staking Dashboard
              </a>{' '}
              for staking.
            </p>
            <p className="text-yellow-800">
              Users should evaluate risks when using this tool. GitHub:{' '}
              <a href="https://github.com/ConstLabs/StarknetStaking" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                ConstLabs/StarknetStaking
              </a>
            </p>
          </div>
        </div>
        <StakeForm />
        <div className="max-w-3xl mx-auto p-6 mt-8 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800">
            After creating your validator, please register it on these platforms:
          </p>
          <div className="mt-4 space-x-4">
            <a 
              href="https://forms.gle/BUMEZx9dpd3DcdaT8" 
              className="inline-block text-blue-600 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Karnot's Dashboard
            </a>
            <span className="text-blue-800">•</span>
            <a 
              href="https://stakingrewards.typeform.com/to/aZdO6pW7" 
              className="inline-block text-blue-600 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Staking Rewards' Dashboard
            </a>
            <span className="text-blue-800">•</span>
            <a 
              href="https://forms.gle/WJqrRbUwxSyG7M9x7" 
              className="inline-block text-blue-600 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Voyager's Dashboard
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
