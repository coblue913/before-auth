'use client';

import { useSession } from 'next-auth/react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function LoginWrapper() {
  const { data: session } = useSession();

  if (session && session.user) {
    return <LogoutButton />;
  }

  return (
    <div className="space-x-10">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}
