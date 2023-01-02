export default class ArrayNotes {
    constructor() {
        this.notes = [];
        this._subscribe = [];
    }

    addNote(title, textContent, category, important, urgent) {
        const newNote = new Note(title, textContent, category, important, urgent);
        this.notes.push(newNote);
        this.notify();
    }

    removeNote(index) {
        this.notes.splice(index, 1);
        this.notify();
    }

    subscribe(propsFunction) {
        this._subscribe.push(propsFunction);
    }

    unsubscribe(propsFunction) {
        this._subscribe = this._subscribe.filter(func => func !== propsFunction);
    }

    notify() {
        this._subscribe.forEach((func) => { func(this.notes) });
    }

}

class Note {
    constructor(title, textContent, category, important = false, urgent = false) {
        this.title = title;
        this.textContent = textContent;
        this.category = category;
        this.important = important;
        this.urgent = urgent;
    }

    getClassName() {
        if (this.important && this.urgent) {
            return "priority-number-one";

        } else if (this.important || this.urgent) {
            return "priority-number-two";

        } else{
            return "priority-number-three"
        }
    }

}
