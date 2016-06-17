app.controller('PostCtrl', function($scope, PostFactory) {
  $scope.loading = true;
  $scope.posts = PostFactory.getPosts().then(function(posts) {
    $scope.loading = false;
    $scope.posts = posts;
  }, function(msg){
    alert(msg);
  });
})
