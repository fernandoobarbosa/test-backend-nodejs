# Teste backend node js

## Descrição
Este é meu projeto para o teste backend da empresa anota ai dev, este projeto é uma API de produtos.

## Pré-Requisitos
- NodeJS 
- MongoDB

## Executando o projeto
- Clone o repositório
- Altere o arquivo .env para configurar a porta e a conexão com seu banco MongoDB
- Acesse a pasta raiz e execute o seguinte comando:
```
  npm install
  npm start
```

## Rotas Disponíveis


### Produto
*POST /product* - Insere um novo produto no banco
---
#### Parâmetros: 
| Nome           | Local | Descrição         | Exemplo              | 
|----------------|-------|-------------------|----------------------|
|        title   | body  | titulo do produto | "Skate"              |
|  description   | body  | descrição         | "Possui rodas"       |
|        price   | body  | valor do produto  | 12.32                |
|     category   | body  | categoria         | "Esporte"            |



#### Retornos:
| Status | Descrição             | Body                                     |
|--------|-----------------------|------------------------------------------|
| 201    | Produto Criado        | Mensagem : "Product Created"                           |
| 400    | Erro                  | Descrição do erro                        |

---
*GET /products* - Retorna todos os produtos cadastrados
---
#### Retornos:
| Status | Descrição             | Body                                     |
|--------|-----------------------|------------------------------------------|
| 200    | Produtos              | Todos os produtos                        |
| 400    | Erro                  | Descrição do erro                        |

---

*DELETE /product* - Deleta um produto pelo id
---
#### Parâmetros: 
| Nome           | Local | Descrição         | Exemplo              | 
|----------------|-------|-------------------|----------------------|
|           id   | body  | id do produto     | "123489432"          |


#### Retornos:
| Status | Descrição             | Body                                     |
|--------|-----------------------|------------------------------------------|
| 200    | Produto Deletado      | Mensagem : "Product deleted              |
| 400    | Erro                  | Descrição do erro                        |

---

*PUT /product* - Atualiza um produto no banco pelo id
---
#### Parâmetros: 
| Nome           | Local | Descrição         | Exemplo              | 
|----------------|-------|-------------------|----------------------|
|        id      | body  |  id do produto    | "21212121"           |
|        title   | body  | titulo do produto | "Skate"              |
|  description   | body  | descrição         | "Possui rodas"       |
|        price   | body  | valor do produto  | 12.32                |
|     category   | body  | categoria         | "Esporte"            |

#### Retornos:
| Status | Descrição             | Body                                     |
|--------|-----------------------|------------------------------------------|
| 200    | Produto Atualizado    | Objeto com o produto                     |  
| 400    | Erro                  | Descrição do erro                        |

*PUT /products* - Retorna os produtos filtrados pela categoria
---
#### Parâmetros: 
| Nome           | Local | Descrição         | Exemplo                      | 
|     category   | body  | categoria         | "Esporte"                    |

#### Retornos:
| Status | Descrição             | Body                                     |
|--------|-----------------------|------------------------------------------|
| 200    | Produtos com o filtro | Produtos com o filtro                    |  
| 400    | Erro                  | Descrição do erro                        |


---
*PUT /category* - Altera a categoria de um produto pelo id
#### Parâmetros: 
| Nome           | Local | Descrição         | Exemplo              | 
|----------------|-------|-------------------|----------------------|
|        id      | body  | titulo do produto | "12121"              |
|     category   | body  | categoria         | "Esporte"            |



#### Retornos:
| Status | Descrição             | Body                                     |
|--------|-----------------------|------------------------------------------|
| 200    | Produto Criado        | Mensagem : "Category updated"            |
| 400    | Erro                  | Descrição do erro                        |





