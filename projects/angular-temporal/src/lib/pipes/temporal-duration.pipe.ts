import { Pipe, PipeTransform } from '@angular/core';

import { Temporal } from '../utils/polyfill';

@Pipe({
  name: 'temporalDuration',
  standalone: true
})
export class TemporalDurationPipe implements PipeTransform {
  transform(
    value: Temporal.Duration | string | Temporal.DurationLike | null | undefined,
  ): string {
    if (!value) {
      return '';
    }

    try {
      let duration: Temporal.Duration;

      if (value instanceof Temporal.Duration) {
        duration = value;
      } else if (typeof value === 'string') {
        duration = Temporal.Duration.from(value);
      } else {
        duration = Temporal.Duration.from(value);
      }

      return duration.toString();
    } catch (error) {
      console.warn('TemporalDurationPipe: Invalid duration value', error);
      return '';
    }
  }
}
