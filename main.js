function Calculator(){
    this.arg1 = "";
    this.arg2 = "";
    this.operator = "";

    this.operators = {
        "+": this.add,
        "-": this.subtract,
        "*": this.multiply,
        "/": this.divide,
    }

    this.operate = function(){
        this.trimUserInput();
        if (this.isValid()){
            this.parseInput();

            this.operators[this.operator]();
        }
    }

    this.parseInput  = function(){
        this.arg1 = Number(this.arg1);
        this.arg2 = Number(this.arg2);
    }

    this.trimUserInput = function(){
        this.arg1 = this.arg1.trim();
        this.arg2 = this.arg2.trim();
        this.operator = this.operator.trim();
    }

    this.isValid = function(){
        return (
            this.arg1 && Number(this.arg1) != NaN &&
            this.arg2 && Number(this.arg2) != NaN &&
            this.operators[this.operator]
        )
    }

    /** operations */

    this.add = function(){
        return this.arg1 + this.arg2;
    }

    this.subtract = function(){
        return this.arg1 - this.arg2;
    }

    this.multiply = function(){
        return this.arg1 * this.arg2;
    }

    this.divide = function(){
        return this.arg1 / this.arg2;
    }
}