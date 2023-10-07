import jwt, { JwtPayload } from 'jsonwebtoken';

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: '1h',
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
): string {
  const secretKey: string | undefined = process.env.JWT_SECRET_KEY;
  const token: string = jwt.sign(payload, secretKey!, options);

  return token;
}

export function verifyJwt(token: string) {
  try {
    const secretKey: string | undefined = process.env.JWT_SECRET_KEY;
    const decoded: string | JwtPayload = jwt.verify(token, secretKey!);

    return decoded as JwtPayload;
  } catch (error) {
    console.error(error);
    return null;
  }
}
