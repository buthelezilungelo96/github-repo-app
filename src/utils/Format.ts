import moment from 'moment';

export const FirstLetterCapitalize = (str: any): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const ParseDate = (date: any) => new Date(parseInt(date)).toDateString();

export const ParseSlug = (name: string) => name.replace(/\s/g, '_').toLowerCase();

export const toLocalTimezone = (datestring: string) => {
  const date = moment(datestring);
  date.add(moment.duration(date.utcOffset(), 'minutes'));
  return date.format('lll');
}

export const filterToQueryString = (filters: any) => {
  const keys = Object.keys(filters);
  if (keys.length === 0) {
    return '';
  }
  const mapped = keys.filter((key) => {
    if (typeof filters[key] === 'object') return filters[key];
    return true;
  });

  const noNulls = mapped.filter((key) => {
    const value = filters[key];
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    if (typeof value === 'object') {
      return value !== undefined && value !== null;
    }

    return true;
  });

  const queryParts = noNulls.map((key) => {
    const value = filters[key];
    const prefix = Array.isArray(value) ? 'in.' : '';
    return `${prefix}${key}=${value}`;
  });

  return `?${queryParts.join('&')}`;
};