const { activities } = require('../../models/activity.model');

module.exports = {
  Query: {
    getActivities: () => activities,
  }
};
