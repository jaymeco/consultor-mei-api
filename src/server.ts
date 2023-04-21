import http from 'http';
import app from './app';

const server = http.createServer(app);

const port: number = app.get('port');
const host: string = app.get('host');

server.listen(port, host, undefined, () => {
  console.log('Application is running!');
});

server.on('error', (e: Error) => {
  console.log(e.stack || e.message);
});

server.on('close', () => {
  console.log('Shutting down api...');
});

