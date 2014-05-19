'use strict';

var app = angular.module('may19WorkApp');

  app.controller('buyCtrl', function ($scope) {
    $scope.buyTheseThings = [
        {
            image:"images/Hero-HORRORSCOPE.png",
            name:"Horrorscope",
            price:"$350",
            description:"Team designed, team ridden, and the #1 selling board in the CAPiTA line means that the Horrorscope is a must-have board for your quiver. One of the best urban and park boards in the game, the Horrorscope features pre-loaded reverse camber positioning for expert level jibbers and easy turning, mindless shredding for those intermediate riders who want to expedite the learning curve in the park. This Transworld Top Ten Good Wood Award winner takes no effort! Stable at high speeds! Jib like a madman"
        },
        {
            image:"images/Hero-INDOOR.png",
            name:"Indoor Survival",
            price:"$375",
            description:"As one of our team rider’s favorite boards, the Indoor Survival is the go-to board inside and outside of the park. These durable, responsive freestyle boards have become a customer favorite in the CAPiTA line because they’re proven to survive whatever you can give them. Featuring their Freestyle FK reverse camber configuration, these Transworld Top Ten Good Wood Award winners are one of the best selling and most successful lines in CAPiTA history."
        },
        {
            image:"images/Hero-TFA.png",
            name:"Totally Fk'n Awesome",
            price:"$425",
            description:"Power when you need it and float when you want it, that's what you get with the Totally FK’N Awesome! This unique series features our Freeride FK hybrid-camber combination designed to manhandle each and every feature of Mother Nature’s great mountainous terrain. For 2013/2014 the TFA is rocking the hot new Panda Core™. This lightweight core has been designed with Bamboo Power Rods in the tip and tail for increased durability and insane ollie power. These are very versatile boards that will keep you smiling anywhere on the hill."
        },
        {
            image:"images/Hero-SLASHER.png",
            name:'Charlie Slasher',
            price:"$450",
            description:"The ultimate pow board is back. They added a new 161 to please Charlie’s ever-growing cult following, and took this construction to the next level. Designed with a rockered nose and a flat base through a 20mm tapered tail, Charlie Slasher’s tail naturally sinks, nose naturally floats, and transforms incredibly tiring powder days into incredible, epic, pow days. Ever wanted to run Charlie as a split-board? Now you can with their RFC Sustainable Touring Core, which features an ABS sidewall insert down the centerline. This new construction allows you to split your board and have full ABS sidewalls, eliminating potential water damage and maintaining your board’s structural integrity."
        }
      
    ];

    $scope.itemCheckout = [];

    $scope.addToCart = function() {
        var buyingItem = $scope.buyTheseThings;
        angular.forEach(buyingItem, function(item) {
            $this.itemCheckout.push(item);
        })
        
    	 
    };
  });

