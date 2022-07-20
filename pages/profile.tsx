// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Layout from '../src/components/templates/Layout';

type ProfileCardProps = {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <>
      <h1>Profile</h1>

      <div>
        <h3>Profile (client rendered)</h3>
        {user.image && (
          <Image src={user.image} alt="user picture" width={100} height={100} />
        )}
        <p>name: {user.name}</p>
        <p>email: {user.email}</p>
      </div>
    </>
  );
};

const Profile = () => {
  const { data: session, status } = useSession();

  return (
    <Layout user={session?.user} loading={status === 'loading'}>
      {status === 'loading' ? (
        <>Loading...</>
      ) : (
        <ProfileCard user={session?.user!} />
      )}
    </Layout>
  );
};

export default Profile;
