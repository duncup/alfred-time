'use strict';
const alfy = require('alfy');
const moment = require('moment');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();
const time = moment();

alfy.output([
	{
		title: 'timestamp',
		subtitle: '毫秒级时间戳',
		arg: time.format('X'),
	},
	{
		title: 'timestamp',
		subtitle: '秒级时间戳',
		arg: time.format('x'),
	}
]);
