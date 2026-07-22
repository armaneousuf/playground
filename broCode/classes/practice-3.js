class Thermostat{
    constructor(temp){
        this.temp = temp;
    }

    set temp(value){
        if(value < -273.15){
            console.log("Temperature is below absolute zero!");
        } else {
            this._temp = value;
        }
    }

    get temp(){
        return `${this._temp}°C`
    }

    get fahrenheit(){
        const calculatedF= (this._temp * 9/5) + 32; 
        return `${calculatedF}°F`
    }
}

const thermo = new Thermostat(25);
console.log(thermo.temp);
console.log(thermo.fahrenheit);
thermo.temp = -300;
console.log(thermo.temp);