import express from 'express';
import sampleRoutes from './routes/sampleRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/sample', sampleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
