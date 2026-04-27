import 'dotenv/config';
import app from './app.js';
import dotenv from 'dotenv';


dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT)
  .on('listening', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })
  .on('error', (err) => {
    console.error('Erro ao iniciar servidor:', err);
  });