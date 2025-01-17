import { ApiHandler } from '@cloud-burger/handlers';
import logger from '@cloud-burger/logger';
import { Request, Response } from 'express';
import { CreateCustomerController } from '~/controllers/create-customer';
import { CustomerRepository } from '~/infrastructure/database/customer-repository';
import { CreateCustomerUseCase } from '~/use-cases/create-customer';
import { env } from '../env';

let customerRepository: CustomerRepository;
let createCustomerUseCase: CreateCustomerUseCase;
let createCustomerController: CreateCustomerController;
let apiHandler: ApiHandler;

const setDependencies = () => {
  customerRepository = new CustomerRepository(env.DYNAMO_TABLE_CUSTOMERS);
  createCustomerUseCase = new CreateCustomerUseCase(customerRepository);
  createCustomerController = new CreateCustomerController(
    createCustomerUseCase,
  );
  apiHandler = new ApiHandler(createCustomerController.handler);
};

export const createCustomer = async (
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
