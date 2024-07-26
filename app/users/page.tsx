
import Link from 'next/link';
import { Suspense } from 'react';
import UserTable from './UserTable';
interface Props {
  searchParams: { sortOrder: string }
}
//   id:number;
//   name:string;
//   email:string;
// }

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <>
      <h1>Users:</h1>
      {/* <p>{new Date().toLocaleTimeString() }</p>  */}
      <Suspense fallback={<p className='text-white'> Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
      <Link href='users/new' className='btn'>New User</Link>

    </>
  )
}

export default UsersPage 