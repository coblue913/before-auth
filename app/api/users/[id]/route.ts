import { verifyJwt } from '@/app/lib/jwt';
import prisma from '@/app/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  const accessToken = request.headers.get('authorization');
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: '회원 인증에 실패했습니다.' }), {
      status: 401,
    });
  }

  console.log(params);

  const id: number = Number(params.id);

  const userPosts = await prisma.post.findMany({
    where: {
      authorId: id,
    },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(userPosts));
}
