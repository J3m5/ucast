import {
  Condition,
  CompoundCondition,
  FieldCondition,
  Comparable
} from '@ucast/core';
import { raw } from 'objection';
import { ObjectionOperator } from './interpreter';
import { generateRegexQuery } from './utils';

export const eq: ObjectionOperator<FieldCondition> = (condition, query) => {
  return query.where(condition.field, '=', condition.value);
};

export const ne: typeof eq = (condition, query) => {
  return query.where(condition.field, 'Not', condition.value);
};

export const lt: ObjectionOperator<FieldCondition<Comparable>> = (condition, query) => {
  return query.where(condition.field, '<', condition.value);
};

export const lte: ObjectionOperator<FieldCondition<Comparable>> = (condition, query) => {
  return query.where(condition.field, '<=', condition.value);
};

export const gt: ObjectionOperator<FieldCondition<Comparable>> = (condition, query) => {
  return query.where(condition.field, '>', condition.value);
};

export const gte: ObjectionOperator<FieldCondition<Comparable>> = (condition, query) => {
  return query.where(condition.field, '>=', condition.value);
};

export const exists: ObjectionOperator<FieldCondition<Comparable>> = (condition, query) => {
  return query.where(condition.field, condition.value ? 'NotNull' : 'Null');
};

export const within: ObjectionOperator<FieldCondition<Comparable[]>> = (condition, query) => {
  return query.where(condition.field, 'In', condition.value);
};

export const nin: ObjectionOperator<FieldCondition<Comparable[]>> = (condition, query) => {
  return query.where(condition.field, 'NotIn', condition.value);
};

export const not: ObjectionOperator<CompoundCondition> = (node, query, { interpret }) => {
  return query.whereWrapped('where', (builder) => {
    node.value.forEach(condition => interpret(condition, builder));
  }, true);
};

export const and: ObjectionOperator<CompoundCondition> = (node, query, { interpret }) => {
  return query.whereWrapped('where', (builder) => {
    node.value.forEach(condition => interpret(condition, builder));
  });
};

export const or: ObjectionOperator<CompoundCondition> = (node, query, { interpret }) => {
  return query.whereWrapped('orWhere', (builder) => {
    node.value.forEach(condition => interpret(condition, builder));
  });
};

export const nor: ObjectionOperator<CompoundCondition> = (node, query, { interpret }) => {
  return query.whereWrapped('orWhere', (builder) => {
    node.value.forEach(condition => interpret(condition, builder));
  }, true);
};

export const mod: ObjectionOperator<FieldCondition<[number, number]>> = (condition, query) => {
  return query.whereRaw(condition.field, raw('mod(:field:, :dividend) = :divider', {
    field: condition.field,
    dividend: condition.value[0],
    divider: condition.value[1]
  }));
};

type IElemMatch = ObjectionOperator<FieldCondition<Condition>>;
export const elemMatch: IElemMatch = (condition, query, { interpret }) => {
  interpret(condition.value, query.prefixed(condition.field));
  return query;
};

export const regex: ObjectionOperator<FieldCondition<RegExp>> = (condition, query) => {
  return query.whereRaw(condition.field, raw(generateRegexQuery(condition.value.ignoreCase), {
    field: condition.field,
    regex: condition.value.source,
  }));
};
