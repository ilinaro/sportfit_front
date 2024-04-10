import { ParsedUrlQuery } from 'querystring';

export const getURLQuery = (
  query: ParsedUrlQuery,
  name: string
): string | null => {
  const value = query[name];

  if (!value) return null;

  if (Array.isArray(value)) return value[0];

  return value;
};
