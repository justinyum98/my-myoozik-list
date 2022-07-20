import { useSession } from 'next-auth/react';

import Layout from '../src/components/layout';

const About = () => {
  const { data: session, status } = useSession();

  return (
    <Layout user={session?.user} loading={status === 'loading'}>
      <h1>About</h1>
      <p>
        This is the about page, navigating between this page and <i>Home</i> is
        always pretty fast. However, when you navigate to the <i>Profile</i>{' '}
        page it takes more time because it uses SSR to fetch the user first;
      </p>
    </Layout>
  );
};

export default About;
