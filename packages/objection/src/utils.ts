import { Model } from 'objection';

function posixRegex(ignoreCase: boolean) {
  const operator = ignoreCase ? '~*' : '~';
  return `:field: ${operator} :regex`;
}

function regexp() {
  return ':field: regexp :regex = 1';
}
const dialects: Record<string, (a: boolean) => string> = {
  pg: posixRegex,
  mysql: regexp,
  oracledb: posixRegex,
};

export function generateRegexQuery(ignoreCase: boolean) {
  const { client: { config } } = Model.knex();
  if (!dialects[config.client]) throw new Error(`regex operator does not support ${config.client} database`);
  return dialects[config.client](ignoreCase);
}
