/**
 * Mahasiswa.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'integer'
    },
    npm_mahasiswa: {
      type: 'string'
    },
    nama_mahasiswa: {
      type: 'string'
    },
    kelas_mahasiswa: {
      type: 'string'
    },
    id_praktikum: {
      type: 'integer'
    },
    id_nilai: {
      type: 'integer'
    }
  },
  getUser: function(params,cb){
    Mahasiswa.query('SELECT * FROM mahasiswa WHERE kelas_mahasiswa=' + params.kelas_mahasiswa , function(err, data) {
      cb(data);
  });
  },
  getNilai: function(params,cb){
    console.log(params);
    Mahasiswa.query(
      'SELECT * FROM nilai_mahasiswa nilai INNER JOIN nilai_praktikum n ON nilai.id_nilai = n.id_nilai INNER JOIN mata_praktikum m ON nilai.id_praktikum = m.id_praktikum WHERE nilai.npm_mahasiswa =' + params.npm_mahasiswa , function(err, data) {
      cb(data);
  });
  },
  addUjian: function(params,cb){
    Mahasiswa.query(
      "INSERT INTO nilai_ujian (id_nilai, nilai_ujian, nilai_proyek) VALUES ("+params.id_nilai+",'"+params.nilai_ujian+"','"+params.nilai_proyek+"')" , function(err, data) {
      cb(data);
      console.log(data);
  });
  },
  updateUjian: function(params,cb){
    Mahasiswa.query(
      "UPDATE nilai_ujian SET nilai_ujian = " + params.nilai_ujian + " , nilai_proyek = " + params.nilai_proyek + " WHERE id_nilai= "+ params.id_nilai+"" , function(err, data) {
      cb(data);
  });
  },
  addNilai: function(params,cb){
    Mahasiswa.query(
      "INSERT INTO nilai_praktikum (id_nilai, nilai_lp, nilai_tp, nilai_la, nilai_k) VALUES ("+params.id_nilai+",'"+params.nilai_lp+"','"+params.nilai_tp+"','"+params.nilai_la+"','"+params.nilai_k+"')" , function(err, data) {
      cb(data);    
  });
  },
  updateNilai: function(params,cb){
    Mahasiswa.query(
      "UPDATE nilai_praktikum SET nilai_tp = " + params.nilai_tp + " , nilai_lp = " + params.nilai_lp + " , nilai_la = " + params.nilai_la +", nilai_k = "+ params.nilai_k +" WHERE id= "+ params.id+"" , function(err, data) {
      cb(data);
  });
  },
  deleteNilai: function(params,cb){
    console.log(params);
    Mahasiswa.query(
      "DELETE * FROM nilai_praktikum WHERE id = "+ params.id +"" , function(err, data) {
      cb(data);
      console.log(data);
  });
  },
  assignPraktikum: function(params,cb){
    Mahasiswa.query(
      "INSERT INTO nilai_mahasiswa (npm_mahasiswa, id_praktikum, id_nilai) VALUES ("+params.npm_mahasiswa+",'"+params.id_praktikum+"','"+params.id_nilai+"')", function(err, data) {
      cb(data);
  });
  }
};

