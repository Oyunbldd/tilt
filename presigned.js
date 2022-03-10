"use strict";
const AWS= require('aws-sdk');    
AWS.config.update({
    region: "ap-northeast-2"
})
const s3 = new AWS.S3();
const getUploadUrl = (type,name)=>{
    return new Promise((res,rej)=>{
        s3.getSignedUrl("putObject",{
         Bucket:'amdep',
         Key : name,
         ContentType: type,
         Expires: '',
        },(err,url)=>{
            if(err) rej(err);
            res(url);
        });
    });
}
module.exports.hello= async (event) => {
  const { type, name } = event.headers;
  const url = await getUploadUrl(type, name);
  return url;
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
