import { expect } from 'chai';
import { randomUUID } from 'crypto';
import { newLogger } from '../logger';

const app = { app_name: 'app', app_version: '1.0.0', env: 'dev' };
const request_id = randomUUID();

describe('console logger at debug level', () => {

  const logger = newLogger({ kind: 'console', level: 'debug', app });

  it('should debug string', () => {
    logger.debug('debug here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  // string input
  it('should info string', () => {
    logger.info('info here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should warn string', () => {
    logger.warn('warning here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should error string', () => {
    logger.error('error here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  // object input
  it('should debug object', () => {
    logger.debug({ msg: 'debug here', request_id });
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should info object', () => {
    logger.info({ msg: 'info here', request_id });
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should warn object', () => {
    logger.warn({ msg: 'warning here', request_id });
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should error object', () => {
    logger.error({ msg: 'error here', request_id });
    expect(1).to.eq(1); // TODO: how do we check?
  });
});

describe('console logger at info level', () => {

  const logger = newLogger({ kind: 'console', app });

  // check log level
  it('should return false for log level debug', () => {
    const result = logger.isLevelEnabled('debug');
    expect(result).to.eq(false);
  });

  it('should return true for log level info', () => {
    const result = logger.isLevelEnabled('info');
    expect(result).to.eq(true);
  });

  // string input
  it('should NOT debug string', () => {
    logger.debug('debug here - NOT TO BE PRINTED');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should info string', () => {
    logger.info('info here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should warn string', () => {
    logger.warn('warning here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should error string', () => {
    logger.error('error here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  // object input
  it('should NOT debug object', () => {
    logger.debug({ msg: 'debug here - NOT TO BE PRINTED', request_id });
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should info object', () => {
    logger.info({ msg: 'info here', request_id });
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should warn object', () => {
    logger.warn({ msg: 'warning here', request_id });
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should error object', () => {
    logger.error({ msg: 'error here', request_id });
    expect(1).to.eq(1); // TODO: how do we check?
  });
});
