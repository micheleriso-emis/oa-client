import Ajv from 'ajv';
import OAClientError from '../../errors/OAClientError';

const ajv = new Ajv();

export default (schema: object, data: any) => {
  const valid = ajv.validate(schema, data);
  if (valid) return;
  throw new OAClientError(103, { ajvError: (ajv.errors as any[])[0], data });
};
