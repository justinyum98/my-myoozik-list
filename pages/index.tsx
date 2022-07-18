import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';

import Layout from '../components/layout';

const Home = () => {
  const { user, error, isLoading } = useUser();

  return (
    <Layout user={user} loading={isLoading}>
      <h1>My Myoozik List</h1>

      {isLoading && <p>Loading login info...</p>}

      {!isLoading && !user && (
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

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          {user.picture && (
            <Image
              src={user.picture}
              alt="user picture"
              width={100}
              height={100}
            />
          )}
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
        </>
      )}
    </Layout>
  );
};

export default Home;
