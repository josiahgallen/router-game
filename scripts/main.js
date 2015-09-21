'use strict';

$(document).ready(function() {
	var Router = Backbone.Router.extend({
		routes: {
			'play': 'goPlay',
			'settings': 'goSettings',
			'leaderboard': 'goLeaderboard'
		},
		goPlay: function() {
			$('section').hide();
			$('#playScreen').show();
		},
		goSettings: function() {
			$('section').hide();
			$('#settingsScreen').show();
		},
		goLeaderboard: function() {
			$('section').hide();
			$('#leaderboardScreen').show();
		}
	})
	$('section').hide();
	$('#loadScreen').show();

	setTimeout(function() {
		$('#loadScreen').hide();
	}, 4000);

	var game = new Router();
	Backbone.history.start();
})