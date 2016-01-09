/* Bonfire: Friendly Date Ranges
 * http://www.freecodecamp.com/challenges/bonfire-friendly-date-ranges
 *
 * Implement a way of converting two dates into a more friendly date range
 * that could be presented to a user.
 *
 * It must not show any redundant information in the date range.
 *
 * For example, if the year and month are the same then only the day range
 * should be displayed.
 *
 * Secondly, if the starting year is the current year, and the ending year
 * can be inferred by the reader, the year should be omitted.
 *
 * Input date is formatted as YYYY-MM-DD
 */


function makeOrdinal(day) {
  'use strict';

  const n = day % 10;
  let result = day.toString();

  switch (n) {
    case 1:
      result += 'st';
      break;

    case 2:
      result += 'nd';
      break;

    case 3:
      result += 'rd';
      break;

    default:
      result += 'th';
  }

  return result;
}


function monthName(month) {
  'use strict';

  const list = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  return list[month];
}


function makeDate(dates) {
  'use strict';

  const from = new Date(dates[0]);
  const to = new Date(dates[1]);

  return {
    from: {
      date: from.getDate(),
      month: from.getMonth(),
      year: from.getFullYear()
    },
    to: {
      date: to.getDate(),
      month: to.getMonth(),
      year: to.getFullYear()
    }
  };
}


function same(type, dates) {
  'use strict';

  const params = type
    .replace(/\s/g, '')
    .split(',');

  const result = Object
    .keys(params)
    .every(i =>
      dates.from[params[i]] === dates.to[params[i]]
    );


  return result;
}


function make(type, dates) {
  'use strict';

  const params = type
    .replace(/\s/g, '')
    .split(',');

  const result = Object
    .keys(params)
    .map(i => {
      const prop = params[i];

      if (prop === 'month') {
        return monthName(dates.month);
      }

      if (prop === 'date') {
        return makeOrdinal(dates.date);
      }

      if (prop === 'year') {
        return dates.year.toString();
      }
    });

  if (params.length === 3) {
    return `${result[0]} ${result[1]}, ${result[2]}`;
  }


  return result.join(' ');
}


function yearOrMore(dates) {
  'use strict';

  /* within a year */
  if (dates.to.year - dates.from.year === 1) {
    if (dates.from.month === dates.to.month) {
      return [
        make('month, date, year', dates.from),
        make('month, date, year', dates.to)
      ];
    }

    return [
      make('month, date', dates.from),
      make('month, date', dates.to)
    ];
  }


  return [
    make('month, date, year', dates.from),
    make('month, date, year', dates.to)
  ];
}


function friendly(dates) {
  'use strict';

  dates = makeDate(dates);


  if (same('date, month, year', dates)) {
    return [make('month, date, year', dates.to)];
  }


  if (same('month, year', dates)) {
    return [
      make('month, date', dates.from),
      make('date', dates.to)
    ];
  }


  if (same('year', dates)) {
    return [
      make('month, date', dates.from),
      make('month, date', dates.to)
    ];
  }


  return yearOrMore(dates);
}


/* exports */
module.exports = friendly;
