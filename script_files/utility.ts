export function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function popIndex(array: Array<any>, index: number): any {
    return array.splice(index, 1)[0];
}

export function randIndex(array: Array<any>): number {
    return Math.floor(Math.random() * array.length);
}

export function randItem(array: Array<any>): any {
    return array[randIndex(array)];
}

export function capitalizeAllWords(string: string): string {
    return string
        .split(" ")
        .map((x) => {return capitalizeFirstLetter(x)})
        .join(" ");
}

export function randomInterval(length: number): Array<number> {
    const start = Math.floor(Math.random() * length);
    const array: Array<number> = [];

    let i = start;
    for (let j = 0; j < length; j++) {
        array.push(i);
        i = (i + 1) % length;
    }

    return array;
}

// from https://stackoverflow.com/a/8555981
export function indefinite_article(phrase: string) {
    // Getting the first word 
    var match = /\w+/.exec(phrase);
    if (match)
        var word = match[0];
    else
        return "an";

    var l_word = word.toLowerCase();
    // Specific start of words that should be preceeded by 'an'
    var alt_cases = ["honest", "hour", "hono"];
    for (var i in alt_cases) {
        if (l_word.indexOf(alt_cases[i]) == 0)
            return "an";
    }

    // Single letter word which should be preceeded by 'an'
    if (l_word.length == 1) {
        if ("aedhilmnorsx".indexOf(l_word) >= 0)
            return "an";
        else
            return "a";
    }

    // Capital words which should likely be preceeded by 'an'
    if (word.match(/^(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/)) {
        return "an";
    }

    // Special cases where a word that begins with a vowel should be preceeded by 'a'
    var regexes = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/]
    for (var i in regexes) {
        if (l_word.match(regexes[i]))
            return "a"
    }

    // Special capital words (UK, UN)
    if (word.match(/^U[NK][AIEO]/)) {
        return "a";
    }
    else if (word == word.toUpperCase()) {
        if ("aedhilmnorsx".indexOf(l_word[0]) >= 0)
            return "an";
        else 
            return "a";
    }

    // Basic method of words that begin with a vowel being preceeded by 'an'
    if ("aeiou".indexOf(l_word[0]) >= 0)
        return "an";

    // Instances where y follwed by specific letters is preceeded by 'an'
    if (l_word.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/))
        return "an";

    return "a";
}