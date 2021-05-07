import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeMinusculas'
})
export class PipeMinusculasPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {

  const parametro = args[0] as any

  return value.toLowerCase().substring(parametro)
  }

}
