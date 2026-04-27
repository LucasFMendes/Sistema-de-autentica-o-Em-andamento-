import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

// middleware de erro
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).json({ mensagem: 'Erro interno do servidor' });
});

export default app;


