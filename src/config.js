export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "app-notes-files"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://t9cysnpcik.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ZJmZ8f0CO",
    APP_CLIENT_ID: "4mngf4qugmroegl8bikns604d8",
    IDENTITY_POOL_ID: "us-east-2:2124e8bd-7934-45ea-ac15-cc0e4be07249"
  }
};