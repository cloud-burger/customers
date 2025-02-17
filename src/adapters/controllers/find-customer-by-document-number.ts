import { Controller, Request, Response } from '@cloud-burger/handlers';
import logger from '@cloud-burger/logger';
import { CustomerPresenter } from '~/presenters/customer';
import { CustomerResponse } from '~/presenters/dtos/customer-response';
import { FindCustomerByDocumentNumberUseCase } from '~/use-cases/find-customer-by-document-number';

export class FindCustomerByDocumentNumberController {
  constructor(
    private readonly findCustomerByDocumentNumberUseCase: FindCustomerByDocumentNumberUseCase,
  ) {}

  handler: Controller = async (
    request: Request,
  ): Promise<Response<CustomerResponse>> => {
    const { documentNumber } = request.pathParameters;

    logger.info({
      message: 'Find customer by document number request',
      data: request,
    });

    const customer = await this.findCustomerByDocumentNumberUseCase.execute({
      documentNumber,
    });

    logger.info({
      message: 'Find customer by document number response',
      data: customer,
    });

    return {
      statusCode: 200,
      body: CustomerPresenter.toHttp(customer),
    };
  };
}
