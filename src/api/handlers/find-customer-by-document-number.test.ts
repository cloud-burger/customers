import { createRequest, createResponse } from 'node-mocks-http';
import { findCustomerByDocumentNumber } from './find-customer-by-document-number';

jest.mock('~/controllers/find-customer-by-document-number');

describe('find customer by document number handler', () => {
  it('should call find customer by document number controller', async () => {
    const req = createRequest();
    const res = createResponse();

    await findCustomerByDocumentNumber(req, res);
  });
});
