var app = angular.module('redditApp', ['ngAnimate']);

app.controller('bodyController', function($scope) {
	$scope.newComment = {};
	$scope.newPost = {};
	// $scope.newPost.image = 'https://www.redditstatic.com/about/assets/reddit-alien.png';
	$scope.posts = {};
	$scope.posts.search = "";
	$scope.posts.newPostViz = false;
	$scope.posts.order = '-votes';
	$scope.posts.all = [
		{
			title: "Point Reyes Beaches",
			author: "Linos Godeliva",
			image:"http://www.jontejada.com/notReddit/assets/DSC_0530_sq.jpg",
			description: "Master cleanse venmo blog eiusmod nisi. Schlitz placeat iPhone food truck blog bitters street art. Delectus laborum gluten-free chicharrones.",
			votes: 12,
			date: moment().subtract(1,'days').subtract(1,'hours').calendar(),
			comments: {
				newViz: false,
				allViz: false,
				all: [
					{
						author: "Jon",
						text: "cool!"
					},
					{
						author: "Joe",
						text: "nope"
					}
				]
			}
		},
		{
			title: "Fence & Bell",
			author: "Vira Valeria",
			image:"http://www.jontejada.com/notReddit/assets/DSC_0774_sq.jpg",
			description: "Microdosing tote bag tumblr etsy YOLO, pickled hammock ethical adipisicing selvage excepteur health goth narwhal.",
			votes: 6,
			date: moment().subtract(3,'days').subtract(2,'hours').calendar(),
			comments: {
				newViz: false,
				allViz: false,
				all: [
					{
						author: "Jon",
						text: "cool!"
					}
				]
			}
		},
		{
			title: "Point Reyes Sunset",
			author: "Samanta Samuil",
			image:"http://www.jontejada.com/notReddit/assets/DSC_0523_sq.jpg",
			description: "Chia occaecat church-key franzen sustainable disrupt scenester. Yuccie slow-carb listicle drinking vinegar tote bag.",
			votes: 3,
			date: moment().subtract(20,'days').subtract(4,'hours').calendar(),
			comments: {
				newViz: false,
				allViz: false,
				all: [
					{
						author: "Jon",
						text: "cool!"
					}
				]
			}
		},
		{
			title: "Santa Maria Beach",
			author: "Claudio Jet",
			image:"http://www.jontejada.com/notReddit/assets/DSC_0507_sq.jpg",
			description: "Umami ullamco try-hard pickled, pinterest elit four loko dolore everyday carry. Aliqua ennui try-hard exercitation, brunch flexitarian shabby chic offal wayfarers occaecat asymmetrical.",
			votes: 24,
			date: moment().subtract(1,'days').subtract(2,'hours').calendar(),
			comments: {
				newViz: false,
				allViz: false,
				all: [
					{
						author: "Jon",
						text: "cool!"
					}
				]
			}
		},
		{
			title: "Sea Ranch Lodge",
			author: "Sybilla Vyacheslav",
			image:"http://www.jontejada.com/notReddit/assets/DSC_0778_sq.jpg",
			description: "Labore et ullamco kombucha. 90's ex anim, retro tilde aliquip vice sustainable duis mixtape microdosing ugh. Hashtag labore four dollar toast raw denim.",
			votes: 4,
			date: moment().subtract(0,'days').subtract(8,'hours').calendar(),
			comments: {
				newViz: false,
				allViz: false,
				all: [
					{
						author: "Jon",
						text: "cool!"
					}
				]
			}
		},
		{
			title: "Old Barn",
			author: "Lea Gul",
			image:"http://www.jontejada.com/notReddit/assets/DSC_0796_sq.jpg",
			description: "Aliqua church-key drinking vinegar synth. PBR&B kogi pork belly 3 wolf moon, wolf ut in blog artisan exercitation culpa cliche.",
			votes: -12,
			date: moment().subtract(15,'days').subtract(1,'hours').calendar(),
			comments: {
				newViz: false,
				allViz: false,
				all: [
				]
			}
		},
		{
			title: "Cliffs & Stormy Sea",
			author: "Anouska Iantha",
			image:"http://www.jontejada.com/notReddit/assets/DSC_0782_sq.jpg",
			description: "PBR&B pop-up food truck austin elit accusamus VHS pinterest, sapiente banh mi cred pug trust fund dreamcatcher skateboard. Actually cronut.",
			votes: 42,
			date: moment().subtract(3,'days').subtract(1,'hours').calendar(),
			comments: {
				newViz: false,
				allViz: false,
				all: [
					{
						author: "Jon",
						text: "cool!"
					}
				]
			}
		}
	];
	$scope.toggleCommentViz = function(post) {
		post.comments.allViz = !post.comments.allViz;
	};

	$scope.clearSearch = function() {
		$scope.posts.search = "";
	};
	$scope.vote = function(post,direction) {
		post.votes += direction;
	};
	$scope.highlightUp = function(post){
		post.highlightUp = true;
	};
	$scope.unhighlightUp = function(post){
		post.highlightUp = false;
	};
	$scope.highlightDown = function(post){
		post.highlightDown = true;
	};
	$scope.unhighlightDown = function(post){
		post.highlightDown = false;
	};
	$scope.showNewPost = function() {
		$scope.posts.newPostViz = !$scope.posts.newPostViz;
	};
	$scope.addPost = function(newPost) {
		// debugger
		if (!newPost.author) {
			newPost.author = 'anon';
		}
		newPost.date = moment().calendar();
		newPost.votes = 1; //change this to 0 or 1 when date ordering is fixed (and set `$scope.posts.order = '-date';` below)
		newPost.comments = {
			allViz: false,
			all: []
		};
		$scope.posts.all.push(newPost);
		$scope.showNewPost();
		$scope.newPost = {};
		// $scope.newPost.image = null; //oddly necessary for invalid URLs. `='';` does not work.
		// console.log($scope.newPost.image)
		// debugger
		// http://i.imgur.com/Lx4yJnk.jpg
		// if($scope.newPost.image.$invalid) $scope.newPost.image = null;
	};
	$scope.addComment = function(post, newComment) {	
		post.comments.all.push(newComment);
		$scope.newComment = {};
	};
	$scope.filler = function() {
		console.log('hit');
		$scope.newPost.title = 'something';
		$scope.newPost.author = 'Jill';
		$scope.newPost.image = 'http://www.jontejada.com/notReddit/assets/DSC_1023_sq.jpg';
		$scope.newPost.description = 'something something';
	}
});


app.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    };
});

