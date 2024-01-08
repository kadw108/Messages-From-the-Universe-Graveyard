// Import required AWS SDK clients and command for Node.js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { fromCognitoIdentityPool} from "@aws-sdk/credential-providers";
import { QueryCommand, DynamoDBDocumentClient, QueryCommandOutput } from "@aws-sdk/lib-dynamodb";

import Filter from "bad-words";
const filter = new Filter();
filter.removeWords("god", "hell", "ball", "balls");
// @ts-ignore
// const filter = new Filter({ replaceRegex: /(?<!^)(.*)(?!$)/g }); 

const REGION = "us-east-2";

const client = new DynamoDBClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: REGION }, // Configure the underlying CognitoIdentityClient.
    identityPoolId: 'us-east-2:3d914d8c-2cbb-4091-b855-eded84ec7a25',
    logins: {
            // Optional tokens, used for authenticated login.
        },
  })
});

const docClient = DynamoDBDocumentClient.from(client);

const queryBoard = async (boardNumber: number) => {
  const command = new QueryCommand({
    TableName: "boardTable",
    IndexName: "board-time-index",
    KeyConditionExpression:
      "board = :boardNum",
    ExpressionAttributeValues: {
      ":boardNum": boardNumber,
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

const renderBoard = (response: QueryCommandOutput) => {
  const items = response.Items;
  if (items === undefined) {
    return;
  }

  const messageContainer = document.getElementById("messageContainer");
  if (messageContainer === null) {
    console.error("messageContainer is null");
    return;
  }
  messageContainer.innerHTML = "";

  if (items.length === 0) {
    messageContainer.innerHTML = "<p style='margin: 15px;'>Nothing here.</p>";
  }
  else {
    items.forEach((messageData) => {
      const div = renderMessage(messageData);
      messageContainer.append(div);
    })
  }
}

const renderMessage = (messageData) => {
  const div = document.createElement("div");
  div.classList.add("markerMessage");

  const senderName = document.createElement("h6");
  senderName.classList.add("senderName");
  senderName.innerText = "from: " + filter.clean(messageData.name);

  const message = document.createElement("p");
  message.innerText = filter.clean(messageData.message);

  div.append(senderName, message);
  return div;
}

const getBoard = async (boardNumber: number) => {
  if (typeof boardNumber !== "number") {
    console.error(boardNumber + " is not a number. Cannot fetch board info.");
    return;
  }

  const result = await queryBoard(boardNumber);
  renderBoard(result);
}

/*
TODO add pagination
    <!-- <div class="pageLinkContainer">
        <ul>
            <li class="pageLink">1</li><li class="pageLink">2</li><li class="pageLink">3</li><li class="pageLink">...</li><li class="pageLink">78</li>
        </ul>

        <a>Next Page</a>
    </div> -->
*/

export {
  getBoard
};