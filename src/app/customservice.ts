export class customService{
    public name;
    getContent(){
        return this.name;
    }
    setValue(param){
        this.name = param;
    }
}