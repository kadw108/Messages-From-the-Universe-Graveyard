import Filter from "bad-words";
const filter = new Filter();
filter.removeWords("god", "hell", "ball", "balls");
// @ts-ignore
// const filter = new Filter({ replaceRegex: /(?<!^)(.*)(?!$)/g });

const renderBoard = (success: boolean, data: any) => {
    const messageContainer = document.getElementById("messageContainer");
    if (messageContainer === null) {
        console.error("messageContainer is null");
        return;
    }

    if (!success) {
        console.log(data);

        const errorDiv = document.createElement("div");
        if (data instanceof Array && data.length > 1) {
            errorDiv.innerHTML = "<p style='color: red; margin: 10px;'>{" + data[0] + "}</p>";
        } else {
            errorDiv.innerHTML = "<p style='color: red; margin: 10px;'>{An error occured while reading messages. Please wait a short while and try again.}</p>";
        }

        messageContainer.innerHTML = "";
        messageContainer.append(errorDiv);

        return;
    }

    messageContainer.innerHTML = "";

    if (data.length === 0) {
        messageContainer.innerHTML = "<p style='margin: 15px;'>Nothing here.</p>";
    } else {
        data.forEach((messageData) => {
            const div = renderMessage(messageData);
            messageContainer.append(div);
        });
    }
};

const renderMessage = (messageData) => {
    const div = document.createElement("div");
    div.classList.add("markerMessage");

    const senderName = document.createElement("h6");
    senderName.classList.add("senderName");

    try {
        senderName.innerText = "from: " + filter.clean(messageData.name);
    } catch (error) {
        senderName.innerText = "from: " + messageData.name;
    }

    const message = document.createElement("p");

    let messageText = messageData.message;
    // Since the filter doesn't work perfectly with all inputs.
    // This is the lazy solution because I want to keep it in.
    try {
        messageText = filter.clean(messageData.message);
    } catch (error) {
        messageText = messageData.message;
    }

    if (messageText.indexOf("[corruptDataPlaceholder]") >= 0) {
        const messageTextArray = messageText.split("[corruptDataPlaceholder]");
        const text1 = document.createTextNode(messageTextArray[0]);
        const text2 = document.createTextNode(messageTextArray[1]);

        const replace = document.createElement("img");
        replace.classList.add("corruptDataPlaceholder");
        replace.src = "assets/white3.gif";

        message.append(text1, replace, text2);
    } else {
        message.innerText = messageText;
    }

    div.append(senderName, message);
    return div;
};

const getBoard = async (boardNumber: number) => {
    if (typeof boardNumber !== "number") {
        console.error(boardNumber + " is not a number. Cannot fetch board info.");
        return;
    }

    try {
        const result = await fetch("https://crumbling-castle-server.fly.dev/read/" + boardNumber);
        const resultData = await result.json();
        renderBoard(resultData.success, resultData.data);
    } catch (err) {
        if (err instanceof TypeError) {
            renderBoard(false, ["Servers down. Please try again later.", err]);
        } else {
            renderBoard(false, err);
        }
    }
};

/*
TODO add pagination
    <!-- <div class="pageLinkContainer">
        <ul>
            <li class="pageLink">1</li><li class="pageLink">2</li><li class="pageLink">3</li><li class="pageLink">...</li><li class="pageLink">78</li>
        </ul>

        <a>Next Page</a>
    </div> -->
*/

export { getBoard };
