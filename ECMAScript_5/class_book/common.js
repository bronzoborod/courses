(function () {

    function Book(name, booktype, author) {
        this._name = name;
        this._booktype = booktype;
        this._author = author;

        this.getName = function () {
            return this._name;
        };
        this.getBooktype = function () {
            return this._booktype;
        };
        this.getAuthor = function () {
            return "Автор: " + this._author;
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
    }

    function AudioBook(name, booktype, author, carry, duration) {
        Book.apply(this, arguments);
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

    function Tutorial(name, booktype, author, page, publishing, binding) {
        Book.apply(this, arguments);
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

    function CRUD_Tutorial() {

    }


    let fast = new Tutorial(1, 2, 3, 4, 5, 6);
    console.log(fast.getPage());
    console.log(fast.getAuthor());
})();