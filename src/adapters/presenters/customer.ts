import { removeNullValues } from '~/controllers/helpers/remove-null-values';
import { Customer } from '~/domain/entities/customer';
import { CustomerResponse } from './dtos/customer-response';

export class CustomerPresenter {
  static toHttp(customer: Customer): CustomerResponse {
    return removeNullValues({
      id: customer.id,
      name: customer.name,
      documentNumber: customer.documentNumber,
      email: customer.email,
    });
  }
}
