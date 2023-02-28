export enum LogLevel {
  DEBUG = "DEBUG",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

export enum LogLevel2 {
  DEBUG = "DEBUG",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

const log = (message: string, logLevel: LogLevel) => {
  if (logLevel >= LogLevel.DEBUG) {
    // PRETTY USEFUL FOLKS
  }
};
