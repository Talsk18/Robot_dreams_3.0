document.addEventListener('DOMContentLoaded', function () {
    let p = document.querySelector("p");



    setInterval(function () {
        let date1 = new Date('2024-01-01T23:59:59');
            let date2 = new Date();
        function calcDate(date1, date2) {
            
            let diff = Math.floor(date1.getTime() - date2.getTime());
            let day = 1000 * 60 * 60 * 24;

            let days = Math.floor(diff / day);
            let months = Math.floor(days / 31);
            let years = Math.floor(months / 12);
            let hours = Math.floor(days * 24);
            let minutes = Math.floor(hours * 60);
            let seconds = Math.floor(minutes * 60);

            let hoursLastDay = Math.floor(date1.getHours() - date2.getHours());
            let minutesLastDay = Math.floor(date1.getMinutes() - date2.getMinutes());
            let secondsLastDay = Math.floor(date1.getSeconds() - date2.getSeconds());


            let result = `${days}d ${hoursLastDay}h ${minutesLastDay}m ${secondsLastDay}s`;

            return result;

        }
        p.innerText = calcDate(date1, date2);
        console.log(calcDate(date1, date2));
    }, 1000);
});