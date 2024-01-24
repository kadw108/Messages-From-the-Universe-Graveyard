const addMessage = async (boardNumber: number, inputName: string, inputMessage: string) => {
    if (typeof boardNumber !== "number") {
        return;
    }
    if (inputName.length < 3 || inputName.length > 32) {
        return;
    }
    if (inputMessage.length < 50 || inputMessage.length > 2750) {
        return;
    }

    try {
        const result = await fetch("http://localhost:8000/write/" + boardNumber, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputName: inputName, inputMessage: inputMessage }),
        });
        const resultData = await result.json();
        return resultData;
    } catch (err) {
        return {success: false, data: err};
    }
};

export { addMessage };
