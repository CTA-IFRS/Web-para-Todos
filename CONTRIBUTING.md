# Como Contribuir

O Web Para Todos é um projeto de código aberto, distribuido com uma licença GPLv3. Para contribuir com o projeto, é necessário seguir alguns passos para ter seu ambiente pronto, além de ter noção de como o projeto está organizado.

## Primeiros Passos

### Softwares e Frameworks
Certifique-se de que você tem os seguintes softwares e frameworks instalados:

- Node.js (ou uma forma de utilizar o NPM)
- Git (para atualizar e fazer upstream de mudanças)
- Docpad instalado globalmente

### Instalação

Primeiro, clone o repositório dos códigos fonte:

```
git clone https://github.com/CTA-IFRS/Web-para-Todos
```

Após, utilize o seguinte comando para atualizar os plugins do Docpad e pacotes do NPM:

```
npm install
```

Não é estritamente necessário possuir o Docpad instalado globalmente para rodar o servidor. Porém, para outras operações, talvez seja mais recomendável possui-lo instalado dessa forma. Para isso, utilize o seguinte comando:
```
npm install -g docpad
```

### Servindo Arquivos Estáticos

Para gerar os arquivos estáticos, criar o servidor na porta padrão do Docpad (9778) e utilizar o serviço de `watch`, que gera novamente os arquivos que forem modificados, utilize o seguinte comando:

```
docpad run
```

Geralmente, apenas o comando `run` é utilizado para desenvolver. Porém, é possível utilizar as seguintes opções:
- `docpad generate` para apenas gerar os arquivos estáticos com base em todos os arquivos fonte.
- `docpad watch` para apenas gerar arquivos que foram modificados.
- `docpad server` para apenas criar o servidor em cima dos últimos arquivos gerados.

Quando não há o docpad instalado globalmente é possível utilizar o seguinte comando do npm que, neste caso, funciona como uma alternativa ao `docpad server`:

```
npm start
```

Ao criar o servidor, é possível acessá-lo através de `http://localhost:9778`. Se por algum motivo a porta 9778 estiver sendo utilizada por outro aplicativo, modifique o arquivo `docpad.coffe` da seguinte forma para utilizar outra porta:

```
# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	renderPasses: 3
    # Insira a linha seguinte para alterar a porta
    port: 8000
}

# Export the DocPad Configuration
module.exports = docpadConfig

```

### Organização dos Diretórios e Arquivos

Primeiramente, recomendamos ler a página [Visão Geral do Docpad (em inglês)](https://docpad.org/docs/overview/) da documentação oficial do framework. Essas informações lhe darão um entendimento melhor do funcionamento dele.

Dentro do diretório `src/documents` estão contidos os códigos fonte HTML e Eco do site. Há três diretórios aqui:

- `exemplos`: arquivos dos exemplos de componentes accessíveis
- `modelo-acessibilidade`: arquivos do modelo de site acessível
- `modelo-nao-acessibilidade`: arquivos do modelo de site não acessível

#### Exemplos de Componentes Acessíveis

Os exemplos utilizam o layout `default.html.eco` e estão organizados da seguinte forma:

- Os arquivos de CSS, JavaScript, imagens e outros estão na raiz do diretório `files/`.
- Cada diretório dentro de `src/documents/exemplos` equivale a uma seção da página de exemplos. O Arquivo `index.html.eco`, dentro do mesmo diretório, equivale a um "indexador": ele utiliza a função `include` para carregar o arquivo "indexador" de cada seção.
- As seções possuem outro arquivo deste tipo, que pode ser `index.html.eco` ou `index.html`, dependendo da necessidade. Alguns possuem outro diretório dentro, e cada arquivo neste equivale a um exemplo ou seção correspondente ao nível de título 3 (por exemplo).
- Os indexadores de cada seção são mais livres para carregar os outros arquivos. Isso se deve ao fato de que cada seção demonstra os exemplos através de métodos diferentes, por conta da natureza dos mesmos. Deve-se, antes de ir atrás dos outros arquivos, entender como o indexador da seção os está carregando.

### Modelos de Acessibilidade e Não Acessibilidade

Estes utilizam o template Acme, e carregam os layouts `ex-a11y.html.eco` e `ex-nao-a11y.html.eco`. Os arquivos CSS, JavaScript, imagens e outros do diretório `files` estão nos diretórios `modelo-a11y` e `modelo-nao-a11y`.

## Contribuições

Para incluir novos exemplos, seções ou contribuições para a organização, faça um fork do repositório, modifique este como desejado e realize um pull request. São aceitos quaisquer tipos de contribuição, como novos exemplos, refatorações e outras formas de organizar o código fonte.
