'use client';

import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <button
      className="rounded-xl border bg-blue-300 px-12 py-4"
      onClick={(): Promise<undefined> => signIn()}
    >
      로그인
    </button>
  );
}
