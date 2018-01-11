/**
 * Created by lap00344 on 10/31/17.
 */
'use strict';

module.exports = function(router) {
    router.get('/', function(req, res) {
        res.send('Hello world!');
    });
};