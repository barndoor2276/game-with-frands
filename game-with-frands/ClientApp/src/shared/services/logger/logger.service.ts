import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  public error(msg: string | Error): void {
    console.error(msg);
  }

  public warn(msg: string): void {
    console.warn(msg);
  }

  public info(msg: string): void {
    console.info(msg);
  }

  public debug(msg: string): void {
    console.debug(msg);
  }
}
