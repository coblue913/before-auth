import NextAuth from 'next-auth/next';

const handler = NextAuth({
  providers: [],
});

// as ?로 export 하는 모듈의 이름을 지정할 수 있음
export { handler as GET, handler as POST };
