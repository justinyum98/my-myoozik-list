import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Layout from '../components/layout';

const Home = () => {
  const { data: session, status } = useSession();

  return (
    <Layout user={session?.user} loading={status === 'loading'}>
      <h1>My Myoozik List</h1>

      {status === 'loading' && <p>Loading login info...</p>}

      {!(status === 'loading') && !session?.user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{' '}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </>
      )}

      {session?.user && (
        <>
          <h4>Rendered user info on the client</h4>
          {session?.user.image && (
            <Image
              src={session?.user.image!}
              alt="user picture"
              width={100}
              height={100}
            />
          )}
          <p>name: {session?.user.name}</p>
          <p>email: {session?.user.email}</p>
        </>
      )}
    </Layout>
  );
};

export default Home;
