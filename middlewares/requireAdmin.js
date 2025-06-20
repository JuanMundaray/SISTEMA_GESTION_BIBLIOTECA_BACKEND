// middlewares/requireAdmin.js
module.exports = (req, res, next) => {
  if (req.user && req.user.user_type === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Acceso denegado: solo administradores.' });
};
