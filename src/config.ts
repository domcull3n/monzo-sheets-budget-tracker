import * as dotenv from 'dotenv';

dotenv.config();

export const googleClientId: string | undefined = process.env.GOOGLE_CLIENT_ID;
export const googleClientSecret: string | undefined = process.env.GOOGLE_CLIENT_SECRET;
export const monzoClientId: string | undefined = process.env.MONZO_CLIENT_ID;
export const monzoClientSecret: string | undefined = process.env.MONZO_CLIENT_SECRET;
