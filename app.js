var app = angular.module("redditApp", ['ngSanitize']);

app.controller('Reddit', function ($scope) {
    $scope.articles = [
        {
            title: 'Pizza, the Hangover Cure',
            author: 'Dennis Muller',
            image: 'http://foodporndaily.com/pictures/gooey-melty-thin-crust-cheese-pizza.jpg',
            description: 'Bacon ipsum dolor amet cupim ex pork chop, exercitation turkey tenderloin duis. Ut veniam short ribs andouille pig adipisicing rump cow laborum fatback pancetta. Alcatra ball tip sunt short ribs meatloaf. Meatball labore dolore sed. Beef excepteur leberkas corned beef nulla alcatra minim jowl shankle velit ut. Consequat chicken velit tail short loin in ham est.Beef ribs in laborum short ribs occaecat in short loin spare ribs chuck drumstick eiusmod ad fugiat. Frankfurter turkey ut enim tail fatback, nisi biltong voluptate ball tip doner laboris in jerky minim. Excepteur veniam ipsum laboris. Cillum ex duis ham hock prosciutto, aute ipsum nisi rump officia elit strip steak tenderloin. Dolor reprehenderit exercitation proident minim, quis commodo ullamco mollit.',
            votes: 0,
            date: Date.now()
        },
        {
            title: 'Everything is Better With Bacon',
            author: 'Harry Potter',
            image: 'http://investorplace.com/wp-content/uploads/2014/02/bacon.jpg',
            description: 'Bacon ipsum dolor amet cupim ex pork chop, exercitation turkey tenderloin duis. Ut veniam short ribs andouille pig adipisicing rump cow laborum fatback pancetta. Alcatra ball tip sunt short ribs meatloaf. Meatball labore dolore sed. Beef excepteur leberkas corned beef nulla alcatra minim jowl shankle velit ut. Consequat chicken velit tail short loin in ham est.Beef ribs in laborum short ribs occaecat in short loin spare ribs chuck drumstick eiusmod ad fugiat. Frankfurter turkey ut enim tail fatback, nisi biltong voluptate ball tip doner laboris in jerky minim. Excepteur veniam ipsum laboris. Cillum ex duis ham hock prosciutto, aute ipsum nisi rump officia elit strip steak tenderloin. Dolor reprehenderit exercitation proident minim, quis commodo ullamco mollit.',
            votes: 0,
            date: Date.now()
            //need an external library to format date (moment)
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
        info.date = new Date();

        $scope.articles.push(info);
        $scope.comments.push(info);
        $scope.title = "";
        $scope.author = "";
        $scope.image = "";
        $scope.description = "";
        $scope.comments = "";
    };

    $scope.addComment = function () {
        if ($scope.comments === 0) {
            $scope.comments = 1;
        }
        else {
            $scope.comments = 0;
        }
    };


    $scope.upVote = function (info) {
        info.votes++;
    };

    $scope.downVote = function (info) {
        info.votes--;
    };

    $scope.show = function () {
        if ($scope.form === 0) {
            $scope.form = 1;
        }
        else {
            $scope.form = 0;
        }
    };




});
