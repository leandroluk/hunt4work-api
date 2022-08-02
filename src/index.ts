import api from '$/api';
import logger from '$/logger';
import vars from '$/vars';

api.listen(vars.api.port, () => {
  logger.info(`running on port ${vars.api.port}`);
});
