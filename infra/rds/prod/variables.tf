variable "environment" {
  default = "prod"
}

variable "project" {
  default = "self-service-customers"
}

variable "database_password" {
  default = "customers"
}

variable "database_instance_class" {
  default = "db.t3.micro"
}

variable "database_name" {
  default = "customers"
}

variable "database_username" {
  default = "customers"
}
