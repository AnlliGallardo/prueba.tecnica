

export class Storage  {

    constructor(){
        this.city = 'Bogota';
        this.defaultCity = 'Colombia';
    }

    getLocacionData(){
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city');
        }
        return{
            city: this.city
        }
    }
    setLocacionData(city){
        localStorage.setItem('city', city);
        
    }

    // render() {
    //     return (
    //         <div>
                
    //         </div>
    //     )
    // }
}