const express = require('express');
const router = express.Router();

const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('ID_DEL_GOOGLE_SHEET');

router.get('/players', async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();
    const players = rows.map((row) => ({
      name: row.name,
      position: row.position,
      points: row.points,
    }));

    res.json(players);
  } catch (error) {
    console.error('Error al obtener los jugadores:', error);
    res.status(500).json({ error: 'Error al obtener los jugadores' });
  }
});

router.get('/players/:id', (req, res) => {});

module.exports = router;
