'use client'

import { useAuth } from '@/hooks/auth'
import { useEffect } from 'react'

export default function UserComponent() {
    const { user } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div className="flex item-center">
            <div className="text-sm font-medium text-gray-900">
                {user?.name}
            </div>
            <div className="ml-2 text-sm text-gray-500">{user?.email}</div>
        </div>
    )
}
