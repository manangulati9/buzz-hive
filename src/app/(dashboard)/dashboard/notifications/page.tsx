import Notificationlist from '@/components/dashboard/notifications/Notificationlist'
import React from 'react'

function Page() {
  return (
    <div className='h-[100dvh] max-w-5xl container flex justify-between items-center py-10'>
      <Notificationlist />
    </div>
  )
}

export default Page
