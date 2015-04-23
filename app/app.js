// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router','pascalprecht.translate']);

myApp.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $translateProvider.translations('en',{
        paragraph: 'I could sure use a drink right now.',
        BUTTON_TEXT_EN: 'english',
        BUTTON_TEXT_SP: 'spanish'
    }).translations('sp',{
        paragraph: 'Seguro de que podría usar una copa en este momento.',
        BUTTON_TEXT_EN: 'inglish',
        BUTTON_TEXT_SP: 'espana'
    });
    
    $translateProvider.preferredLanguage('en');
    
    $stateProvider    
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        
        .state('home.list',{
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope){
                $scope.foods = ['Pizza', 'Ice Cream', 'Pasta', 'Hot Dogs'];
            }
        })
        
        .state('home.paragraph', {
            url: '/paragraph',
        })
        
       
        .state('about', {
           url: '/about',
           views: {
               '': { templateUrl: 'partial-about.html'},
               'columnOne@about': {template: 'Look I am a column!'},
               'columnTwo@about': {
                   templateUrl: 'table-data.html',
                   controller: 'drinkController'
               }
           }     
        });
        
});

myApp.controller('drinkController', function($scope){
    $scope.message = 'test';
    
    $scope.drinks = [
        {
            name: 'Coke',
            price: 25
        },
        {
            name: 'Water',
            price: 00
        },
        {
            name: 'Juice',
            price: 100
        }
    ];
});

myApp.controller('TranslateController', function($translate, $scope){
    $scope.changeLanguage = function(langKey){
        $translate.use(langKey);
    };    
});

