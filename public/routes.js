module.exports = function(app) {

  app.get('*', function(req, res) {
    res.sendFile('/usr/src/app/public/index.html');
  });
};
