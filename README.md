# 04-online-book-store
Auther: 袁浩成  
last-update: 11/09/2024

### Quick Start
1. 在根目录运行`npm install`
2. 启动服务器`npm start`
3. 在新的终端运行`node --loader ts-node/esm .\src\test.ts`以运行测试用代码

### Answer
- 代码主要逻辑在以下文件中：
    - [`src/routes/book_store_routes.ts`](src/routes/book_store_routes.ts)
    - [`src/controllers/book_store_controller.ts`](src/controllers/book_store_controller.ts)
- 测试用代码：
    - [`src\test.ts`](src\test.ts)
- 设计一个用于创建新书籍的 API 端点。假设数据库中书籍字段包括: id,bookname,author, publicaiton_date,price。请提供 HTTP 方法、URL路径，并简要解释请求体内容
    - POST
    - url: 
        - /create
    - header: 
        - Content-Type: application/json
    - body: 
        - bookname
        - author
        - publication_date
        - price
    - response：
        - 创建好的book的资讯，包括生成好的唯一id
    - 解释：
        - 发送json格式的book数据给服务器，随后服务器生成一个唯一id并储存在模拟数据库中
        - 如有必要可以在body中加入权限管理功能
        - 如有必要可以在header中加入缓存管理

- 设计一个用于获取特定书籍详情的 API 端点。请提供 HTTP 方法、URL路径，并说明如何在URL中传递书籍 ID
    - GET
    - query string
    - url: /get?id=xxx
    - header: None
    - body: None
    - response：
        - 查询到的book数据，或者404
    - 解释：
        - 通过query string指定的book id查询数据库，如无则响应404
        - 如有必要可以在header中加入缓存管理

- 设计一个用于更新书籍信息的 API 端点。请提供 HTTP 方法、URL 路径，并简要说明请求体应包含哪些字段
    - PUT
    - url: /update
    - header: 
        - Content-Type: application/json
    - body: 
        - id (Mandatory)
        - bookname
        - author
        - publicaiton_date
        - price
    - response：
        - 更新好的book数据，如数据库中没有对应book则响应404
    - 解释：
        - body必须包含id字段，剩余字段为待修改数据
        - 通过body中的id查询数据库，并根据body中剩余的键修改该book的内容更新到数据。如数据库中没有对应id则响应404
        - 如有必要可以在body中加入权限管理功能
        - 如有必要可以在header中加入缓存管理

- 设计一个用于删除书籍的 API 端点。请提供 HTTP 方法、URL 路径，并简要说明请求体应包含哪些字段
    - DELETE
    - query string
    - url: /delete?id=xxx
    - header: None
    - body: None
    - response：
        - 已被删除的book数据，或者404
    - 解释：
        - query string必须包含id参数
        - 通过query string指定的book id查询数据库，然后删除对应book，如无则响应404
        - 如有必要可以在body中加入权限管理功能
        - 如有必要可以在header中加入缓存管理
