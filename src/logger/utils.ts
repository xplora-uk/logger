// local utility functions; not included in library

import { LOGGER_LEVEL_VALUES } from './constants';
import { ILoggerCommonLog, ILoggerMessageArg, ILoggerMessage, ILogLevel } from '../types';

export const nowIso = (d: Date): string => d.toISOString();
export const nowTs  = (d: Date): number => d.getTime();

export function makeLogForConsole(msg: ILoggerMessageArg, app: ILoggerCommonLog): string {
  const d = new Date();
  const defaults: ILoggerMessage = {
    msg: '',
    date: nowIso(d),
    time: nowTs(d),
    ...app,
  };
  try {
    if (typeof msg === 'string') {
      return JSON.stringify({ ...defaults, msg });
    } else {
      return JSON.stringify({ ...defaults, ...msg });
    }
  } catch (err) {
    return 'makeLogForConsole failed: ' + (err instanceof Error ? err.message : 'unknown error');
  }
}

export function makeLogForPino(msg: ILoggerMessage): ILoggerMessage {
  const d = new Date();
  const defaults: ILoggerMessage = {
    msg: '',
    date: nowIso(d),
    time: nowTs(d),
  };
  return { ...defaults, ...msg };
}

export function logLevelValue(level: ILogLevel): number {
  if (level in LOGGER_LEVEL_VALUES) return LOGGER_LEVEL_VALUES[level];
  return 0;
}
