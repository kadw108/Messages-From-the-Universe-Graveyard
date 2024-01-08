// Import required AWS SDK clients and command for Node.js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { fromCognitoIdentityPool} from "@aws-sdk/credential-providers";
import { PutCommand, DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";
import { v1 as uuid_v1 } from 'uuid';

const REGION = "us-east-2";

const client = new DynamoDBClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: REGION }, // Configure the underlying CognitoIdentityClient.
    identityPoolId: 'us-east-2:9effc2f1-c9f5-410f-978d-8f67e142484b',
    logins: {
            // Optional tokens, used for authenticated login.
        },
  })
});

const docClient = DynamoDBDocumentClient.from(client);

const sendPutRequest = async(boardNumber: number, inputName: string, inputMessage: string) => {

  const timestampMilliseconds: number = Date.now();

  const command = new PutCommand({
    TableName: "boardTable",
    Item: {
      board: boardNumber,
      id: uuid_v1(),
      name: inputName.trim(),
      message: inputMessage.trim(),
      time: timestampMilliseconds
    },
  });

  console.log("Sending " + boardNumber + inputName);
  const response = await docClient.send(command);
  return response;
};

const addMessage = async(boardNumber: number, inputName: string, inputMessage: string) => {
    if (typeof boardNumber !== "number") {
        console.error("boardNumber is not number: " + boardNumber);
        return;
    }
    if (inputName.length < 3 || inputName.length > 32) {
        console.error("inputName bad length: " + inputName);
        return;
    }
    if (inputMessage.length < 50 || inputMessage.length > 2750) {
        console.error("inputMessage bad length: " + inputMessage);
        return;
    }

    const response = await sendPutRequest(boardNumber, inputName, inputMessage);
    return response;
}

export {
  addMessage
};