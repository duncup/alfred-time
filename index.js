'use strict';
const alfy = require('alfy');
const moment = require('moment');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();

alfy.output([
	{
		title: 'Unicorn',
		subtitle: alfy.input
	}
]);
