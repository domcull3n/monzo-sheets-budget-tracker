// import express from 'express';
// import open from 'open';
// import { Logger } from 'sitka';
// // import Service from '../service';

// const logger = Logger.getLogger();

// const app = express();

// export default (): void => {
//     app.listen(8000, () => {
//         app.get('/callback', (req, res) => {
//             res.sendFile(__dirname + '/callback.html');
//             if (req.query.error) {
//                 logger.info('Error: ', req.query.error);
//             }
//         });

//         app.get('/token', (req, res) => {
//             res.sendStatus(200);
//             const token = req.query.access_token?.toString();
//             // if (token) {
//             // }
//         });

//         // void open();
//     });
// };
