function Book(name, booktype, author, language, year, city) {
    this._name = name;
    this._booktype = booktype;
    this._author = author;
    this._language = language
    this._year = year;
    this._country = country;

    this.getName = function () {
        return this._name;
    };
    this.getBooktype = function () {
        return this._booktype;
    };
    this.getAuthor = function () {
        return "Автор: " + this._author;
    };
    this.getLanguage = function () {
        return this._language;
    };
    this.getYear = function () {
        if (_year<0){
            return this._year + "до н.э."
        }else{
            return this._year + "г.";
        }
    };
    this.getCountry = function () {
        return this._country;
    };
    this.setName = function (name) {
        this._name = name;
    };
    this.setType = function (type) {
        this._booktype = type;
    };
    this.setAuthor = function (author) {
        this._author = author;
    };
    this.setLanguage = function (language) {
        this._language = language;
    };
    this.setYear = function (year) {
        this._year = year;
    };
    this.setCity = function (country) {
        this._country = country;
    }
}

function AudioBook(name, booktype, author, language, year, country, carry, duration) {
    Book.apply(this, [name, booktype, author, language, year, country]);
    this.carry = carry;
    this.duration = duration;

    this.getCarry = function () {
        return this.carry;
    };
    this.getDuration = function () {
        return this.duration
    };
    this.setCarry = function (carry) {
        this.carry = carry;
    };
    this.setDuration = function (duration) {
        this.duration = duration;
    };
}

function Tutorial(name, booktype, author, language, year, country, page, publishing, binding) {
    Book.apply(this, [name, booktype, author, language, year, country]);
    this.page = page;
    this.publishing = publishing;
    this.binding = binding;

    this.getPage = function () {
        return this.page;
    };
    this.getPublishing = function () {
        return this.publishing;
    };
    this.getBinding = function () {
        return this.binding;
    };
    this.setPage = function (page) {
        this.page = page;
    };
    this.setPublishing = function (publishing) {
        this.publishing = publishing;
    };
    this.setBinding = function (binding) {
        this.binding = binding;
    }
}


var deleteClass = function (currentClass) {

    },
    createClass = function (currentClass) {
        window.location.href="page/add.html";
    },
    updateClass = function (currentClass) {

    },
    displayClass = function (currentClass) {

    };


let fast = new Tutorial(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(fast.getPage());
console.log(fast.getAuthor());