class Fila {
    private items: string[];
  
    constructor() {
      this.items = [];
    }
  
    append(name: string): void {
        this.items.push(name);
    }

  
    remove(): string | undefined {
        return this.items.shift();
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    getQueue(): string[] {
      return this.items;
    }
  }
  
  export default Fila;
  