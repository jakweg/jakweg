import type { BaseTranslation } from '../i18n-types'

const en = {
	hiThere: 'Hi There!',
	iam: 'I\'m',
	cracow: 'Cracow',
	softwareEngineer: 'Software engineer',
	featuredProjects: 'Featured projects',
	checkoutGithub: 'View my GitHub',
	messageTelegram: 'Message me on Telegram',
	siteDescription: 'Hey! I\'m Jakub, software developer from Poland, currently working at IBM. I do numerous projects in various technologies. I also like running 💪',
	webGame: 'Web game',
	nativeApp: 'Native app',
	discordBot: 'Discord Bot',
	pwa: 'PWA',
	readMore: 'Read More…',

	colorLines: {
		title: 'Color lines',
		date: 'Oct 2020 - now',
		description: "Simple logic game. You need to place at least 5 balls with the same color in one line, seems easy?<br/>How many points can you score?",
	},

	checkers: {
		title: 'Checkers',
		date: 'Apr 2020',
		description: "It was supposed to be a simple school 3D project. I took it to the next level!<br/>Multiplayer checkers styled to mimic <em>Minecraft</em>.",
	},
	mcwallpaper: {
		title: 'Wallpaper generator',
		date: 'Mar 2021',
		description: "I thought how would my desktop look all if I would cover it with just a single <em>Minecraft</em> block. It looks gorgeous ❤️",
	},
	planZsl: {
		title: 'ZSŁ Timetable',
		date: 'Oct 2021',
		description: "Redefining simplicity and reliability for students and teachers. <br/>Offline ready, fast and easy to use app for checking timetables.",
	},
	wojtek: {
		title: 'Wojtek',
		url: '/sleepy-student',
		date: 'Oct 2022 - now',
		description: "Wojtek is this one student that is always on time, never misses remote lectures to record and publish them on his webpage…",
	},
	upload: {
		title: 'FireFile upload',
		date: 'Apr 2021',
		description: "I've always wanted to have fast and simple way to store and share files online. That's my answer to the problem…",
	},

	articles: {
		wojtek: {
			title: "Wojtek · Discord bot for recording lectures",
			description: 'I\'ve created Discord bot for recording a remote meeting on Webex or Teams. He joins, mutes self and sends a link to recording after the meeting is done.',
			heading: "Wojtek, a bot recording lectures",
			quote: "I think that everyone, at least once, overslept to school.<br />We just sometimes are too lazy to get up. How about using technology to make our lives easier?",
			sections: [
				{
					title: 'But why?', content: [
						'Here comes the october and with it the brand new semester - new subjects, classes and lectures.',
						'University I study on has made lectures optional (most of them). At the same time they don\'t want to make remote lectures. If you add to that the fact that most lectures are just inessential to pass exams you get really low presence.',
						'Fortunately most lectures I have are done remote.',
						'Such situation allows for much comfortable knowledge consumption which should lead to more people listening to lectures. At least in theory…',
						'In practice people hope that someone records the meeting so they can watch it later at twice the speed. The problem is when someone is none or because this one person who usually records is absent for some reason.',
						'It would be great to have a friend you can rely on… Meet <em>Wojtek</em> - our new colleague.',
						'Meme with Patrick putting huge pumpkin inside SpongeBob\' mouth; With text saying students before session watching lectures',
					]
				},
				{
					title: 'But is it even possible?', content: [
						'Before making any project I always ask myself: <em>Can something like this be achieved by me?</em>.',
						'To better understand an attempt to create solution I break the problem up to form a few steps. In this case they are:',
						[
							'Launch Chrome in a way I can programmatically control it',
							'Join Webex meeting - pass through process of typing name and Captcha',
							'Record the meeting - both the visuals as well as the audio',
							'Allow for stopping the recording and detect that the meeting has closed',
							'Make it possible for anyone on the Discord server to schedule a recording',
							'Make it intuitive enough for people to use',
							'Repeat everything for Microsoft Teams',
							'Give access to ready recordings',
						],
						'So, I soon began working on the project, bot\'ll run somewhere in a cloud, so I needed to use Docker to ensure easy portability.',
						'While Docker is great it was actually more difficult to use it, because I needed to program a bot to click visual elements which I couldn\'t program without seeing the screen. Therefore initially I run the bot locally on my computer. I used a library called <a href="https://pptr.dev/">Puppeteer</a> to easily control the browser.',
						'Now I just need to join the meeting. Webex requests me to solve Captcha 😔 At first I thought it\'s game over, project impossible to do. But I can just send the screenshot of Captcha to Discord channel and ask anyone for solution. Once solved I can continue joining the meeting.',
						'Screenshot of Webex before entering the meeting',
						'Using the /record command I can tell Wojtek to enter room, he will reply with Captcha to solve after a while.',
					]
				},
				{
					title: 'That works!', content: [
						'Now I just need to recording the browser tab. I used a library named <a href="https://www.npmjs.com/package/puppeteer-screen-recorder">puppeteer-screen-recorder</a>. It works out of the box, however it doesn\'t record audio. After using google for a while it was clear: puppeteer doesn\'t support audio capture in any way 😐',
						'Not everything lost yet, after all I can launch PulseAudio audio server inside Docker. The I can use external program such as ffmpeg to record the audio.',
						'Once the meeting is ended Wojtek can close the Webex tab, merge video with audio into single final file hoping that they are in sync 😅 And then send a message to Discord channel with link to download it.',
						'That way I managed to finish 5 steps - creating MVP. It was time for real scenario tests',
					]
				},
				{
					title: 'Bug fighting', content: [
						'Obviously software never works first try, Wojtek was no exception. It crashed many times and needed many enhancements to work well.',
						'Entering Teams implementation was quite simple to do once Webex was working. However I stumbled upon unexplained bug. After about 5 minutes into the recording the screen turned completely white. After many and many failed attempt to fix that I was forced to change the basics - drop the recorder library and use <code>Xvfb</code> to simulate real display.',
						'So I modified Wojtek to launch Chrome in fullscreen mode rather then headless one and to use virtual speaker. Now I can record the screen using ffmpeg. There were numerus issues when it comes to starting pulseaudio and X11 as root inside docker. The easiest solution to make it running was to kill their processes, delete <code>/run/pulse*</code> and <code>/tmp/.X1-lock</code> files and then launch the demons.',
						'After a while everything seemed to work fine a reliable. Then out of nowhere Microsoft decided to release Teams update which significantly changed the UI. It obviously broke Wojtek 🙄',
						'There was one time when recording audio failed, but visuals got recorded. What surprised me the most was very small video size. After investigating I noticed that when I record audio I do in stereo effectively doubling audio size for nothing. Thanks to this one bug I\'ve found another one 🤗',
						'There was also a problem I couldn\'t detect during testing, because it appeared after about 4 minutes of recording. In short the recording got paused for some reason. After investigation I found the cause: ffmpeg, which I use to record, constantly prints some stats such as time to the console. These stats are appended to the stdout buffer available to parent process - Wojtek. However Wojtek doesn\'t care about this data therefore he never reads it. After about 4 minutes the buffer is full and the operating system suspends executing of ffmpeg until anything from the buffer is consumed. Fixing it was simple: just adding <code> stdio: \"ignore\" </code> to options object when launching the process 🤦‍♂️'
					]
				},
				{
					title: 'About compression', content: [
						'Videos are heavy on disk. Fortunately there are some smart people inventing compression algorithms.',
						'The number one priority for me is easy of access for people, therefore recordings are hosted on HTTP server. That allows watching video without needing to download entire file. .mp4 format is well supported in web browsers which makes it ideal candidate for this use case.',
						'But is it really? mp4 is just a container, data inside can be represented using many different codecs. Naturally I tried best codec available out there - h255, however it turns out that it is not yet natively supported on all platforms. Windows operating system even asks you to pay to open such file! In 2022 year 🤯',
						'That\'s way I decided to go with h254, which offer worse quality to size ratio, but much better compatibility.',
						'Speaking of sizes. 90 minutes of recording is… about 25 MB, and you can read everything on slides. The size may increase a few MB if cameras are on during lecture, but that is not a big deal.',
						'To achieve such size I use these commands:',
						['# For audio recording:', '# For video recording:', '# To merge two files:'],
						'I used parameters: WIDTH={width:number}, HEIGHT={height:number}, FRAMERATE={framerate:number}, CRF={crf:number} BITRATE={bitrate:number}.',
					]
				},
				{
					title: 'How is it after one semester?', content: [
						'After almost half one the year of Wojtek existence I can say: It works great. It was worth making for sure.',
						'Stats you asking for? More then 60 lectures recorded which is about 2GB in size. Wojtek is also the most attentive student when it comes to listening to lectures.',
						'I find this project very interesting. I gained a lot while doing it, even though I was starting to lose patient a few times due to bugs. The most important thing however is that I could help others by allowing them to watch lectures later which was the primary goal.',
					]
				},
			],
		}
	}

} satisfies BaseTranslation

export default en
