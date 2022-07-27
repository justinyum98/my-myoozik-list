import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignInCard from './SignInCard';

export default {
  title: 'SignInCard',
  component: SignInCard,
} as ComponentMeta<typeof SignInCard>;

export const Primary: ComponentStory<typeof SignInCard> = () => (
  <SignInCard onSignIn={() => console.log('signed in')} />
);
