/**
 * @see https://next-auth.js.org/configuration/initialization#route-handlers-app
 */
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: '아이디', type: 'text', placeholder: '이메일 주소를 입력해주세요' },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials, req) {
        // TODO: DB 에서 username 을 찾고 비밀번호가 맞는지 체크
        const user = { id: '1', name: 'tiger', email: 'coblue@gmail.com' };

        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
});

// as ?로 export 하는 모듈의 이름을 지정할 수 있음
export { handler as GET, handler as POST };
