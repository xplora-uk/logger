import { Logger } from 'pino';

export type ILoggerRaw = typeof console | Logger;

export enum LoggerKindEnum {
  CONSOLE = 'console',
  PINO    = 'pino',
}

export type ILoggerKind = keyof typeof LoggerKindEnum | LoggerKindEnum | string;

export enum LogLevelEnum {
  DEBUG = 'debug',
  INFO  = 'info',
  WARN  = 'warn',
  ERROR = 'error',
}

export type ILogLevel = keyof typeof LogLevelEnum | LogLevelEnum | string;

export interface ILogger {
  _logger       : ILoggerRaw;
  _settings     : ILoggerSettingsRequired;
  debug         : (msg: ILoggerMessageArg) => void;
  info          : (msg: ILoggerMessageArg) => void;
  warn          : (msg: ILoggerMessageArg) => void;
  error         : (msg: ILoggerMessageArg) => void;
  isLevelEnabled: (level: ILogLevel)       => boolean;
}

export interface ILoggerSettings {
  /**
   * default is 'pino' for console
   */
  kind?: ILoggerKind;

  /**
   * default is 'info'
   */
  level?: ILogLevel;

  /**
   * this is common log entry
   */
  app: ILoggerCommonLog;
}

export type ILoggerSettingsRequired = Required<ILoggerSettings>;

export interface ILoggerCommonLog {
  app_name    : string;
  app_version : string;
  app_module? : string;
  env         : string;
  instance_id?: string;
  meta?       : unknown;
}

export type ILoggerMessageArg = string | ILoggerMessage;

export interface ILoggerMessage {
  msg: string;

  /**
   * Default is 'new Date().toISOString()'
   */
  date?: string | Date;

  time?: number;

  /**
   * Client application ID
   */
  client_id?: string;

  /**
   * Request ID or correlation ID for tracing
   */
  request_id?: string;

  /**
   * more info can be appended to the log entry
   */
  data?: unknown;
}
