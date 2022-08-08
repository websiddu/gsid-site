module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7ee319664cf80110962a5e43407169eb'),
  },
});
