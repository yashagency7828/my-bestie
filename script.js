document.addEventListener("DOMContentLoaded", function () {
    const message = "Hey Bestie! Tum meri life ka sabse special part ho. 💖";
    let index = 0;

    function typeEffect() {
        if (index < message.length) {
            document.getElementById("message").innerHTML += message.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        } else {
            document.getElementById("bestie-pic").classList.remove("hidden");
        }
    }

    window.playMusic = function () {
        document.getElementById("bg-music").play();
        typeEffect();
    };
});
