import AWS = require("aws-sdk");
import { config } from "./config/config";

// Configure AWS
const credentials = new AWS.SharedIniFileCredentials({
  profile: config.aws_profile,
});
AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  accessKeyId: "AKIARH3GL6XTAUKFI6D4",
  secretAccessKey: "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",
  params: { Bucket: config.aws_media_bucket },
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 500;

  return s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): any {
  const signedUrlExpireSeconds = 3600;

  return s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
