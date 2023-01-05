import { Logger } from 'pino';

export type ILoggerRaw = typeof console | Logger;

export type ILogLevelType = 'debug' | 'info' | 'warn' | 'error' | string;

export interface ILogger {
  _logger: ILoggerRaw;
  _settings: ILoggerSettings;
  debug(msg: ILoggerMessageArg): void;
  info(msg: ILoggerMessageArg): void;
  warn(msg: ILoggerMessageArg): void;
  error(msg: ILoggerMessageArg): void;
  isLevelEnabled(level: ILogLevelType): boolean;
}

export interface ILoggerSettings {
  /**
   * default is 'pino' for console
   */
  kind?: 'pino' | 'console' | string;

  /**
   * default is 'info'
   */
  level?: ILogLevelType;

  commonLog: ILoggerCommonLogType;
}

export interface ILoggerCommonLogType {
  app_name    : string;
  app_version : string;
  app_module? : string;
  env         : string;
  instance_id?: string;
}

export type ILoggerMessageArg = string | ILoggerMessageType;

export interface ILoggerMessageType {
  message: string;

  /**
   * Default is 'new Date().toISOString()'
   */
  date?: string | Date;

  /**
   * Client application ID
   */
  client_id?: string;

  /**
   * Request ID or correlation ID for tracing
   */
  request_id?: string;
}
