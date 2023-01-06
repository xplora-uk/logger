// local constants; not exported by library

export const LOGGER_DEFAULT_KIND = 'pino';

export const LOGGER_VALID_KINDS = [
  'console',
  'pino',
];

export const LOGGER_DEFAULT_LEVEL = 'info';

export const LOGGER_VALID_LEVELS = [
  'debug',
  'info',
  'warn',
  'error',
];

export const LOGGER_LEVEL_VALUES: Record<string, number> = {
  debug: 1,
  info:  2,
  warn:  3,
  error: 4,
};
