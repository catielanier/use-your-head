const { forwardTo } = require('prisma-binding');

const Query = {
    admins: forwardTo('db')
};

module.exports = Query;
