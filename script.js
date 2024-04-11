function countdown(seconds) {
    let interval = setInterval(function() {
        if (seconds <= 0) {
            clearInterval(interval);
            console.log("Отсчет завершен!");
        } else {
            console.log(seconds + " секунд осталось");
            seconds--;
        }
    }, 1000);
}
countdown(10);

