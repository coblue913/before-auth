'use client';

function LoginButton() {
  return (
    <button
      className="rounded-xl border bg-blue-300 px-12 py-4"
      onClick={() => login()}
    >
      로그인
    </button>
  );
}

export default LoginButton;
