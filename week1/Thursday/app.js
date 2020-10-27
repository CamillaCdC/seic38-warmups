const sergeSays = function (input) {
    
    if (input.endsWith("?")) {
        return 'Sure.';
    } else if (input === "") {
        return 'Fine. Be that way!';
    } else if (input === input.toUpperCase()) {
        return 'Woah, chill out';
    } else {
        return 'Whatever';
    }

}

