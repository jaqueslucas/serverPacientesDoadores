import fs from 'fs-extra';
import path from 'path';

const dataPath = path.join(__dirname,"./dados.txt")

class Arquivo {
  async lerArquivo(): Promise<string[] | never> {
    try {
      const data = await fs.readFile(dataPath, 'utf-8');
      return data.split('\n');
    } catch (error) {
      throw new Error('Erro ao ler o arquivo');
    }
  }

  async escreverArquivo(nomes: unknown[]): Promise<void | never> {
    try {
      await fs.writeFile(dataPath, nomes.join('\n'));
    } catch (error) {
      throw new Error('Erro ao escrever no arquivo');
    }
  }
}

export default Arquivo;
