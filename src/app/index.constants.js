(function() {
  'use strict';

  angular
    .module('angularChat')
    .constant('apiUrl', "https://chatcscapi.herokuapp.com/api/v1")
    .constant('socketUrl', "https://chatcscapi.herokuapp.com/")
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
