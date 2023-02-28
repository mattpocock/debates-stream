export enum LogLevel {
  DEBUG,
  WARNING,
  ERROR,
}

const log = (message: string, logLevel: LogLevel) => {
  if (logLevel >= LogLevel.DEBUG) {
    // PRETTY USEFUL FOLKS
  }
};
