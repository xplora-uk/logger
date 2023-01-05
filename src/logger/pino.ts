import pino from 'pino';
import { ILogger, ILoggerMessageArg, ILoggerSettings, ILogLevelType } from '../types';
import { makeLogForPino } from '../utils';

export function newPinoLogger(_settings: ILoggerSettings): ILogger {

  const _logger = pino({
    level: _settings.level || 'info',
  }).child(_settings.commonLog);

  function debug(arg: ILoggerMessageArg) {
    if (!isLevelEnabled('debug')) return;
    if (typeof arg === 'string') {
      _logger.debug(arg);
    } else {
      const { message, ...rest } = makeLogForPino(arg);
      _logger.debug(rest, message);
    }
  }

  function info(arg: ILoggerMessageArg) {
    if (!isLevelEnabled('info')) return;
    if (typeof arg === 'string') {
      _logger.info(arg);
    } else {
      const { message, ...rest } = makeLogForPino(arg);
      _logger.info(rest, message);
    }
  }

  function warn(arg: ILoggerMessageArg) {
    if (!isLevelEnabled('warn')) return;
    if (typeof arg === 'string') {
      _logger.warn(arg);
    } else {
      const { message, ...rest } = makeLogForPino(arg);
      _logger.warn(rest, message);
    }
  }

  function error(arg: ILoggerMessageArg) {
    if (!isLevelEnabled('error')) return;
    if (typeof arg === 'string') {
      _logger.error(arg);
    } else {
      const { message, ...rest } = makeLogForPino(arg);
      _logger.error(rest, message);
    }
  }

  function isLevelEnabled(level: ILogLevelType): boolean {
    return _logger.isLevelEnabled(level);
  }

  return {
    _logger,
    _settings,
    debug,
    info,
    warn,
    error,
    isLevelEnabled,
  };
}
