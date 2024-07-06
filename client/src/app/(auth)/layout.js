import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'
import Image from 'next/image'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">
                {/* <Image width={100} height={100} src={'https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} /> */}
                <AuthCard
                    logo={
                        <Link href="/">
                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                        </Link>
                    }>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
