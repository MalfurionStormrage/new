import '@babel/polyfill';
import server from './server';

async function start() {
	await server.listen(server.get('port') , () => {
		console.log(`server on ---Port--> ${server.get('port')}`);
	});
}

start();