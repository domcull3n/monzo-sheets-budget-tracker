import { auth } from '@googleapis/oauth2';
import { googleClientId, googleClientSecret } from '../config';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const redirectUri = 'http://localhost:8000/google/callback';

const oauth2Client = new auth.OAuth2(googleClientId, googleClientSecret, redirectUri);

export const getAuthUrl = (): string =>
    oauth2Client.generateAuthUrl({
        access_type: 'online',
        scope: SCOPES,
    });

export const getToken = async (code: string): Promise<string | null | undefined> => {
    const { tokens } = await oauth2Client.getToken(code);
    return tokens.access_token;
    // oauth2Client.setCredentials(tokens);
};
