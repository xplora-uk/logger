import { LOGGER_DEFAULT_LEVEL } from '../constants';
import { ILogger, ILoggerMessageArg, ILoggerSettingsRequired, ILogLevel } from '../../types';
import { logLevelValue, makeLogForConsole } from '../utils';

export function newConsoleLogger(_settings: ILoggerSettingsRequired, _logger = console): ILogger {

  function debug(msg: ILoggerMessageArg) {
    if (!isLevelEnabled('debug')) return;
    _logger.debug(makeLogForConsole(msg, _settings.app));
  }

  function info(msg: ILoggerMessageArg) {
    if (!isLevelEnabled('info')) return;
    _logger.info(makeLogForConsole(msg, _settings.app));
  }

  function warn(msg: ILoggerMessageArg) {
    if (!isLevelEnabled('warn')) return;
    _logger.debug(makeLogForConsole(msg, _settings.app));
  }

  function error(msg: ILoggerMessageArg) {
    if (!isLevelEnabled('error')) return;
    _logger.debug(makeLogForConsole(msg, _settings.app));
  }

  function isLevelEnabled(level: ILogLevel): boolean {
    const callSetting = logLevelValue(level);
    const loggerSetting = logLevelValue(_settings.level || LOGGER_DEFAULT_LEVEL);
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
