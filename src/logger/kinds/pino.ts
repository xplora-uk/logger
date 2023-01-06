import pino from 'pino';
import { ILogger, ILoggerMessageArg, ILoggerSettingsRequired, ILogLevel } from '../../types';
import { makeLogForPino } from '../utils';

export function newPinoLogger(_settings: ILoggerSettingsRequired): ILogger {

  const _logger = pino({
    level: _settings.level || 'info',
  }).child(_settings.app);

  function debug(arg: ILoggerMessageArg) {
    if (!isLevelEnabled('debug')) return;
    if (typeof arg === 'string') {
      _logger.debug(arg);
    } else {
      const { msg, ...rest } = makeLogForPino(arg);
      _logger.debug(rest, msg);
    }
  }

  function info(arg: ILoggerMessageArg) {
    if (!isLevelEnabled('info')) return;
    if (typeof arg === 'string') {
      _logger.info(arg);
    } else {
      const { msg, ...rest } = makeLogForPino(arg);
      _logger.info(rest, msg);
    }
  }

  function warn(arg: ILoggerMessageArg) {
    if (!isLevelEnabled('warn')) return;
    if (typeof arg === 'string') {
      _logger.warn(arg);
    } else {
      const { msg, ...rest } = makeLogForPino(arg);
      _logger.warn(rest, msg);
    }
  }

  function error(arg: ILoggerMessageArg) {
    //if (!isLevelEnabled('error')) return; // highest level already
    if (typeof arg === 'string') {
      _logger.error(arg);
    } else {
      const { msg, ...rest } = makeLogForPino(arg);
      _logger.error(rest, msg);
    }
  }

  function isLevelEnabled(level: ILogLevel): boolean {
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
