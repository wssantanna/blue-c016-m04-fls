# Aula 01 - Recapitulando Front-end

## Controle de versão

### `git init`

Inicializa o controle de versão no projeto.

```bash
git init
```

### `git add`

Adiciona os arquivos que farão parte do histórico de alterações.

```bash
git add README.md
```

### `git commit`

Armazena em um histórico as alterações realizadas.

```bash
git commit -m "Descrição da alteração"
```

### `git status`

Retorna o status de todos os arquivos alterados.

```bash
git status
```

### `git log`

Retorna parcialmente/todos os históricos de alteração.

```bash
git log
```

### `git push`

Envia o histórico de alterações para o servidor remoto.

```bash
git push
```

### `git pull`

Atualiza o repositório local com as alterações realizadas no servidor.

```bash
git pull
```

## Estrutura básica de um documento HTML

A estrutura inicial de um documento leva em consideração os seguintes fatores:

- Tipo de documento `<!DOCTYPE html>`
- Idioma `lang="pt-br`
- Cabeçalho contendo tudo que deverá ser lido antes de carregar totalmente o documento `<header></header>`.
  - Título
  - Favicon (ícone usado nas abas de janela)
  - SEO da página - (Search Engine Optimization - otimização para mecanismos de busca)
  - etc.
- Corpo do documento que será responsável por tudo que o usuário irá visualizar.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título do documento</title>
</head>
<body>
    ...
</body>
</html>
```

**Nota:** É possível trabalhar com comentário para descrever com detalhes trechos de código.

```html
<!-- Este é um comentário. -->

<!--
    É possível trabalhar com mútiplas linhas 
    em seu comentário ;)   
-->
```

**Nota:** Existem outras versões do HTML que carregam recursos descontinuados nos navegadores modernos, mas que ainda podem ser úteis em projetos de escopo reduzido. [Saiba mais](http://www.w3big.com/pt/tags/tag-doctype.html)

### `<section>`

O elemento HTML `<section>` representa uma seção genérica contida em um documento HTML, geralmente com um título, quando não existir um elemento semântico mais específico para representá-lo.

#### Notas de uso

- Cada `<section>` deve ser identificado, geralmente incluindo um cabeçalho `<h1>-<h6>` como um filho do elemento `<section>`.
- Se faz sentido distribuir separadamente o conteúdo de um elemento , use um elemento `<article>` em seu lugar.
- Não use o elemento `<section>` como um container genérico; para isso que a `<div>` serve, especialmente quando a seção é apenas com propósito de estilização. Uma regra de ouro é quando um seção deve aparecer logicamente na estrutura de um documento.

**Fonte:** https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/section

Você pode usar uma `<section>` para definir áreas ou regiões para:

- Textos introdutórios
- Listagens
- Mapas
- Comentários
- Informações de contato

```html
<section>
  <h2>Título</h2>
  <p>Lotes de texto.</p>
</section>
```

### `<article>`

O Elemento HTML Article `<article>` representa uma composição independente em um documento, página, aplicação, ou site, ou que é destinado a ser distribuído de forma independente ou reutilizável, por exemplo, em sindicação. Este poderia ser o post de um fórum, um artigo de revista ou jornal, um post de um blog, um comentário enviado por um usuário, um gadget ou widget interativos, ou qualquer outra forma de conteúdo independente.

#### Notas de uso

- Quando um elemento `<article>` está aninhado, o elemento interior representa um artigo relacionado com o elemento exterior. Por exemplo, os comentários do post de um blog podem ser elementos `<article>` aninhados em `<article>` representando o post do blog.
- Informações sobre o autor de um elemento `<article>` podem ser fornecidas através do elemento `<address>`, mas ele não se aplica aos elementos `<article>` aninhados.
- A data e hora de publicação de um elemento `<article>` pode ser descrita usando o atributo pubdate de um elemento `<time>`.

Normalmente se usa um `<header>` dentro do `<article>` e também pode ser aconselhável usar um `<footer>`.

**Fonte:** https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/article

Você pode usar uma `<article>` para definir áreas ou regiões para:

- Poste em Foruns
- Entradas de Blog
- Artigos

```html
<article>
  <h2>Título</h2>
  <p>Lotes de texto.</p>
</article>
```

**Nota:** O que se observa é que você pode separa por exemplo um conjunto de articles em uma section, e em cada um desses articles você pode ter outras sections dentro. Por isso acredito que alguns de vocês tenham um pouco de dificuldade para interpretar quando utilizar `<articles>` e `<sections>`. 

### `<aside>`

O elemento HTML `<aside>` representa uma seção de uma página que consiste de conteúdo que é tangencialmente relacionado ao conteúdo do seu entorno, que poderia ser considerado separado do conteúdo. Essas seções são, muitas vezes, representadas como barras laterais. Elas muitas vezes contem explicações laterais, como a definição de um glossário; conteúdo vagamente relacionado, como avisos; a biografia do autor; ou, em aplicações web, informações de perfil ou links de blogs relacionados.
  
```html
<aside>
  <p>Algum conteudo relacionado a um <article></p>
</aside>  
```

**Fonte:** https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/aside


### `<main>`

Diferente dos elementos `<section>` e `<article>` por exemplo, que não é aconselhável ter mais de um `<main>` por documento, ou defini-lo dentro de um `<article>`. É utilizado basicamente para se dá destaque a um conteúdo, pois define o conteúdo como o principal da página, ou seja, o que deve ser lido primeiro e o que descreve o conteúdo que a página possui.

**Fonte:** https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/main

#### Notas de uso
- Utiliza-se quando se deseja definir qual o conteúdo principal do documento e/ou para se destacar o primeiro conteúdo a ser lido pelos motores de busca
- Não se deve utilizá-lo mais de uma vez por documento
- Não se deve utilizá-lo dentro de `<article>`, `<aside>`, `<section>`
- É aconselhável se resumir as informações que deseja definir como principal. 

```html
<main>
  <h1>Maçãs</h1>
  <p>A maçã é a fruta pomácea da macieira.</p>

  <article>
    <h2>Vermelho delicioso</h2>
    <p>Estas maçãs vermelhas brilhantes são as mais comumente encontradas em muitos supermercados.</p>
    <p>... </p>
    <p>... </p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>Essas suculentas maçãs verdes, são um ótimo recheio para torta de maçã.</p>
    <p>... </p>
    <p>... </p>
  </article>
</main>

<section>
  <h1>Conteúdo de menos relevância</h1>
  <p>...</p>
</section>
```

### Modelo de Estrutura HTML construída com tag(s) semântica(s):

![Exemplo de Estrutura semântica](https://i.stack.imgur.com/cm0rd.jpg)

## "Estrutura HTML não semântica" versos "Estrutura semântica" 

![Exemplo de Estrutura não semântica vs Estrutura semântica](https://i.stack.imgur.com/w9ADa.jpg)

**Fonte:** https://www.vikingcodeschool.com/html5-and-css3/html5-semantic-tags

### Exemplo prático

Nesse exemplo vai ficar a critério do time definir o escopo e entendimento de como deve ser interpretado semanticamente "Missão, Visão e Valores". Se cada parte funciona sozinha ou se a mensagem só funciona em conjunto.

Se você entende que a "Missão, Visão e Valores" pertencem ao mesmo contexto, e não faria sentido, por exemplo, usar apenas os Valores de forma insolada em outras partes do site, te sugiro usar um article montado como abaixo:

``` html
<article>
  <h2>Missão, Visão e Valores</h2>
  <section>
    <h3>Missão</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </section>
  <section>
    <h3>Visão</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </section>
  <section>
    <h3>Valores</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </section>
</article>
```

Já se você acredita que é plenamente possível usar apenas a Missão em determinada parte da página e que mesmo insolada ela passaria a mensagem de forma adequada e não depende de Visão e Valores você pode separar "Missão, Visão e Valores" em `<article>` dentro de uma `<section>`, pois o `<article>` funciona de forma independente sem depender do restante do conteúdso ao redor.

``` html
<section>
  <h2>Missão, Visão e Valores</h2>
  <article>
    <h3>Missão</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </article>
  <article>
    <h3>Visão</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </article>
  <article>
    <h3>Valores</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </article>
</section>
```


HTML: Formulário

## Formulários
### Qual a diferença do(s) elemento(s) de formulário, comparado com as demais?

Os campos, ou `input` permitem recolher dados do usuário, em outras palavras, é uma ponte de comunicação do usuário com o sistema.
É importante observar que os dados por vezes precisam se modificados para se encaixar perfeitamente com o que o sistema necessita. Apelidamos esse processo de modificação de **tratamento**.

### Como normalmente os dados são tratados?

A princípio não iremos aprofundar nossa abordagem sobre arquitetura de sistemas, porém é fundamental comepreender que os formulários que trabalharemos enviarão as informações para um sistemna a partir de um serviço disponilizado via API - Interface de programação de aplicações. O processo é simples, a partir de um formulário coletamos os dados e enviamos para o sistema a partir de um link seguindo um **método de envio**.

### Métodos de envio de dados

É possível emular dois métodos de envio a partir de um documento HTML, são eles `GET` e `POST`.

```html
<html>
  <head>
    ...
    <title>...<title>
  </head>
  <body>
    <form action="https://api.sistema.com/cadastrar" method="GET">
      ...
    </form>
  </body>
</html>
```

#### GET

Enviar os dados do formulário via URI, ou seja, os dados são enviados como parametro na URL.

#### POST

Enviar os dados do formulário no corpo de uma requisição HTTP.

### Tipos de campos de formulário

#### `<input>`

```html
<input name="nome" type="text">
```

`required`

```html
<input name="cpf" type="text" required>
```

`type=""`

```html
<input name="nome" type="nome">
<input name="email" type="email">
<input name="telefone" type="tel">
<input name="senha" type="password">
```

#### `<input type="radio">`

```html
<h1>Você é um estudante da Digital House?</h1>
<form>
  <div>
    <input id="sim" type="radio" name="estudante" value="sim">
    <label for="sim">Sim</label>
  </div>
  <div>
    <input id="nao" type="radio" name="estudante" value="nao">
    <label for="nao">Não</label>
  </div>
</form>
```

#### `<input type="checkbox">`

```html
<h1>Quais clubes você costuma torcer?</h1>
<form>
  <div>
    <input type="checkbox" name="clube" value="flamengo" id="flamengo">
    <label for="flamengo">Flamengo</label>
  </div>
  <div>
    <input type="checkbox" name="clube" value="vasco" id="vasco">
    <label for="vasco">Vasco</label>
  </div>
</form>
```

**Nota:** Você pode utilizar o atributo `checked` para marcar a opções por padrão.

#### `<select> <option>`

```html
<h1>Escolha a cor do veículo</h1>
<select name="cor">
  <option value="vermelho">Vermelho</option>
  <option value="verde">Verde</option>
  <option value="azul">Azul</option>
  <option value="roxo">Roxo</option>
</select>
```

**Nota:** Você pode utilizar o atributo `selected` para selecionar a opção padrão.

### Semântica / Acessibilidade 

#### `<label for="">`

```html
<label for="nome">Nome completo</label>
<input id="nome" name="nome" type="text">
```

**Nota:** Para associar a `label` ao `input` deve-se utilizar o atributo **id**. 
#### `placeholder=""`

```html
<label for="nome">Nome</label>
<input id="nome" name="nome" type="text" placeholder="Digite seu nome completo">
```

#### `<fieldset> <legend>`

```html
<fieldset>
  <legend>Para qual time você torce?</legend>
  <div>
    <input id="flamengo" type="radio" name="clube" value="flamengo">
    <label for="flamengo">Flamengo</label>
  </div>
  <div>
      <input id="vasco" type="radio" name="clube" value="vasco">
      <label for="vasco">Vasco</label>
  </div>
</fieldset>
```

#### `<optgroup>`

```html
<select>
  <optgroup label="Ferrari">
    <option>458 Spider</option>
    <option>F12 Berlinetta</option>
    <option>California T</option>
  </optgroup>
  <optgroup label="Porsche">
    <option>Macan</option>
    <option>918 Spyder</option>
  </optgroup>
</select>
```

## Estilos CSS

## Link(s) referência:

- [ ] https://developer.mozilla.org/pt-BR/docs/Web/Reference
- [ ] https://www.w3.org/standards/webdesign/
- [ ] https://html.spec.whatwg.org/
- [ ] https://www.w3schools.com/
## Dicas do professor

### Artigos e outros materiais

- [ ] [Padrões de Semântica/Acessibilidade HTML W3C](https://www.w3c.br/Padroes/WebSemantica)

- [ ] [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)

### Validação HTML5

Conselho o uso das seguintes ferramentas:
- [ ] https://h5validator.appspot.com/dcm/asset 
- [ ] https://validator.w3.org/

### Material extra-currícular

- [ ] [HTML: SEO (Otimização para motores de busca)](./extra-curricular/README.md)