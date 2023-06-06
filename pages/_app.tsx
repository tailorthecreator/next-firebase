//redone code

import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        // Retrieve the username from your database or any other source
        // and set it using setUsername
        setUsername('jeff'); // Replace with the actual username
      } else {
        setUser(null);
        setUsername(null);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, username }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;


// original firebase code
// import React from 'react';
// import '../styles/globals.css';
// import Navbar from '@/components/Navbar';
// import { Toaster } from 'react-hot-toast';
// import { UserContext } from '../lib/context';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <UserContext.Provider value={{ user: {}, username: 'jeff' }}>
//       <Navbar />
//       <Component {...pageProps} />
//       <Toaster />
//       </UserContext.Provider>
//     </>
//   );
// }

// export default MyApp;