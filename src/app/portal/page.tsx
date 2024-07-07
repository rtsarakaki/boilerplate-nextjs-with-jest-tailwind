import LogoutButton from '@/components/building-blocks/auth/logout-button'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getServerSession()

  if (!session) {
    redirect('/')
  }

  return (
    <div>
      <p className="text-primary text-4xl">Olá {session?.user?.name}</p>
      <div>Dashboard</div>
      <LogoutButton />
    </div>
  )
}
