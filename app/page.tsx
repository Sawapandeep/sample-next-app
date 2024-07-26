
//!v1 without heavy componenet 

// Default values shown  
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOption } from "./api/auth/authOptions";
import AssetImages from "./Assetimage/page";
import ProductCard from "./components/ProductCard/ProductCard";

export default async function Home() {
  const session = await getServerSession(authOption)
  return (
    <main >
      <h1>Hello {session && <span>{session.user!.name?.split(" ")[0]}</span>} Poppins</h1>
      <Link href="/users">users</Link>
      <AssetImages />
      <ProductCard />
    </main>

  );
}

// //!v2 with heavy componenet LAZY LOAD large comonents only  
// 'use client';
// import Link from "next/link";
// import { useState } from "react";
// import AssetImages from "./Assetimage/page";
// import ProductCard from "./components/ProductCard/ProductCard";
// // import HeavyComponent from "./components/HeavyComponent"; //?simle import
// import dynamic from "next/dynamic";
// import { grid } from 'ldrs'

// grid.register()
// // Default values shown

// const HeavyComponent = dynamic(                //? lazy loading client comonents
//   () => import('./components/HeavyComponent'),
//   {
//     ssr: false,
//     loading: () => <l-grid size="60" speed="1.5" color="white"></l-grid>
//   });
// // import _ from 'lodash';  //?lazy loading lodash (js library)
// export default
//   // async
//   function Home() {
//   // const session = await getServerSession(authOption)
//   const [isVisible, setVisible] = useState(false);
//   return (
//     <main >
//       <h1>Hello
//         {/* {session && <span>{session.user!.name?.split(" ")[0]}</span>} */}
//         Poppins</h1>
//       <button onClick={() => setVisible(true)}>Show</button>
//       {isVisible && <HeavyComponent />}
//       {/* //?lazy loading */}

//       {/* <button onClick={() => {
//         const user = [{ name: 'c' }, { name: 'a' }, { name: 'e' }];
//         const sorted = _.orderBy(user, ['name']);
//         console.log(sorted);
//       }}>sort</button> */}
//       {/* //?lazyloading  loadsh(js library) //we can also directly import thr lodash library  on button click by: onClick={async () =>
//                                                                                                                          const _=(await imort('lodash').default;)}*/}
//       <Link href="/users">users</Link>
//       <AssetImages />
//       <ProductCard />

//     </main>

//   );
// }
