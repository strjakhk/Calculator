function Calculator(){
    this.arg1 = "";
    this.arg2 = "";
    this.operator = "";
    
    this.operationLog = "";

    this.operators = {
        "+": this.add,
        "-": this.subtract,
        "*": this.multiply,
        "/": this.divide,
        "%": this.module,
    }

    this.operate = function(lastOperator){
        this.trimUserInput();
        if (this.isValid()){
            this.parseInput();
            const result = this.operators[this.operator]();
            this.updateOperationLog(lastOperator);
            this.arg1 = result
            
            if (this.operators[lastOperator]){
                this.operator = lastOperator;
            }
        }
    }

    this.clearCurrentOperation = function(){
        this.arg1 = "";
        this.arg2 = "";
        this.operator = "";
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

    // check if both arguments are valid
    this.isValid = function(){
        return (
            this.arg1 && Number(this.arg1) != NaN &&
            this.arg2 && Number(this.arg2) != NaN &&
            this.operators[this.operator]
        )
    }

    /** logging methods */

    this.getCurrentOperation = function(){
        const arg1 = this.arg1 ? this.arg1 + " " : "";
        const arg2 = this.arg2 ? this.arg2 + "" : "";
        const operator = this.operator ? this.operator + " " : "";
        return arg1 + operator + arg2;
    }

    this.updateOperationLog = function(lastOperator){
        this.operationLog += this.getCurrentOperation() + 
                                lastOperator + " ";
        this.clearCurrentOperation();
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

    this.module = function(){
        return this.arg1 % this.arg2;
    }
}