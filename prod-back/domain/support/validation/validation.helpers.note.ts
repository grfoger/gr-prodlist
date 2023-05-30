export interface IEnsureParamObject<T> {
  [key: string]: T;
}

export type EnsureCheck<T> = (paramObject: IEnsureParamObject<T>) => T;

export function getParamNameAndValue<T>(paramObject: { [key: string]: T }): {
  name: string;
  value: T;
} {
  const [paramKey, paramValue] = Object.entries(paramObject)[0];
  return { name: paramKey, value: paramValue as T };
}
