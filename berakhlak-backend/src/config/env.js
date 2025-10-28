import 'dotenv/config';

export const config = {
  env: process.env.NODE_ENV,
  port: Number(process.env.PORT),
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
  },
  cookie: {
    secure: process.env.COOKIE_SECURE,
    sameSite: 'lax', //ubah ke none kalau beda https + domain
    name: 'access_token'
  }
};
