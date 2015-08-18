var app = angular.module("redditApp", ['ngAnimate']);

app.controller('Reddit', function ($scope) {
    $scope.formClick = 0;

    $scope.articles = [
        {
            title: 'Pizza, the Hangover Cure',
            author: 'Dennis Muller',
            image: 'http://media.giphy.com/media/9KCNcFVQmZhRK/giphy.gif',
            description: 'Bacon ipsum dolor amet cupim ex pork chop, exercitation turkey tenderloin duis. Ut veniam short ribs andouille pig adipisicing rump cow laborum fatback pancetta. Alcatra ball tip sunt short ribs meatloaf. Meatball labore dolore sed. Beef excepteur leberkas corned beef nulla alcatra minim jowl shankle velit ut. Consequat chicken velit tail short loin in ham est.Beef ribs in laborum short ribs occaecat in short loin spare ribs chuck drumstick eiusmod ad fugiat. Frankfurter turkey ut enim tail fatback, nisi biltong voluptate ball tip doner laboris in jerky minim. Excepteur veniam ipsum laboris. Cillum ex duis ham hock prosciutto, aute ipsum nisi rump officia elit strip steak tenderloin. Dolor reprehenderit exercitation proident minim, quis commodo ullamco mollit.',
            votes: -2,
            date: moment(1439850968931).calendar(),
            allComments: 0,
            comments: [{person: 'Jenan', message: 'Pizza, pizza! 🍕'}]
        },
        {
            title: 'Everything is Better With Bacon',
            author: 'Harry Potter',
            image: 'http://media.giphy.com/media/b9oyqJ6dLVXaw/giphy.gif',
            description: 'Bacon ipsum dolor amet cupim ex pork chop, exercitation turkey tenderloin duis. Ut veniam short ribs andouille pig adipisicing rump cow laborum fatback pancetta. Alcatra ball tip sunt short ribs meatloaf. Meatball labore dolore sed. Beef excepteur leberkas corned beef nulla alcatra minim jowl shankle velit ut. Consequat chicken velit tail short loin in ham est.Beef ribs in laborum short ribs occaecat in short loin spare ribs chuck drumstick eiusmod ad fugiat. Frankfurter turkey ut enim tail fatback, nisi biltong voluptate ball tip doner laboris in jerky minim. Excepteur veniam ipsum laboris. Cillum ex duis ham hock prosciutto, aute ipsum nisi rump officia elit strip steak tenderloin. Dolor reprehenderit exercitation proident minim, quis commodo ullamco mollit.',
            votes: 0,
            date: moment(1439850958631).calendar(),
            allComments: 0,
            comments: []
        },
        {
            title: 'Giphy City',
            author: 'Yo Mama',
            image: 'http://media.giphy.com/media/tbapfDZ4mZJn2/giphy.gif',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            votes: 6,
            date: moment(1439586968931).calendar(),
            allComments: 0,
            comments: []
        }
    ];

    $scope.submitPost = function () {
        var info = {};
        info.title = $scope.title;
        info.description = $scope.description;
        info.author = $scope.author;
        info.image = $scope.image;
        info.votes = 0;
        info.comments = [];
        info.date = moment(Date.now()).calendar();

        $scope.articles.push(info);
        $scope.title = "";
        $scope.author = "";
        $scope.image = "";
        $scope.description = "";
        $scope.person = "";
        $scope.comment = "";
        $scope.formClick = 0;
    };

    $scope.addComment = function (comments) {
        if (this.person && this.message) {
            var comment = {};
            comment.person = this.person;
            comment.message = this.message;
            comments.push(comment);
            this.person = "";
            this.message = "";
        }
    };

    $scope.upVote = function(info){
        info.votes++;
    };
    $scope.downVote = function(info){
        info.votes--;
    };
    $scope.show = function(){
        if ($scope.formClick === 0) {
            $scope.formClick = 1;
        } else {
            $scope.formClick = 0;
        }
    };
});

