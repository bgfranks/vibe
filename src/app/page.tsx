'use client';

import { useTRPC } from '@/trpc/client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

export default function Home() {
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
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ text: 'Test' })}
      >
        Invoke Background Job
      </Button>
    </div>
  );
}
