provider "aws" {
  region = "us-west-1"
}

terraform {
  backend "s3" {
    bucket  = "sge-app-tf-state"
    key     = "sge-app.tfstate"
    region  = "us-west-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.project}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "Booker T"
  }
}
