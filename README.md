# React - Fundamentos

## Elementos
    - Elementos são os menores blocos de construção de aplicativos React
    ```javascript
        const element = <h1>Hello, world</h1>;
    ```
    - Ao contrário dos elementos DOM do navegador, os elementos React são objetos simples e baratos de criar. O React DOM se encarrega de atualizar o DOM para corresponder aos elementos React
    - Os elementos React são imutáveis. Depois de criar um elemento, você não pode alterar seus filhos ou atributos. Um elemento é como um único quadro em um filme: ele representa a IU em um determinado ponto no tempo
    - O React atualiza somente o que é necessário

## JSX
    - JSX significa JavaScript XML
    - Com JSX, podemos escrever o que parece HTML, e também podemos criar e usar nossas próprias tags semelhantes a XML
    - Exemplo de JSX atribuído a uma variável: 
    ```javascript
        const heading = <h1 className="site-heading">Hello, World</h1>
    ```
    - O uso de JSX não é obrigatório para escrever React. Por baixo do capô, ele está em execução createElement, que pega a tag, o objeto que contém as propriedades e os filhos do componente e renderiza as mesmas informações. 
    - Exemplo que terá a mesma saída do JSX acima.
    ```javascript
        const heading = React.createElement('h1', {className: 'site-heading'}, Hello, World)
    ```
    - O JSX está mais próximo do JavaScript e não do HTML, portanto, há algumas diferenças importantes a serem observadas ao escrevê-lo.

    * className é usado em vez de class para adicionar classes CSS, pois class é uma palavra chave reservada em JS
    * Propriedades e métodos em JSX são camelCase - onclick se tornarão onClick.
    * As tags de autofechamento devem terminar em uma barra - por exemplo <img />

    - As expressões JS podem ser incorporadas ao JSX usando chaves, incluindo variáveis, funções e propriedades.
    ```javascript
        const name = 'Wellington'
        const heading = <h1>Hello, {name}</h1>
    ```
    - o React DOM usa a convenção de nomenclatura de propriedade camelCase em vez de nomes de atributos HTML
    - Babel compila JSX para chamadas React.createElement ().

## Componentes e funções
    - Componentes podem ser aninhados em outros componentes e os componentes de função e de classe podem ser misturados
    # Class Component
    ```javascript
        class ClassComponent extends Component {
            render() {
                return <div>Example</div>
            }
        }
    ```
    - Um componente de classe deve incluir o método render() e o return só pode retornar um elemento pai.
    - Anteriormente era necessário ter o construtor em componentes de classe no React, mas não é mais necessário.

    # Function Component
    ```javascript
    const SimpleComponent = () => {
        return <div>Example</div>
    }
    ```
    - Se o return conter só uma linha não precisa de parenteses

## Gerenciamento de estado
    - Props são uma forma eficaz de passar dados existentes para um componente React, no entanto o componente não pode alterar as props (read-only) e o fluxo de dados é unilateral
    - Com State podemos atualizar dados privados de um componente
    - Recuperar um state: const characters = this.state.characters
    - Atualizar um state: this.setState()
    - Não atualizar o state dessa maneira (this.state.property = ""), deve sempre utilizar o this.setState()
    - componentDidMount é chamado assim que o componente for rendenrizado no DOM
    - componentWillUnmount é chamado quando o componente é removido do DOM
    - As atualizações de estado são mescladas, Ex: atualizar somente uma propriedade do estado de um estado que contém várias propriedades
    - Atualizações de State podem ser assíncronas, pois o React pode agrupar várias chamadas SetState() em uma única atualização para desempenho
    - Fluxo de dados “top-down” ou “unidirecional”
    - Exemplo de atualização de estado em componentes de classe:
    ```javascript
        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }));
    ```

 ## Eventos
    - Cuidar com o significado do this nos callbacks do JSX
    - Métodos de classe (teste(){}) não são vinculados por padrão 
    - Ao usar um método de classe como callback (onClick={this.teste}), fazer o bind manual desse método (this.teste = this.teste.bind(this);)
    - Funções de campos de classe pública (teste = () => {}) é habilitada por padrão no Create React App e vincula callbacks corretamente
    - Essa sintaxe (onClick={() => this.teste()}) garante que o `this` seja vinculado a função teste.

 ## Listas e Chaves
    - Por via de regra, os elementos dentro de uma função map() devem especificar chaves.
    - Chaves devem ser únicas apenas entre elementos irmãos
    - Evitar o uso de índice como chave (<li key={index}>)
 
 ## Forms
    - Controlled Components:
        - Quando o React controla as entradas dos inputs fazendo o estado do React ser a única fonte da verdade
        - A combinação do estado dos elementos de formulário como <input>, <textarea> e <select> com o estado(state) mutável do React

 ## Hooks
    - É uma nova forma que permite usar o state e outros recursos do React sem escrever uma classe
    - São funções que permitem a você ligar-se aos recursos de state e ciclo de vida do React a partir de componentes funcionais
    - Não funcionam dentro de classes
    - Permite extrair lógica com estado de um componente sem mudar sua hierarquia de componentes de uma forma que possa ser testada independentemente e reutilizada
    - Apenas chame Hooks no nível mais alto. Não chame Hooks dentro de loops, condições ou funções aninhadas.
    - Apenas chame Hooks de componentes funcionais. Não chame Hooks de funções JavaScript comuns.
    - A convenção de nome useSomething é como o plugin de linter é capaz de encontrar bugs no código que utiliza Hooks.
    - Não usar Hooks dentro de funções JavaScript comuns, somente dentro de funções do React


# Redux
    - Gerenciamento de estado da aplicação externalizado
    - Lib de arquitetura para aplicações JS
    - Centraliza os dados e o fluxo de dados, lógica de funcionamento e regras de negócio em um único local

## Ciclo de funcionamento
    - Evento => action creator => action => middlewares => dispatch => reducers => altera o estado => nova versão da UI
    ### Action Creator
        - É uma função síncrona que retorna uma Action (não pode retornar uma promisse)
        ```javascript
            function fazerAlgo(param){
                /* logica */
                return {
                    type: 'NOME_DO_EVENTO',
                    payload: {}
                }
            }
        ```
    ### Action 
        - É um objeto que possui pelo menos um atributo identificador da action, por convenção o atributo (type)
        - Uma action é sempre passada para todos os reducers
        ```javascript
            {
                type: 'NOME_DO_EVENTO',
                payload: {}
            }
        ```
    ### Middlewares
        - usado para permitir assincronismo pois o fluxo todo é sincrono
    ### Reducers
        - Os reducers produzem a nova versão do state
        - Cada reducer altera um atributo do estado, recebe dois parâmetros(state atual, action) e retorna o state atual somado aos novos dados
        - São Funções Puras
        - O disparo acontece pelo dispatching de uma action, onde todos os reducers recebem essa action e somente o reducers com o type da action gera o novo estado

    ### State do Redux
        - É um objeto chave valor
        - O State é imutável
        ```javascript
            {
                produtos: [],
                autenticacao: {}
            }
        ```
        - As novas versões do estado é gerada por funções (reducers)
        - O estado anterior passado a cada função do reducer é correspondente aquela função
        ```javascript
           {
                produtos: function(estadoAnterior, acao){
                   return proximoEstado
                },
                autenticacao: function(estadoAnterior, acao){
                        return proximoEstado
                    },
            }
        ```
        - Resolve o problema de prop drilling(repassar props niveis abaixo da árvore de elementos)