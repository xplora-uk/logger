import { ILogger, ILoggerMessageArg, ILoggerSettings, ILogLevelType } from '../types';
import { logLevelValue, LOG_LEVELS, makeLogForConsole } from '../utils';

export function newConsoleLogger(_settings: ILoggerSettings, _logger = console): ILogger {

  function debug(message: ILoggerMessageArg) {
    if (!isLevelEnabled('debug')) return;
    _logger.debug(makeLogForConsole(message, _settings.commonLog));
  }

  function info(message: ILoggerMessageArg) {
    if (!isLevelEnabled('info')) return;
    _logger.info(makeLogForConsole(message, _settings.commonLog));
  }

  function warn(message: ILoggerMessageArg) {
    if (!isLevelEnabled('warn')) return;
    _logger.debug(makeLogForConsole(message, _settings.commonLog));
  }

  function error(message: ILoggerMessageArg) {
    if (!isLevelEnabled('error')) return;
    _logger.debug(makeLogForConsole(message, _settings.commonLog));
  }

  function isLevelEnabled(level: ILogLevelType): boolean {
    const callSetting = logLevelValue(level);
    const loggerSetting = logLevelValue(_settings.level || 'info');
    return loggerSetting <= callSetting;
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
