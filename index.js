const express = require('express');
const { google } = require('googleapis');
const { forms } = require('googleapis/build/src/apis/forms');
const app = express();
const cors = require('cors');

require('dotenv').config();
app.use(cors())


const port = process.env.PORT || 3000; // Use 3000 as a default if PORT is not defined in the environment variables

async function getAuthSheets() {
    const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(process.env.credentials),
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    })

    const client = await auth.getClient()

    const googleSheets = google.sheets({
        version: 'v4',
        auth: client
    })

    const spreadsheetId = '1tXU8QvGLiJSkS05zjV16pQRqWHREpRk4j3HSe7DuEzs'

    return {
        auth,
        client,
        googleSheets,
        spreadsheetId
    }
}


app.get('/', async (req, res) => {
    const { auth, client, googleSheets, spreadsheetId } = await getAuthSheets()
    const data = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'oxford3000'
    })

    res.json(data.data)
});

app.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log('The server is running on port ' + port);
});