const setPath = require('./paths');

(function () {
   'use strict';

   const conf = {};
   let collection = [];
   let env = process.env.TESTS || 'all';


   if (env !== 'all') {
      env.split(';').forEach(suite => {
         suite = suite.split(':');
         const type = suite[0];
         const filelist = suite[1];

         conf[type] = setPath(type, filelist);
      });
   }
   else {
      conf.all = setPath('all');
   }

   Object.keys(conf).forEach(key => {
      collection = collection.concat(conf[key]);
   });

   collection.forEach(test => {
      if (test instanceof Function) {
         test();
      }
   });
}());
