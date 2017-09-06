angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    //$scope.detailedInfo = undefined;
    $scope.detailedInfo = {
           "code": undefined,
           "name": undefined,
           "coordinates": {
               "latitude": undefined,
               "longitude": undefined
           },
           "address": undefined
       };

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {

     $scope.listings.push($scope.listing);
     $scope.listing = "";
    };
    $scope.deleteListing = function(index) {
      for(i in $scope.listings) {
       if($scope.listings[i].code == index.code) {
          $scope.listings.splice(i, 1);
       }
      }
    };
    $scope.showDetails = function(index) {
      for(i in $scope.listings) {
        $scope.detailedInfo = $scope.listings[index];
        console.log($scope.detailedInfo.code);
      }
    };
  }
]);
