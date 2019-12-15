'use strict';
const alfy = require('alfy');
const moment = require('moment');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();
const time = moment();

alfy.output([
	{
		title: '时间字符串',
		subtitle: time.format(alfy.input),
		arg: time.format(alfy.input),
	},
	{
		title: '时间字符串-本地格式',
		subtitle: time.local(),
		arg: time.local(),
	},
	{
		title: '时间字符串-常见格式1',
		subtitle: time.format('YYYY-MM-DD HH:mm:ss'),
		arg: time.format('YYYY-MM-DD HH:mm:ss'),
	},
	{
		title: '时间字符串-常见格式2',
		subtitle: time.format('YYYY/MM/DD HH:mm:ss'),
		arg: time.format('YYYY/MM/DD HH:mm:ss'),
	},
]);
