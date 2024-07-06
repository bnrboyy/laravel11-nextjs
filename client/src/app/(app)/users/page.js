import Header from '@/app/(app)/Header'
import UserComponent from '@/components/UserComponent'
import axios from '@/lib/axios';

export const metadata = {
    title: 'Laravel - Users',
}

const Users = async () => {
    const users = await getUserData();

    return (
        <>
            <Header title="Users" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <UserComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

async function getUserData() {
    const response = await axios.get('/api/users')
    // console.log(response)
    return response;
}

export default Users
