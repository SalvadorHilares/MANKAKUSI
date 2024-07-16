const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/payment', (req, res) => {
  const { amount, description } = req.body;

  // Aquí es donde integrarías con un proveedor de pagos real, como Stripe o PayPal
  // Simulamos una respuesta exitosa de pago
  if (amount && description) {
    res.status(200).json({ success: true, message: 'Pago procesado con éxito' });
  } else {
    res.status(400).json({ success: false, message: 'Datos de pago inválidos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
