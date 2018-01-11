module.exports = {
  getMahasiswa: function (req, res) {
    var params = req.params.all();
    Mahasiswa.getUser(params, function (data) {
      res.json(data);
    });
  },

  getNilai: function (req, res) {
    var params = req.params.all();
    Mahasiswa.getNilai(params, function (data) {
      res.json(data);
    });
  },

  addNilai: function (req, res) {
    var params = req.params.all();
    Mahasiswa.addNilai(params, function (data) {
      res.json(data);
    });
  },

  updateNilai: function (req, res) {
    var params = req.params.all();
    Mahasiswa.updateNilai(params, function (data) {
      res.json(data);
    });
  },

  deleteNilai: function (req, res) {
    var params = req.params.all();
    Mahasiswa.deleteNilai(params, function (data) {
      res.json(data);
    });
  },

  addUjian: function (req, res) {
    var params = req.params.all();
    Mahasiswa.addUjian(params, function (data) {
      res.json(data);
    });
  },

  updateUjian: function (req, res) {
    var params = req.params.all();
    Mahasiswa.updateUjian(params, function (data) {
      res.json(data);
    });
  },
  

  assignPraktikum: function (req, res) {
    var params = req.params.all();
    Mahasiswa.assignPraktikum(params, function (data) {
      res.json(data);
    });
  }
};

