import * as AWS from 'aws-sdk';

(async () => {
  // STS
  const stsClient = new AWS.STS();
  const params = {};
  const sts = await stsClient.getCallerIdentity(params).promise();

  console.log('Who I am ->', sts.Arn);
})();
