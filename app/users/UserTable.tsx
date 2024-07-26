import { sort } from 'fast-sort';
import Link from 'next/link';
interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }); ////!fresh data everytime
  // const res =await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:6}}); ////!fresh data after a limited time(seconds)
  const users: User[] = await res.json();
  const sortedUsers = sort(users).asc(sortOrder === 'email' ? user => user.name : user => user.name);

  return (

    <table className='table table-bordered'>
      <thead>
        <tr>
          <th><Link href="/users?sortOrder=name" className='text-white text-xl'>Name</Link></th>
          <th><Link href="/users?sortOrder=email" className='text-white text-xl'>Email</Link></th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map(user => <tr key={user.id}><td>{user.name}</td>
          <td>{user.email}</td></tr>)}
      </tbody>
    </table>
  )
}

export default UserTable    