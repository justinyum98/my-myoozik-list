// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import Image from 'next/image';
import { useUser, UserProfile } from '@auth0/nextjs-auth0';

import Layout from '../components/layout';

type ProfileCardProps = {
  user: UserProfile;
};

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <>
      <h1>Profile</h1>

      <div>
        <h3>Profile (client rendered)</h3>
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
      </div>
    </>
  );
};

const Profile = () => {
  const { user, error, isLoading } = useUser();

  return (
    <Layout user={user} loading={isLoading}>
      {isLoading ? <>Loading...</> : <ProfileCard user={user!} />}
    </Layout>
  );
};

export default Profile;
