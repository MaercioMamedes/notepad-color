export default class ArrayNotes{
    constructor(){
        this.notes = [];
        this._subscribe = [];
    }

    addNote(title, textContent, category){
        const newNote= new Note(title, textContent, category);
        this.notes.push(newNote);
        this.notify();
    }

    removeNote(index){
        this.notes.splice(index,1);
        this.notify();
    }

    subscribe(propsFunction){
        this._subscribe.push(propsFunction);
    }

    unsubscribe(propsFunction){
        this._subscribe = this._subscribe.filter(func => func !== propsFunction);
    }

    notify(){
        this._subscribe.forEach((func)=>{ func(this.notes)});
    }

}

class Note{
    constructor(title, textContent, category){
        this.title = title;
        this.textContent = textContent;
        this.category = category;
    }
}