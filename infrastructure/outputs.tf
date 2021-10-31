output "sge_s3_bucket_name" {
  value = aws_s3_bucket.sge_s3_bucket.id
}

output "sge_distribution_id" {
  value = aws_cloudfront_distribution.sge_s3_distribution.id
}