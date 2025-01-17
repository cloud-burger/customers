import { ApiHandler } from '@cloud-burger/handlers';
import logger from '@cloud-burger/logger';
import { Request, Response } from 'express';
import { FindCustomerByDocumentNumberController } from '~/controllers/find-customer-by-document-number';
import { CustomerRepository } from '~/infrastructure/database/customer-repository';
import { FindCustomerByDocumentNumberUseCase } from '~/use-cases/find-customer-by-document-number';
import { env } from '../env';

let customerRepository: CustomerRepository;
let findCustomerByDocumentNumberUseCase: FindCustomerByDocumentNumberUseCase;
let findCustomerByDocumentNumberController: FindCustomerByDocumentNumberController;
let apiHandler: ApiHandler;

const setDependencies = () => {
  customerRepository = new CustomerRepository(env.DYNAMO_TABLE_CUSTOMERS);
  findCustomerByDocumentNumberUseCase = new FindCustomerByDocumentNumberUseCase(
    customerRepository,
  );
  findCustomerByDocumentNumberController =
    new FindCustomerByDocumentNumberController(
      findCustomerByDocumentNumberUseCase,
    );
  apiHandler = new ApiHandler(findCustomerByDocumentNumberController.handler);
};

export const findCustomerByDocumentNumber = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  logger.setEvent('customers', request);
  logger.debug({
    message: 'Event received',
    data: request,
  });

  setDependencies();

  return await apiHandler.handler(request, response);
};
