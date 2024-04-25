const express = require('express');
const router = express.Router();
const { GoogleSpreadsheet } = require('googleapis');

const SPREADSHEET_ID = '1AClLwo_T0tXbA-SsiLjRF_dipdbINfxjD5eevl5BMiU';

const SHEET_NAME = 'Clasificación';

async function getSheetData() {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  await doc.useApiKey(process.env.GOOGLE_API_KEY);
  const sheet = doc.sheetsByTitle(SHEET_NAME);
  const rows = await sheet.getRows();
  const data = rows.map((row) => row._rawData);

  return data;
}

router.get('/data', async (req, res) => {
  try {
    const sheetData = await getSheetData();
    res.json(sheetData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

module.exports = router;
