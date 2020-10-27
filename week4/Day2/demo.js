$(document).ready( function () {

    // console.log("Who wants coffee?")

    const story = $('#story').text().trim().split(" ");
    // console.log(story)

    const getRandomValue = function (maxValue) {
        const random = Math.floor(Math.random() * maxValue);
        return random;
    }
    // console.log(getRandomValue(5));

    const displayWord = function () {
        const randomIndex = getRandomValue(story.length);
        
        const word = story[randomIndex];

        const content = $('<p>').text(word);
        $('body').append(content);

        content.css({
            position: "absolute", 
            top: getRandomValue(window.innerHeight) + "px",
            left: getRandomValue(window.innerWidth) + "px"
        })

        setInterval(function () {
            content.remove()
        }, 1000)
    }

    // console.log(window.innerHeight)
    // console.log(window.innerWidth)

    // console.log(displayWord())
    // displayWord()
    setInterval(displayWord, 100)

})