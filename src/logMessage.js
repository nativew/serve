import { log, error, getIp } from './utils/index.js';
import { options } from './index.js';

const logMessage = (currentPort, currentHost) => {
	const { port } = options;

	log('\nServing 🍛\n');
	log(`Local → http://${currentHost}:${currentPort}\n`);
	log(`Network → http://${getIp()}:${currentPort}\n`);
	if (currentPort != port) error(`Port ${port} was in use.\n`);
};

export default logMessage;
