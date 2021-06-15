const server = require('./src/app.js');
const {getAllTemperament} = require('./src/Controllers/temperament');
const {conn} = require('./src/db.js');

// Syncing all the models at once.
conn.sync({force: true}).then(() => {
	getAllTemperament(); // apenas se inicia el servidor cargo los temps a la base de datos.
	server.listen(3001, () => {
		console.log('%s listening at 3001'); // eslint-disable-line no-console
	});
});
