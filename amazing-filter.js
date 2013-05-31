angular.module('app').filter('amazing', function(){
  return function(input){
    return input && input
      .replace(/lame|boring|dull|pointless|slow/g, 'AMAZING')
      .replace(/sucked/g, 'was AMAZING');
  };
});
