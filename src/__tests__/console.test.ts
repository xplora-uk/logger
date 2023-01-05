import { expect } from 'chai';
import { newLogger } from '../logger';

describe('console logger at debug level', () => {

  const commonLog = { app_name: 'app', app_version: '1.0.0', env: 'dev' };
  const logger = newLogger({ kind: 'console', level: 'debug', commonLog });

  it('should debug', () => {
    logger.debug('debug here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should info', () => {
    logger.info('info here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should warn', () => {
    logger.warn('warning here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should error', () => {
    logger.error('error here');
    expect(1).to.eq(1); // TODO: how do we check?
  });
});

describe('console logger at info level', () => {

  const commonLog = { app_name: 'app', app_version: '1.0.0', env: 'dev' };
  const logger = newLogger({ kind: 'console', commonLog });

  it('should debug', () => {
    logger.debug('debug here - NOT TO BE PRINTED');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should info', () => {
    logger.info('info here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should warn', () => {
    logger.warn('warning here');
    expect(1).to.eq(1); // TODO: how do we check?
  });

  it('should error', () => {
    logger.error('error here');
    expect(1).to.eq(1); // TODO: how do we check?
  });
});