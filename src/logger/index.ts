import { ILogger, ILoggerSettings } from '../types';
import { newConsoleLogger } from './console';
import { newPinoLogger } from './pino';

export * from './console';
export * from './pino';

export function newLogger(settings: ILoggerSettings): ILogger {

  if (settings.kind === 'console') return newConsoleLogger(settings);

  return newPinoLogger(settings);
}
