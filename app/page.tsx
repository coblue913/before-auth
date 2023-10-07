import LoginWrapper from './components/LoginWrapper';

/**
 * Next.js 앱의 시작 포인트
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-semibold">BeforeAuth</h1>
      <LoginWrapper />
    </main>
  );
}
