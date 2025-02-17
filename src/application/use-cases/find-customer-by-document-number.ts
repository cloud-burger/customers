import { NotFoundError } from '@cloud-burger/handlers';
import logger from '@cloud-burger/logger';
import { Customer } from '~/domain/entities/customer';
import { CustomerRepository } from '~/domain/repositories/customer';

interface Input {
  documentNumber: string;
}

export class FindCustomerByDocumentNumberUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute({ documentNumber }: Input): Promise<Customer> {
    const customer =
      await this.customerRepository.findByDocumentNumber(documentNumber);

    if (!customer) {
      logger.warn({
        message: 'Customer not found',
        data: {
          documentNumber,
        },
      });

      throw new NotFoundError('Customer not found');
    }

    logger.debug({
      message: 'Customer found',
      data: customer,
    });

    return customer;
  }
}
