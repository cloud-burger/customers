import { createRequest, createResponse } from 'node-mocks-http';
import { createCustomer } from './create-customer';

jest.mock('~/controllers/create-customer');

describe('create customer handler', () => {
  it('should call create customer controller', async () => {
    const req = createRequest();
    const res = createResponse();

    await createCustomer(req, res);
  });
});
