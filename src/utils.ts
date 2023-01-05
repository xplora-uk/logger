// not included in index.ts, hence library

import { ILoggerCommonLogType, ILoggerMessageArg, ILoggerMessageType, ILogLevelType } from './types';

export const now = (): string => new Date().toISOString();

export function makeLogForConsole(message: ILoggerMessageArg, common?: ILoggerCommonLogType): string {
  const defaults: ILoggerMessageType = {
    message: '',
    date: now(),
    ...(common || {}),
  };
  try {
    if (typeof message === 'string') {
      return JSON.stringify({ ...defaults, message });
    } else {
      return JSON.stringify({ ...defaults, ...message });
    }
  } catch (err) {
    return 'makeLog failed: ' + (err instanceof Error ? err.message : 'unknown error');
  }
}

export function makeLogForPino(message: ILoggerMessageType): ILoggerMessageType {
  const defaults: ILoggerMessageType = { date: now(), message: '' };
  if (typeof message === 'string') {
    return { ...defaults, message };
  } else {
    return { ...defaults, ...message };
  }
}

export const LOG_LEVELS: Record<ILogLevelType, number> = {
  debug: 1,
  info:  2,
  warn:  3,
  error: 4,
};

export function logLevelValue(level: ILogLevelType): number {
  if (level in LOG_LEVELS) return LOG_LEVELS[level];
  return 0;
}
