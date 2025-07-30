'use client';

import { useTRPC } from '@/trpc/client';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [value, setValue] = useState('');
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success('Background job invoked successfully!');
      },
    })
  );
  return (
    <div className='p-4 max-w-7xl mx-auto'>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ value: value })}
      >
        Invoke Background Job
      </Button>
      <button className='bg-blue-500 bg-opacity-30 backdrop-blur-md hover:bg-opacity-50 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out'>
        Log In
      </button>
    </div>
  );
}
