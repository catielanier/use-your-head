const { forwardTo } = require('prisma-binding');

const Query = {
    admins: forwardTo('db'),

    me(parent, args, ctx, info) {
        // check if current user id
        if (!ctx.request.adminId) {
            return null;
        }
        return ctx.db.query.user({
            where: { id: ctx.request.adminId }
        }, info);
    }
};

module.exports = Query;
