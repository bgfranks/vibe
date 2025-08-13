'use client';

import { useState } from 'react';
import { useTRPC } from '@/trpc/client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [value, setValue] = useState('');
  const trpc = useTRPC();
  const router = useRouter();

  const createProject = useMutation(
    trpc.projects.create.mutationOptions({
      onSuccess: (data) => {
        toast.success('Project created!');
        router.push(`/projects/${data.id}`);
      },
      onError: (e) => {
        toast.error(`Error: ${e.message}`);
      },
    })
  );
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='max-w-7xl mx-auto flex items-center flex-col gap-y-4 justify-center'>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Button
          disabled={createProject.isPending}
          onClick={() => createProject.mutate({ value: value })}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
