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
        if (this.checkOperation()){
            this.operators[this.operator]();
        }
    }

    this.checkOperation = function(){
        this.trimUserInput();
        return this.isValid()
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

}