'use client';

import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';

const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.greeting.queryOptions({ text: 'world' })
  );

  return <div>{data.greeting}</div>;
};

export default Client;
