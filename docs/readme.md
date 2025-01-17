# Refinamento

Este documento descreve o domínio e as entidades de banco de dados da aplicação Customers.

## Domínio da Aplicação

Abaixo está descrita a entidade de domínio definida para o projeto.

### Entidade de Domínio

#### Customer

Entidade que representa um cliente.

| Campo          | Descrição       | Obrigatório | Tipo    |
|----------------|-----------------|-------------|---------|
| name           | Nome            | true        | `string`|
| documentNumber | Documento       | true        | `string`|
| email          | E-mail          | false       | `string`|

## Tabela de Banco de Dados

Abaixo está descrita a tabela de banco de dados definida para o projeto.

### customers

Tabela de banco de dados que representa um cliente.

| Campo            | Descrição           | Obrigatório | Tipo        |
|------------------|---------------------|-------------|-------------|
| id (PK)          | Identificador único | true        | `Varchar`   |
| name             | Nome                | true        | `Varchar`   |
| document_number  | Documento           | true        | `Varchar`   |
| email            | E-mail              | false       | `Varchar`   |
| created_at       | Data de criação     | true        | `Timestamp` |
| updated_at       | Data de atualização | true        | `Timestamp` |
