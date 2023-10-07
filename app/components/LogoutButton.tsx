'use client';

function LogoutButton() {
  return (
    <button
      className="rounded-xl border bg-black-300 px-12 py-4"
      onClick={() => logout()}
    >
      로그아웃
    </button>
  );
}

export default LogoutButton;
