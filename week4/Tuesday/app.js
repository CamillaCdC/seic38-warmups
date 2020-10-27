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
            left: getRandomValue(window.innerWidth) + "px"
        });

        setInterval(function() {
            content.remove()
        }, 1000)
    };

    // console.log(window.innerHeight);
    // console.log(window.innerWidth);

    // displayWord()
    setInterval(displayWord, 100);
});