import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';

import SignInCard from 'src/components/organisms/SignInCard/SignInCard';

const UnauthenticatedView = () => {
  return (
    <SignInCard
      onSignIn={() => signIn('auth0', undefined, { prompt: 'login' })}
    />
  );
};

const AuthenticatedView = () => {
  return (
    <div>
      <p>Signed in!</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  // If user is signed in...
  if (session?.user) {
    return <AuthenticatedView />;
  }

  return <UnauthenticatedView />;
};

export default Home;
