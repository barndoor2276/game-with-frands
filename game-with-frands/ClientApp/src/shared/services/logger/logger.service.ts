import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  public error(msg: any): void {
    console.error(msg);
  }

  public warn(msg: any): void {
    console.warn(msg);
  }

  public info(msg: any): void {
    console.info(msg);
  }

  public debug(msg: any): void {
    console.debug(msg);
  }
}
