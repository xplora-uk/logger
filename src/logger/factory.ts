import { LOGGER_DEFAULT_KIND, LOGGER_DEFAULT_LEVEL, LOGGER_VALID_KINDS, LOGGER_VALID_LEVELS } from './constants';
import { ILogger, ILoggerSettings, ILoggerSettingsRequired, LoggerKindEnum } from '../types';
import { newConsoleLogger } from './kinds/console';
import { newPinoLogger } from './kinds/pino';

export function newLogger(settings: ILoggerSettings): ILogger {

  const { kind = LOGGER_DEFAULT_KIND, level = LOGGER_DEFAULT_LEVEL } = settings;

  const _settings: ILoggerSettingsRequired = {
    kind,
    level,
    ...settings,
  };
  
  _settings.kind  = LOGGER_VALID_KINDS.includes(kind) ? kind : LOGGER_DEFAULT_KIND;
  _settings.level = LOGGER_VALID_LEVELS.includes(level) ? level : LOGGER_DEFAULT_LEVEL;

  if (_settings.kind === LoggerKindEnum.CONSOLE) return newConsoleLogger(_settings);

  return newPinoLogger(_settings);
}
