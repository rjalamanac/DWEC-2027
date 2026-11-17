class Document {
  constructor(text = "") {
    this.text = text;
  }
}

class InsertText {
  constructor(position, payload) {
    this.position = position;
    this.payload = payload;
  }
  execute(doc) {
    doc.text =
      doc.text.slice(0, this.position) +
      this.payload +
      doc.text.slice(this.position);
  }
  undo(doc) {
    doc.text =
      doc.text.slice(0, this.position) +
      doc.text.slice(this.position + this.payload.length);
  }
}

class DeleteRange {
  constructor(position, length) {
    this.position = position;
    this.length = length;
    this.removed = ""; // captured at execute() so undo can replay it
  }
  execute(doc) {
    this.removed = doc.text.slice(this.position, this.position + this.length);
    doc.text =
      doc.text.slice(0, this.position) +
      doc.text.slice(this.position + this.length);
  }
  undo(doc) {
    doc.text =
      doc.text.slice(0, this.position) +
      this.removed +
      doc.text.slice(this.position);
  }
}

class History {
  static instance = null;
  constructor() {
    if (History.instance === null) {
      History.instance = this;
      this.doc = doc;
      this.past = [];
      this.future = [];
    }
    return History.instance;
  }

  run(command) {
    command.execute(this.doc);
    this.past.push(command);
    this.future.length = 0; // any new edit invalidates the redo branch
  }
  undo() {
    const command = this.past.pop();
    if (!command) return;
    command.undo(this.doc);
    this.future.push(command);
  }
  redo() {
    const command = this.future.pop();
    if (!command) return;
    command.execute(this.doc);
    this.past.push(command);
  }
}

const doc = new Document("Hello world");
const history = new History(doc);

history.run(new InsertText(5, ",")); // "Hello, world"
history.run(new DeleteRange(6, 6)); // "Hello,"
history.undo(); // "Hello, world"
history.redo(); // "Hello,"
