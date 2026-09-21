
const Header = ({ handleLogout, currentUser }) => {
    const storage = localStorage.getItem('loggedInUser') ? localStorage : sessionStorage
    return (
        <div className='flex justify-between py-10 items-center text-white '>
            <div>
                <h2 className='text-4xl'>Hello,</h2>
                <h1 className='text-5xl font-semibold tracking-tight'>
                    {JSON.parse(storage.getItem('loggedInUser')).role === 'admin'
                        ? 'Nishkarsh'
                        : currentUser.name
                    } 👋🏼
                </h1>
            </div>
            <button onClick={handleLogout}
                className='bg-red-400 px-5 py-2 rounded-md font-semibold cursor-pointer'>Log Out</button>
        </div>
    )
}

export default Header
