export default class Categories{
    constructor(){
        this.category = [];
        this._subscribed = [];
    }

    subscribe(propsFunction){
        this._subscribed.push(propsFunction);
    }

    unsubscribe(propsFunction){
        this._subscribed = this._subscribed.filter(f => f !== propsFunction);
    }

    notify(){
        this._subscribed.forEach((func)=>{
            func(this.category);
        })

    }

    addCategory(newCategory){
        this.category.push(newCategory);
        this.notify();
    }
}