import express from 'express';
import open from 'open';
import { Logger } from 'sitka';
import { getAuthUrl, getToken } from '../sheets/auth';
// import Service from '../service';

const logger = Logger.getLogger();

const app = express();

export default (): void => {
    app.listen(8000, () => {
        app.get('/google/callback', (req, res) => {
            res.sendStatus(200);
            const code = req.query.code?.toString();
            if (code) {
                void getToken(code).then((tokenResponse) => {
                    if (tokenResponse) {
                        logger.info(tokenResponse);
                    }
                });
            }
        });

        void open(getAuthUrl());
    });
};
