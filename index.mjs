import { Temporal } from '@js-temporal/polyfill';
import moment from 'moment-timezone';

// Example ISO-8601 with timezone offset
// 2022-02-15T15:00:00-06:00
// 2022-02-15T15:00:00Z

// Example ZonedDateTime (ISO-8601 + IANA Time Zone Name)
// 2022-02-15T15:00:00-06:00[America/Chicago]
// 2022-05-15T15:00:00-05:00[America/Chicago]

// Temporal Types:
// PlainDateTime - 2022-02-15T15:00:00
// Instant       - 2022-02-15T15:00:00-06:00
// ZonedDateTime - 2022-02-15T15:00:00-06:00[America/Chicago]

// Common Tasks:
// 1) Parse a timestamp with no timezone offset into local timezone.
// 2) Parse a timestamp with a timezone offset into local timezone.
// 3) Parse a timestamp with a timezone offset into another timezone entirely.
// 4) Get the current unix timestamp (in seconds).
// 5) Get the current time (as ISO-8601).
// 6) Adding a set amount of time to a datetime.
// 7) Subtracting a set amount of time to a datetime.
// 8) Formating a date for local use.

const currentTimezone = Temporal.Now.timeZone();

console.group('Current Timezone');
console.log('Timezone:', currentTimezone);
console.log('Last time clocks changed:', currentTimezone.getPreviousTransition(Temporal.Now.instant()));
console.log('Next time clocks will change:', currentTimezone.getNextTransition(Temporal.Now.instant()));
console.groupEnd('Current Timezone');

console.log('\n1) Parse a timestamp with no timezone offset into local time (2022-05-15T15:00:00)');
console.table({
  // moment() treats a timestamp with no timezone offset as local timezone.
  moment: moment('2022-05-15T15:00:00').format(),
  temporal: Temporal.PlainDateTime.from('2022-05-15T15:00:00').toString({ timeZone: currentTimezone }),
});

console.log('\n2) Parse a timestamp with a timezone offset into local timezone (2022-05-22T15:00:00-06:00)');
console.table({
  // moment() adjusts a timestamp with a timezone offset to be represented in local timezone.
  moment: moment('2022-05-22T15:00:00-06:00').format(),
  temporal: Temporal.Instant.from('2022-05-22T15:00:00-06:00').toZonedDateTimeISO(currentTimezone).toString(),
});

console.log('\n3) Parse a timestamp with a timezone offset into another timezone entirely (2022-02-15T15:00:00-06:00)');
console.table({
  // moment.tz() adjusts a timestamp with a timezone offset to the desired timezone.
  moment: moment.tz('2022-02-15T15:00:00-06:00', 'Asia/Singapore').format(),
  temporal: Temporal.Instant.from('2022-02-15T15:00:00-06:00').toZonedDateTimeISO('Asia/Singapore').toString(),
});

console.log('\n4) Get the current unix timestamp (in seconds)');
console.table({
  moment: moment().unix(),
  temporal: Temporal.Now.instant().epochSeconds,
});

console.log('\n5) Get the current time (as ISO-8601)');
console.table({
  moment: moment.utc().format(),
  temporal: Temporal.Now.instant().toString(),
});

console.log('\n6) Adding a set amount of time to a datetime (2022-02-15T15:00:00)');
console.table({
  moment: moment('2022-02-15T15:00:00').add('3', 'hours').add('30', 'minutes').format(),
  temporal: Temporal.PlainDateTime.from('2022-02-15T15:00:00').add({ hours: 3, minutes: 30 }).toString()
});

console.log('\n7) Subtracting a set amount of time to a datetime (2022-02-15T15:00:00)');
console.table({
  moment: moment('2022-02-15T15:00:00').subtract('3', 'hours').subtract('30', 'minutes').format(),
  temporal: Temporal.PlainDateTime.from('2022-02-15T15:00:00').subtract({ hours: 3, minutes: 30 }).toString()
});

console.log('\n8) Formatting a date for local use (2022-06-19T15:00:00-06:00)');
console.table({
  moment: moment('2022-06-19T15:00:00-06:00').format('dddd, MMMM Do YYYY, h:mm:ss a'),
  temporal: Temporal.Instant.from('2022-06-19T15:00:00-06:00').toLocaleString('en-GB', {
    dateStyle: 'full',
    hour12: true,
    timeStyle: 'full',
  })
});
