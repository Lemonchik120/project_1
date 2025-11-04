function calculateFuel(planet) {
        console.log(planet);
        let shipWeight = Number(document.getElementById("shipWeight").value);
        let speed = Number(document.getElementById("speed").value);
        let k = 10;
        let edge = 590;
        let planetName = "";
        if (shipWeight <= 0 || speed <= 0) {
            document.getElementById("result").innerText = "Корабель не злетить! Перевір ваги або швидкості!";
            return;
        }
        
        if (planet == "Mars"){
            k = 10;
            edge = 590;
            planetName = "Марс";
        }

        if(planet == "Jupiter"){
            k = 100;
            edge = 890;
            planetName ="Юпітер";
        }

            if (planet == "Moon"){
            k = 5;
            edge = 250;
            planetName = "Місяць";
        }

        let fuel = k * shipWeight * speed;

        if (fuel > edge) {
            document.getElementById("result").innerText = 
                "Летимо на "+planetName+"! Потрібно " + fuel + " літрів пального.";
        } else {
            document.getElementById("result").innerText = 
                "Замало пального (" + fuel + " літрів). Додай ще, щоб досягти "+planetName+"у!";
        }
    }