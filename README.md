# Temporal API

## Introduction

This repository showcases completing common date related tasks with both [Moment.js](https://momentjs.com/) and the [Temporal](https://tc39.es/proposal-temporal/docs/) API.

## Information

Historically, Dates in JavaScript have been inconsistent and problematic;

- Date objects are mutable.
- Only able to handle UTC and local timezones.
- No support for calendars other than Gregorian.
- Parsing date strings is extremely unreliable.
- The API is inconsistent and difficult to comprehend (months are zero indexed; 1 = February).

In the past libraries such as [Moment.js](https://momentjs.com/), [date-fns](https://date-fns.org/), [Luxon](https://moment.github.io/luxon/) have paved the way to bring a developer friendly, reliable and consistent way of parsing, manipulating, formatting and comparing dates.

![Data on support for the temporal feature across the major browsers from caniuse.com](https://caniuse.bitsofco.de/image/temporal.jpg)

Temporal brings all of the gains made by these third-party libraries in the form of a new, native API. Some of the benefits the API boasts are:

- A more reliable and consistent API.
- Immutable, strongly typed dates.
- Interoperability between standard date objects.
- Full timezone support with daylight savings safe arithmetic.
- Support for non-Gregorian calendars.

## Console Output

```shell
Current Timezone
  Timezone: Temporal.TimeZone <Europe/London>
  Last time clocks changed: Temporal.Instant <2022-03-27T01:00:00Z>
  Next time clocks will change: Temporal.Instant <2022-10-30T01:00:00Z>

1) Parse a timestamp with no timezone offset into local time (2022-05-15T15:00:00)
┌──────────┬─────────────────────────────┐
│ (index)  │           Values            │
├──────────┼─────────────────────────────┤
│  moment  │ '2022-05-15T15:00:00+01:00' │
│ temporal │    '2022-05-15T15:00:00'    │
└──────────┴─────────────────────────────┘

2) Parse a timestamp with a timezone offset into local timezone (2022-05-22T15:00:00-06:00)
┌──────────┬────────────────────────────────────────────┐
│ (index)  │                   Values                   │
├──────────┼────────────────────────────────────────────┤
│  moment  │        '2022-05-22T22:00:00+01:00'         │
│ temporal │ '2022-05-22T22:00:00+01:00[Europe/London]' │
└──────────┴────────────────────────────────────────────┘

3) Parse a timestamp with a timezone offset into another timezone entirely (2022-02-15T15:00:00-06:00)
┌──────────┬─────────────────────────────────────────────┐
│ (index)  │                   Values                    │
├──────────┼─────────────────────────────────────────────┤
│  moment  │         '2022-02-16T05:00:00+08:00'         │
│ temporal │ '2022-02-16T05:00:00+08:00[Asia/Singapore]' │
└──────────┴─────────────────────────────────────────────┘

4) Get the current unix timestamp (in seconds)
┌──────────┬────────────┐
│ (index)  │   Values   │
├──────────┼────────────┤
│  moment  │ 1651096933 │
│ temporal │ 1651096933 │
└──────────┴────────────┘

5) Get the current time (as ISO-8601)
┌──────────┬──────────────────────────────────┐
│ (index)  │              Values              │
├──────────┼──────────────────────────────────┤
│  moment  │      '2022-04-27T22:02:13Z'      │
│ temporal │ '2022-04-27T22:02:13.547651096Z' │
└──────────┴──────────────────────────────────┘

6) Adding a set amount of time to a datetime (2022-02-15T15:00:00)
┌──────────┬─────────────────────────────┐
│ (index)  │           Values            │
├──────────┼─────────────────────────────┤
│  moment  │ '2022-02-15T18:30:00+00:00' │
│ temporal │    '2022-02-15T18:30:00'    │
└──────────┴─────────────────────────────┘

7) Subtracting a set amount of time to a datetime (2022-02-15T15:00:00)
┌──────────┬─────────────────────────────┐
│ (index)  │           Values            │
├──────────┼─────────────────────────────┤
│  moment  │ '2022-02-15T11:30:00+00:00' │
│ temporal │    '2022-02-15T11:30:00'    │
└──────────┴─────────────────────────────┘

8) Formatting a date for local use (2022-06-19T15:00:00-06:00)
┌──────────┬─────────────────────────────────────────────────────────┐
│ (index)  │                         Values                          │
├──────────┼─────────────────────────────────────────────────────────┤
│  moment  │          'Sunday, June 19th 2022, 10:00:00 pm'          │
│ temporal │ 'Sunday, 19 June 2022, 10:00:00 pm British Summer Time' │
└──────────┴─────────────────────────────────────────────────────────┘
```

## Further Information

- [Temporal Documentation](https://tc39.es/proposal-temporal/docs/)
- [Temporal Cookbook](https://tc39.es/proposal-temporal/docs/cookbook.html)
- [2ality Temporal: Getting Started](https://2ality.com/2021/06/temporal-api.html)
- [Fjolt: Temporal and How it Works](https://fjolt.com/article/javascript-temporal)
- [Temporal Date API](https://blog.webdevsimplified.com/2022-02/temporal-date-api/)