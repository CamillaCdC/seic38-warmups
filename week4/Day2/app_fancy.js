$(document).ready( function () {

    // console.log("Is this thing on?")

    const story = $('#story').text().trim().split(" ");
    // console.log(story)

    const getRandomValue = function (maxValue) {
        const random = Math.floor(Math.random() * maxValue);
        return random;
    };
    // console.log(getRandomValue(5))

    const displayWord = function () {

        const randomIndex = getRandomValue(story.length);
        // console.log(randomIndex);
        
        const word = story[randomIndex];
        // console.log(word);

        const content = $('<p>').text(word);
        $('body').append(content);

        content.css({
            position: "absolute",
            top: getRandomValue(window.innerHeight) + "px",
            left: getRandomValue(window.innerWidth) + "px",
            fontSize: (12 + getRandomValue(50)) + "px",
            transform: "rotate(" + getRandomValue(360) + "deg)",
            color: "rgb(" + getRandomValue(256) + "," + getRandomValue(256) + "," + getRandomValue(256) + ")"
        });

        content.fadeIn(1000).fadeOut(2000, function () {
            content.remove();
        });

    };

    // displayWord()
    setInterval(displayWord, 100);
});