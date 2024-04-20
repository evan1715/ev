/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('morgan').TokenIndexer} TokenIndexer
 * @typedef {import('../utils/bodyConverter').body} Body
 *
 * @typedef {object} MorganTokens
 * @property {(req: Request) => string} url - request url
 * @property {(req: Request) => string } method - request method
 * @property {(req: Request, res: Response, digits: number) => string} responseTime -
 * ["response-time"] - response time in ms
 * @property {(req: Request, res: Response, digits: number) => string} totalTime -
 * ["total-time"] - total time in ms
 * @property {(req: Request, res: Response, format: 'clf'|'iso'|'web') => string} date -
 * current date
 * @property {(req: Request, res: Response) => string} status - response status code
 * @property {(req: Request) => string} referrer - normalized referrer
 * @property {(req: Request) => string} remoteAddr - ["remote-addr"] - remote address
 * @property {(req: Request) => string} remoteUser - ["remote-user"] - remote user
 * @property {(req: Request) => string} httpVersion - ["http-version"] - HTTP version
 * @property {(req: Request) => string} userAgent - ["user-agent"] - UA string
 * @property {(req: Request, res: Response, field: string) => string} req - request header
 * @property {(req: Request, res: Response, field: string) => string} res - response header
 */

const morgan = require('morgan');
const bodyConverter = require('../utils/bodyConverter');
const colors = require('./colors');

/** @param {Response} res */
const contentLengthStr = (res) => {
    const length = Number(res.getHeader('content-length')); //OCTETs (bytes) to kilobytes
    const converted = length / 1024;

    if (!length || isNaN(converted)) {
        return '-';
    } else if (converted < 0.1) {
        return '<.1kb';
    }
    return converted.toFixed(1) + 'kb';
};

/** @param {TokenIndexer} tokens @param {Request} req @param {Response} res */
const httpLogger = function ({ ['response-time']: responseTime }, req, res) {
    const { banana, cherry, lime, orange, plum, teal } = colors; //colors
    const { method, url } = req;
    const { statusCode: status } = res;
    const contentLength = contentLengthStr(res);
    const responseTimeAdjusted = responseTime && Number(responseTime(req, res)).toFixed(0);

    return [
        plum(method),
        Number(status) < 400 ? lime(url) : cherry(url),
        teal(status),
        orange(responseTime ? responseTimeAdjusted + 'ms' : '-'),
        banana(contentLength || '-'),
        bodyConverter(res.statusMessage),
    ].join(' ');
};

module.exports = morgan(httpLogger);
