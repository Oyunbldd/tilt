'use strict';
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {createPresignedPost} = require("@aws-sdk/s3-presigned-post");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
module.exports.createGetUrl = async (event) => {
  const pathParams = event.pathParameters;
  const client = new S3Client(clientParams);
  const Key = pathParams.fileKey || null;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
