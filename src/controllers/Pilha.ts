export default class Pilha {
  private stack: PacienteProps[] = [];

  public push(nome: string, doador: boolean): void {
    this.stack.push({ nome, doador });
  }

  public pop(): PacienteProps {
    return this.stack.pop()!;
  }

  public isEmpty(): boolean {
    return this.stack.length === 0;
  }

  public getStack(): PacienteProps[] {
    return this.stack;
  }}