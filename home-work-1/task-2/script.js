(function () {

    let docBut = document.getElementsByTagName("button"),
        openLink = function () {
            window.open("https://www.google.com/");
        }, openImg = function () {
            document.querySelector(".image-wrap").classList.toggle('active');
        }, createClass = function () {
            function person(name, surname, weight, height) {
                this.name = name;
                this.surname = surname;
                this.weight = weight;
                this.height = height;

                this.loging = function () {
                    return "Имя: " + this.name + "<br>Фамилия: " + this.surname + "<br>Вес: " + this.weight + "<br>Рост: " + this.height;
                }
            }

            let newPerson = new person("Вася", "Рос", 140, 100);
            console.log(newPerson);
            document.getElementById("person-wrap").innerHTML = newPerson.loging();
        };


    //я не уверен что это хороший вариант вызывать функции на кнопку
    for (let i = 0; i < docBut.length; i++) {
        docBut[i].addEventListener('click', function () {
            let funName = docBut[i].getAttribute('data-source');
            eval(funName)();
        });
    }


})();