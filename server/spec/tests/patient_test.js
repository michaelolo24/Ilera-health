'use strict';


const httpStatus = require('http-status');
const chai = require('chai');
const expect = chai.expect;
const app = require('../../server.js');
const Patient = require('../../models/patient-helpers.js');
const patientData = require('.././test_data/td_patient.js');
const Request = require('supertest')('http://localhost:4000');




describe('Patient queries', function(){

  describe('Webpack Spinning Up...', function() {
    before(function(done) {
      setTimeout(() => done(), 2500);
    });

  describe('POST /api/patient/signup', function() {
    const newPatient = {
      first: 'raekwon',
      last: 'etemad',
      email: 'raekwon@gma.com',
      password: 'neekonetemad'
    };

    Request
      .post('/api/patient/signup')
      .send(newPatient)
      .expect(httpStatus.OK)
      .end(function(error, res){
        if(error){
          return done(error);
        }

        expect(res.body.data).to.be.an('object');

      })

      // Patient

  })

  describe('GET /api/patient/signin', function() {
    // const newPatient = {
    //   first: 'raekwon',
    //   last: 'etemad',
    //   email: 'raekwon@gma.com',
    //   password: 'neekonetemad'
    // };

    Request
      .get('/api/patient/signin')
      .send(newPatient)
      .expect(httpStatus.OK)
      .end(function(error, res){
        if(error){
          return done(error);
        }

        expect(res.body.data).to.be.an('object');

      })

      // Patient

  })


})
