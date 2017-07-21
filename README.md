# Web-para-Todos

O Web para Todos é um projeto de código aberto que visa, através de exemplos práticos, ajudar desenvolvedores na construção de sites mais acessíveis. É dividido em três seções:

- Exemplos de Componentes Acessíveis
- Página Modelo de Site Acessível
- Página Modelo de Site Não Acessível

A primeira seção citada é uma página com diversos exemplos de construção de elementos e widgets acessíveis em páginas web, desde exemplos simples como texto alternativo em vídeos até exemplos mais complexos, como um arrastar e soltar utilizando ARIA. As outras duas são apenas para fins demonstrativos, de como um website pode ser acessível ou não.

- [Site do Web Para Todos](https://cta-ifrs.github.io/Web-para-Todos/)

## Bibliotecas e Tecnologias Utilizadas

- [Docpad](https://docpad.org/) (node)
- [Bootstrap](http://getbootstrap.com/)
- [Template Bootstrap Acme](https://bootstrapthemes.co/item/acme-free-responsive-corporate-template/)
- [Bootstrap Acessibility Plugin](http://paypal.github.io/bootstrap-accessibility-plugin/)
- [Bootstrap Acessibility Theme](http://jbst.eu/bootstrap-a11y-theme/)
- [Engine de Template Eco](https://github.com/sstephenson/eco)
- [GitHub Pages](https://pages.github.com/)

## Instalação

Baixe os códigos fonte utilizando Git ou baixando um arquivo zip deste repositório. É necessário, no mínimo, possuir instalado Node.js ou apenas o gerenciador de pacotes NPM, mas é recomendável instalar o docpad através de `npm install -g docpad`. Para instalar as dependências, gerar os arquivos e rodar o servidor, utilize o seguinte comando:

```
npm install && npm start
```

Para realizar a implantação no GitHub Pages, utilize o seguinte comando:

```
docpad deploy-ghpages --env static
```

Ou, no caso de não possuir o docpad instalado globalmente, configuramos no `package.json` a utilização do seguinte comando:

```
npm run-script deploy
```

## Contribua!

O Web Para Todos é um projeto de código aberto, e aceita contribuições. Veja o [Guia para Contribuição do Web Para Todos](CONTRIBUTING.md) (CONTRIBUTING.md) para mais informações sobre instalação e contribuição.
