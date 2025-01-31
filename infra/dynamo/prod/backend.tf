provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "cloud-burger-states"
    key    = "prod/customers/infra/dynamo/terraform.tfstate"
    region = "us-east-1"
  }
}
