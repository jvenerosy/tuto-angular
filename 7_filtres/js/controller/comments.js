app.controller('CommentsCtrl', function($scope, PostFactory, $routeParams) {

  $scope.loading = true;
  $scope.newComment = {};
  $scope.date = 1466188068;

  PostFactory.getPost($routeParams.id).then(function(post) {
    $scope.loading = false;
    $scope.title = post.name;
    $scope.comments = post.comments;
  }, function(msg){
    alert(msg);
  })

  $scope.addComment = function() {
    $scope.comments.push($scope.newComment);

    Post.add($scope.newComment).then(function(){

    }, function(){
      alert("Votre message n'a pas pu être envoyé");
    })

    $scope.newComment = {};
  }

});
