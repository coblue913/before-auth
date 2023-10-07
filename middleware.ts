export { default } from 'next-auth/middleware';

/**
 * 인증이 필요한 경로를 추가
 */
export const config = {
  matcher: ['/posts/:path*'],
};
