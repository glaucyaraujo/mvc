import chalk from 'chalk';
import fs from 'fs';

function trataERRO(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding,(erro, texto) => {
        if (erro) {
        trataERRO(erro);
        }
        console.log(chalk.blue(texto));
    })
}

pegaArquivo('./biblioteca/texto.md');
