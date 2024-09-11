import express, { Request, Response } from 'express';

import BookStoreController from '../controllers/book_store_controller';


const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// 创建新书籍
app.post('/create', async (req: Request, res: Response) => {
  console.log("Create Request:", req.body);
  const body = req.body;
  
  const {status, data} = await BookStoreController.create(body);
  
  res.status(status).send(data);
});

// 获取特定书籍详情s
app.get('/get', async (req: Request, res: Response) => {
  console.log("Get Request:", req.query);
  const book_id = req.query['id'] as string;

  const {status, data} = await BookStoreController.get(book_id);

  res.status(status).send(data);
});

// 更新书籍信息
app.put('/update', async (req: Request, res: Response) => {
  console.log("Update Request:", req.body);
  const body = req.body;

  const {status, data} = await BookStoreController.update(body);

  res.status(status).send(data);
});

// 删除书籍
app.delete('/delete', async (req: Request, res: Response) => {
  console.log("Delete Request:", req.query);
  const book_id = req.query['id'] as string;

  const {status, data} = await BookStoreController.delete(book_id);

  res.status(status).send(data);
});

export default app;
