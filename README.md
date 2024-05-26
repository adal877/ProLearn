# Projeto de Gerenciamento de Cursos
Este é um projeto de gerenciamento de cursos que utiliza Node.js, Express, MongoDB e EJS para a criação de uma aplicação web.

## Tecnologias Utilizadas
- Node.js
- Express
- MongoDB
- EJS
- Body-parser
## Instalação
Clone o repositório

Instale as dependências com ```npm install```

Inicie o servidor com ```npm start```
## Estrutura do Projeto

```index.js```: Arquivo principal que inicia o servidor e conecta ao MongoDB.

```models/```: Contém o modelo de dados para os cursos.

```routes/```: Contém as rotas da API e as rotas do frontend.

```views/```: Contém os arquivos EJS para renderização do frontend.

## Uso
Após iniciar o servidor, a aplicação estará disponível no localhost:3000. A página inicial redireciona para /cursos, onde a lista de cursos é exibida.
## Referencias das APIS

A seguir uma breve apresentação dos endpoints da aplicação. Para você não ficar perdido com tantos endpoints 😁

### API Endpoints
Os endpoints da API estão localizados em 
```
routes/CursoRoutes/cursoApiRoutes.js.
```

| Método        | Endpoint              | Descrição                              |
| :--------     | :---------------      | :--------------------------------      |
| `GET`         | `/api/v1/cursos`      | Lista todos os cursos.                 |
| `GET`         | `/api/v1/curso/:id`   | Exibe um curso específico.             |
| `POST`        | `/api/v1/curso`       | Cria um novo curso.                    |
| `PATCH`       | `/api/v1/curso/:id`   | Atualiza um curso específico.          |
| `DELETE`      | `/api/v1/curso/:id`   | Deleta um curso específico.            |

  

### Frontend Endpoints
Os endpoints do frontend estão localizados em 
```
routes/CursoRoutes/cursoRoutes.js.
```


| Método        | Endpoint              | Descrição                              |
| :--------     | :---------------      | :--------------------------------      |
| `GET`         | `/cursos`             | Lista todos os cursos.                 |
| `GET`         | `/cursos/new`         | Exibe o formulário de criação de curso.|
| `GET`         | `/cursos/:id`         | Exibe um curso específico.             |
| `GET`         | `/cursos/:id/edit`    | Exibe o formulário de edição de curso. |

