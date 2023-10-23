export class Note {
    _name = "";
    _done = "false";
  
    constructor(container, name = "", done = false) {
      this.item = document.createElement("div");
      this.buttonGroup = document.createElement("div");
      this.nameSpan = document.createElement("span");
      this.doneBunnton = document.createElement("button");
      this.deleteBunnon = document.createElement("button");
  
      this.item.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      this.buttonGroup.classList.add("btn-group", "btn-group-sm");
      this.doneBunnton.classList.add("btn", "btn-success");
      this.doneBunnton.textContent = "Готово";
      this.deleteBunnon.classList.add("btn", "btn-danger");
      this.deleteBunnon.textContent = "Удалить";
  
      this.doneBunnton.addEventListener("click", () => {
        this.done = !this.done;
      });
  
      this.deleteBunnon.addEventListener("click", () => {
        if (confirm("Вы уверены?")) {
          this.delete();
        }
      });
  
      this.buttonGroup.append(this.doneBunnton);
      this.buttonGroup.append(this.deleteBunnon);
      this.item.append(this.nameSpan);
      this.item.append(this.buttonGroup);
  
      this.name = name;
      this.done = done;
  
      container.append(this.item);
    }
  
    set name(value) {
      this._name = value;
      this.nameSpan.textContent = value;
    }
  
    get name() {
      return this._name;
    }
  
    set done(value) {
      this._done = value;
  
      if (value) {
        this.item.classList.add("list-group-item-success");
      } else {
        this.item.classList.remove("list-group-item-success");
      }
    }
  
    get done() {
      return this._done;
    }
  
    delete() {
      this.item.remove();
    }
  }