import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { Text } from '../components/Text';

export default component$(() => {
  return (
    <>
      <div>
        <h1>Hello</h1>
        <Text as="span">world</Text>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
