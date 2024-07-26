'use client';
// import { grid } from 'ldrs'
// grid.register()
// Default values shown

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Loader from './Loader';

const Navbar = () => {
    const { status, data: session } = useSession();


    return (
        <div className='flex bg-lime-700 p-5 space-x-3'>
            <Link href="/" className='m-5'>Next.js</Link>
            <Link href="/admin">Admin</Link>
            <Link href="/users">Users</Link>
            {status === 'loading' && (
                <div>
                    <Loader />
                    {/* <l-grid size="60" speed="1.5" color="black"></l-grid> */}
                </div>
            )}
            {status === 'authenticated' && <div>{session.user!.name}<Link href="api/auth/signout" className='ml-3'>Sign Out</Link></div>}
            {status === 'unauthenticated' && <Link href="/api/auth/signin">Sign Up</Link>}
        </div>
    );
}

export default Navbar;


// 'use client';
// import { useSession } from 'next-auth/react';
// import Link from 'next/link';

// const Navbar = () => {
//     const { status, data: session } = useSession();
//     // if (status === 'loading') return null;
//     return (
//         <div className='flex bg-lime-700 p-5 space-x-3'>
//             <Link href="/" className='m-5'>Next.js</Link>
//             <Link href="/admin" >Admin</Link>
//             <Link href="/users" >Users</Link>
//             {status === 'loading' && <div>load</div>}
//             {status === 'authenticated' && <div>{session.user!.name}</div>}
//             {status === 'unauthenticated' && <Link href=" / api / auth / signin">Sign Up</Link>}
//         </div >
//     )
// }

// export default Navbar