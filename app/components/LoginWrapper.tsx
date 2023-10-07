'use client';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function LoginWrapper() {
  return (
    <div className="space-x-10">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default LoginWrapper;
