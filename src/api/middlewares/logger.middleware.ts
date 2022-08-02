import winstonInstance from '$/logger';
import expressWinston from 'express-winston';

export const logger = expressWinston.logger({ winstonInstance });
