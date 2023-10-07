'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      className="rounded-xl border bg-black-300 px-12 py-4"
      onClick={() => signOut()}
    >
      로그아웃
    </button>
  );
}
