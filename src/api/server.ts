import logger from '@cloud-burger/logger';
import cors from 'cors';
import express, { Router } from 'express';
import { env } from './env';

import * as bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swagger from '../../docs/open-api.json';
import { createCustomer } from './handlers/create-customer';
import { findCustomerByDocumentNumber } from './handlers/find-customer-by-document-number';

const app = express();
const PORT = +env.PORT;

const router = Router();

router.post('/', createCustomer);
router.get('/:documentNumber', findCustomerByDocumentNumber);

app.use(bodyParser.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger));

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  logger.info({
    message: `App listening on port ${PORT}`,
  });
});
