// getter = special method that makes a property readable
// setter = special method that makes a property writeable
// validate and modify a value when reading / writing a property


class Rectangle{ 
    constructor(width, height){
    this.width = width;
    this.height = height;

    }
    set height(newhight){
        if(newhight>0){
            this._height= newhight;
        }else{
            console.error("width must be a psitive number!!")
        }
    }  
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get fullInfo(){
        return `info :  ${this._height}  ${this.width}.`;
    }
}


const pr1 = Rectangle(3, 4);
console.log(pr1.width);
console.log(pr1.height);
