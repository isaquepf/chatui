(function() {
  'use strict';

  angular
    .module('angularChat')
    .constant('apiUrl', "http://localhost:4000/api/v1")
    .constant('socketUrl', "http://localhost:4000")
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
