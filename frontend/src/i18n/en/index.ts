import type { BaseTranslation } from '../i18n-types'

const en = {
	rootUrl: '/',
	altRootUrl: '/pl/',
	alternativeLang: 'PL',
	mainPage: 'Main page',
	title: 'Software engineer',
	about: {
		iam: "I'm",
		cracow: 'Cracow',
		position: 'Fullstack software engineer',
		hi: 'Hi There!',
		synonyms: [
			`Performance aficionado`,`Cybersecurity enthusiast`,
			`Linux enjoyer`,`Marathon runner`,
		],
	},
	featuredProjects: 'Featured projects',
	checkoutGithub: 'View my GitHub',
	messageTelegram: 'Message me on Telegram',
	siteDescription:
		"Hey! I'm Jakub, software developer from Poland, currently working at IBM. I do numerous projects in various technologies. I also like running 💪",
	webGame: 'Web game',
	nativeApp: 'Native app',
	discordBot: 'Discord Bot',
	pwa: 'PWA',
	androidApp: 'Android app',
	contents: 'Contents',
	funFact: 'Fun fact',
	showMore: 'Show more',
	404: {
		title: "This page doesn't exist",
		link: 'Back to home page',
	},
	footer: ['Thanks for reading', 'Any questions, suggestions, opinion? Feel free to contact me'],

	colorLines: {
		title: 'Color lines',
		date: 'Oct 2020 - now',
		description:
			'Simple logic game. You need to place at least 5 balls with the same color in one line, seems easy?<br/>How many points can you score?',
	},

	checkers: {
		title: 'Checkers',
		date: 'Apr 2020',
		description:
			'It was supposed to be a simple school 3D project. I took it to the next level!<br/>Multiplayer checkers styled to mimic <em>Minecraft</em>.',
	},
	mcwallpaper: {
		title: 'Wallpaper generator',
		date: 'Mar 2021',
		description:
			'How does a desktop look all covered with just a single <em>Minecraft</em> block. It looks gorgeous ❤️',
	},
	planZsl: {
		title: 'ZSŁ Timetable',
		date: 'Oct 2021',
		description:
			'Redefining simplicity and reliability for students and teachers. <br/>Offline ready, fast and easy to use app for checking timetables.',
	},
	wojtek: {
		title: 'Wojtek',
		url: '/sleepy-student/',
		date: 'Oct 2022 - now',
		description:
			'Wojtek is this one student that is always on time, never misses remote lectures to record and publish them on his webpage…',
	},
	upload: {
		title: 'FireFile upload',
		date: 'Apr 2021',
		description:
			"I've always wanted to have fast and simple way to store and share files online. That's my answer to the problem…",
	},
	wonder: {
		title: 'My dream RTS',
		date: 'in progress',
		description:
			"Open source multiplayer Real time strategy game. Still in progress, can't tell much about it yet.",
	},
	mobishit: {
		title: 'Mobireg client',
		url: '/mobireg-app/',
		date: 'Started 2019',
		description:
			'Community driven, open source, alternative client app for electronic grade book. Used by hundreds of students.',
	},

	articles: {
		wojtek: {
			altUrl: '/pl/wojtek/',
			title: 'Wojtek · Discord bot for recording lectures',
			description:
				"I've created Discord bot for recording a remote meeting on Webex or Teams. He joins, mutes self and sends a link to recording after the meeting is done.",
			heading: 'Wojtek, a bot recording lectures',
			sections: [
				{
					title: 'But why?',
					content: [
						'Here comes the october and with it the brand new semester - new subjects, classes and lectures.',
						"University I study on has made lectures optional (most of them). At the same time they don't want to make remote lectures. If you add the fact that most lectures are just inessential to pass exams you get really low attendance.",
						'Fortunately most lectures I have are done remote.',
						'Such situation allows for much comfortable knowledge consumption which should lead to more people listening to lectures. At least in theory…',
						'In practice people hope that someone records the meeting so they can watch it later at twice the speed. The problem is when there is nobody or because this one person who usually records is absent for some reason.',
						'It would be great to have a friend you can rely on… Meet <em>Wojtek</em> - our new colleague.',
						"Meme with Patrick putting huge pumpkin inside SpongeBob' mouth; With text saying students before session watching lectures",
					],
				},
				{
					title: 'But is it even possible?',
					content: [
						'Before making any project I always ask myself: <em>Can something like this be achieved by me?</em>',
						'To better understand how to create solution I break up the problem to a few steps. In this case they are:',
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
						"So, I soon began working on the project, bot'll run somewhere in a cloud, so I needed to use Docker to ensure easy portability.",
						'While Docker is great it was actually more difficult to use it, because I needed to program a bot to click visual elements which I couldn\'t program without seeing the screen. Therefore initially I run the bot locally on my computer. I used a library called <a href="https://pptr.dev/">Puppeteer</a> to easily control the browser.',
						"Now I just need to join the meeting. Webex requests me to solve Captcha 😔 At first I thought it's game over, project impossible to do. But I can just send the screenshot of Captcha to Discord channel and ask anyone for solution. Once solved I can continue joining the meeting.",
						'Screenshot of Webex before entering the meeting',
						'Using the /record command I can tell Wojtek to enter room, after a while he replies with Captcha to solve.',
					],
				},
				{
					title: 'That works!',
					content: [
						'Now I just need to record the browser tab. I used a library named <a href="https://www.npmjs.com/package/puppeteer-screen-recorder">puppeteer-screen-recorder</a>. It works out of the box, however it doesn\'t record audio. After using google for a while it was clear: puppeteer doesn\'t support audio capture in any way 😐',
						'Not everything lost yet, after all I can launch PulseAudio audio server inside Docker. Then use external program such as ffmpeg to record the audio.',
						'Once the meeting is ended Wojtek can close the Webex tab, merge video with audio into single final file hoping that they are in sync 😅 And then send a message to Discord channel with link to download it.',
						'That way I managed to finish 5 steps - creating MVP. It was time for real scenario tests',
					],
				},
				{
					title: 'Bug fighting',
					content: [
						'Obviously software never works first try, Wojtek was no exception. It crashed many times and needed many enhancements to work well.',
						'Entering Teams implementation was quite simple to do once Webex was working. However I stumbled upon unexplained bug. After about 5 seconds into the recording the screen turned completely white. After many and many failed attempts to fix it I was forced to change the basics - drop the recorder library and use <code>Xvfb</code> to simulate real display.',
						'Wojtek was initially named Andrzej, but due to Webex alphabetically sorting meeting participants I decided to rename him to Wojtek to make him less stand out at the bottom of the list.',
						'So I modified Wojtek to launch Chrome in fullscreen mode rather then in headless one and to use virtual speaker. Now I can record the screen using ffmpeg. There were numerus issues when it comes to starting pulseaudio and X11 as a root user inside docker. The easiest working solution to make it running was to kill their processes, delete <code>/run/pulse*</code> and <code>/tmp/.X1-lock</code> files and then launch the demons.',
						'After a few weeks everything seemed to work fine and reliable. Then out of nowhere Microsoft decided to release Teams update which significantly changed the UI. It obviously broke Wojtek 🙄',
						"There was one time when recording audio failed, but visuals got recorded. What surprised me the most was very small video size. After investigating I noticed that recording audio is done in stereo mode effectively doubling audio size for no benefits at all. Thanks to this one bug I've found another one 🤗",
						'There was also a problem which I couldn\'t detect during testing, because it appeared after about 4 minutes of recording. In short the recording got paused for some reason. After investigation I found the cause: ffmpeg, which I use to record, constantly prints some stats such as time to the console. These stats are appended to the stdout buffer available to parent process - Wojtek. However Wojtek doesn\'t care about this data therefore he never reads it. After about 4 minutes the buffer is full and the operating system suspends executing of ffmpeg until anything from the buffer is consumed. Fixing it was simple: just adding <code> stdio: "ignore" </code> to options object when launching the process 🤦‍♂️',
					],
				},
				{
					title: 'About compression',
					content: [
						'Videos are heavy in disk size. Fortunately there are some smart people inventing compression algorithms.',
						'The number one priority for me is the easy of access for people, therefore recordings are hosted on HTTP server. That allows watching video without needing to download entire file. mp4 format is well supported in web browsers which makes it ideal candidate for this use case.',
						'But is it really? mp4 is just a container, data inside can be represented using many different codecs. Naturally I tried best codec available out there - h255, however it turns out that it is not yet natively supported on all platforms. Windows operating system even asks you to pay to open such file! In 2022 year 🤯',
						"That's way I decided to go with h254, which offer worse quality to size ratio, but much better compatibility.",
						'Speaking of sizes. 90 minutes of recording is… about 25 MB, and you can read everything on slides. The size may increase a few MB if cameras are on during lecture, but that is not a big deal.',
						'To achieve such size I use following commands:',
						['# For audio recording:', '# For video recording:', '# To merge two files:'],
						'I used parameters: WIDTH={width:number}, HEIGHT={height:number}, FRAMERATE={framerate:number}, CRF={crf:number} BITRATE={bitrate:number}.',
					],
				},
				{
					title: 'How is it after one semester?',
					content: [
						'After almost half of the year with Wojtek existence I can say: It works great. It was worth making for sure.',
						'Stats you asking for? More then 60 lectures recorded which is about 2GB in size. Wojtek is also the most attentive student when it comes to listening to lectures.',
						'I find this project very interesting. I gained a lot while doing it, even though I was starting to lose patient a few times due to bugs. The most important thing however is that I could help others by allowing them to watch lectures later which was the primary goal.',
					],
				},
			],
		},
		mobishit: {
			altUrl: '/pl/mobishit/',
			title: 'Mobireg App · Android client for students and parents',
			description: `I created an Android app for students and parents to use electronic grade book Mobireg. It's better then the official one as it has all the features people want.`,
			heading: 'Mobireg App, Android client for students and parents',
			sections: [
				{
					title: 'A little bit of background - why?',
					content: [
						'In the 2017 I became a student of Technical School: Upper-Secondary Schools of Communications in Cracow. The school used to use Mobireg system as its grade book. While having marks in online system rather then in a paper one is much useful, Mobireg is quite an old pice of technology written in early 2000s.',
						`Screenshot of the home page, It doesn\'t look very bad, but quite outdated`,
						`The website might have been modern some time ago, but time has changed. Most people use phones and other mobile devices to access the web and Mobireg has no mobile page unfortunately.`,
						`So, at least there is a mobile app, right? Technically there was one, but that's about it.`,
						'It was build for very old Android, and looks very out of place',
						"Using the app we'll quickly notice a lack of many features you could expect from app like this. For example:",
						[
							'Notifications',
							'Showing calculated average scores',
							'Sending messages to teachers',
							'Timetable widget',
							'Dark theme',
						],
						'Having a some experience in creating Android app and much passion for that I decided to try to make an app that suites me better then the official one with more features one can want.',
					],
				},
				{
					title: 'Getting access to data',
					content: [
						`The easiest and best way to access data would be using the official API with docs. However, we can only dream about such goods. Companies which offer grade book solutions are trying really hard to be the most closed at least easy platform to use for third party coders.`,
						`There are two options remaining: web scraping and reverse engineering of the existing app.`,
						`At first I tried the first one - created Android WebView, simulated button clicks and parse HTML. God thanks I knew about regex at that time. I was quite successfully with reading marks data, though it worked unreliably and had quite a few limitations. Not all information were available in HTML by default. For data such as extended description I used to fetch additional HTML for each mark. That was really slow… I needed a better approach…`,
						`Frankly there is much better way to do what. Let's check how the official app gets this data. To achieve that I used <a href="https://play.google.com/store/apps/details?id=app.greyshirts.sslcapture">Packet Capture</a> and very quickly do discover the API endpoint and what parameters to send`,
						`Screenshot of the app capturing HTTP traffic. We can see that the official app captures data that is unnecessarily and without user permission`,
						`It looks like there is only one API endpoint, returning JSON file which is a kind of database dump. I need to send login, MD5 hashed password and some additional parameters such as <em>lmt</em> which is used by the backend to determine what changes in data to send us. Entities returned by API are grouped by type and have "action" field which may be equal to "D" in which case it means this entity was deleted.`,
						`I have to admit the way it was designed is quite smart and easy to use for apps designed to run offline.`,
					],
				},
				{
					title: 'First public release',
					content: [
						`My app was test by a few friends of mine. Thanks to them I was able to create MVP and share it to the public with confidence it would work… Obviously I didn't work for some new users 😂`,
						`I asked my friend <a href="https://github.com/p0358" rel=noreferrer target=_blank>p0358</a> if he could use his bot to promote newly released app. The bot had been used my hundreds of students in my school so I was great to quickly get users… and instant bug reports as well.`,
						`The advertisement bot's users received. It presents screenshots of early version`,
						`The first problem my app encounter when released to the wild was failing to sign users in. Yeah, failing to do the first thing they attempted was quite disappointing, but I had no chance to catch that. It was related to certain username format that some students had. It proves the necessity to test among very diverse audience, especially when having no API docs.`,
						'The app had also problems with parent accounts if there were multiple children in the same school. Very niche case, but required quite o lot of checks on my end. Thanks to the community many of such problems were quickly discovered and fixed.',
						'Generally speaking the first impressions were very positive despite sign in problems. I got a bunch of users, received many thanks as well as feature suggestions.',
					],
				},
				{
					title: 'Further development',
					content: [
						`MVP I released was already better then the official app, but I wanted to make it even better by adding more stuff users want.`,
						`The the start the functions were more important then the design. Since the app was functional I could improve the look and feel. One of the key things were introduction of the Easter Egg - app would offend the Mobireg, by comparing it to you "hopeless" grades. `,
						`The easter egg at the welcome page. The adjective changes for a random "hopeless" synonym.`,
						`There were many UI iterations for key screens such as mark details. I wanted to get best user experience with conjunction to modern design. Settled on BottomSheet which was ideal for that. Can't remember where I get an inspiration from, might be Google Photos?`,
						`Different iterations of mark details screen`,
						`I also added a few features people wanted such as average calculator that you can simulate getting grades to check if you're still passing a subject. That was one of the greatest additions to the app.`,
						`Amount of sections grew showing rapid development.`,
					],
				},
				{
					title: 'Support from the cloud - VPS',
					content: [
						`One of the problems, that I couldn't easily solve, was lack of instant (push) notifications. Mobireg doesn't provide you with a way to get notified when somethings changes. You need to ask the server - such method is called "pulling"`,
						`The alternative way is "pushing" changes to the client by the server. Waay better solution thanks to it beeing more effective with phone resources - the app doesn't need to live and ask periodically the server for changes.`,
						['Mobireg', 'server', 'periodic', 'syncing with API', 'Mobishit', 'app'],
						`The first app architecture looked very simple. Just syncing with the API endpoint. To get push notifications I had to build my architecture:`,
						[
							'Mobireg',
							'server',
							'Mobishit',
							'app',
							'periodic',
							'syncing with API',
							'Firebase',
							'My server',
							'Sending',
							'notifications',
							'Waking up',
							'device',
							'periodic',
							'checking',
							'additional',
							'features',
							'via scraping',
							'HTML',
						],
						`Keep in mind that using the components at the bottom is optional. User has control and can opt out of it. App can work using the first architecture, but with limited functionality. This approach is nice for more, because it allows me to quit hosting (which costs some money) at anytime and clients will fallback to using the old architecture automatically.`,
						`This way I also implemented getting exams and comparisons data as well as sending messages to teachers. Despite the official API lacking such features. I had to create my own API in Python that simulates the web browser to allow for such magic`,
					],
				},
				{
					title: 'The role of community and what I learned',
					content: [
						`There would be no Mobishit, at least in this form, if not the community. What started as a small plugin in my personal app with bus schedules transformed into huge project loved by many students.`,
						`Such achievements required <b>community</b> and therefore I now believe that whatever I code I need to talk and listen to user feedback. This is the most important factor.`,
						`I remember getting a message from one of my users asking for a new functionality: ability to change name of any subject or teacher. At first I thought it was a stupid idea, why would anyone want to do this? But since it simple to implement I did it the same day. After adding this featured I realized it was soooo awesome addition I started adding nicknames for all my teachers. My friends were also pleased by such addition. It was so much fun 🤣 - thanks to the community.`,
						`While creating this project I also appreciated <b>GIT version control system</b>. Not only I could experiment on separate branch - it also keeps my entire history. That saved me potentially hours of debugging. Once I had weird bug, only in release build, not noticeable at first, but totally breaking key feature of the app - it failed to synchronize. It worked in previous release despite me changing nothing about syncing… Thanks to GIT I quickly realized that the problem was in an updated dependency that broke syncing.`,
						`The other skill I gained is <b>SQL</b>. This project utilized both SQLite and MySql. I enjoy writing raw SQL instead of using ORM queries, since writing anything more complicated results in too much hacking. Mobishit was the app I could learn a lot.`,
						'Typical SQL query I wrote. It gets existing marks to be imported into average calculator, using Room library, Kotlin',
					],
				},
				{
					title: 'What next?',
					content: [
						`After two years of studying at ZSŁ some people started to claim that Mobireg would be replaced by Librus - competition do Mobireg. That would make Mobishit completely useless.`,
						`And it has happened. Mobireg got purchased by Librus taking all schools which used their services.`,
						`But every school? Actually no! For some reason Mobireg stayed for musical schools and they advertise it as a best grade book for musical schools. They've even changed logo to reflect that 😂`,
						`While this move has reduced popularity of my application it haven't got rid of it completely. There still are some users. I must admit I was very surprise to receive email about GitHub Issue from one of the users. I was quick to solve the issue for him as It does my heart when someone still uses my products even though I don't support it for years 😊`,
					],
				},
			],
		},
	},

	timeline: {
		url: '/my-achievements/',
		altUrl: '/pl/moje-dokonania/',
		months: [
			'',
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		meta: [
			'My personal achievements',
			'Here is the timeline of my major life advancements. Theses include my career choices, developed projects and running achievements.',
		],
		title: [
			'My personal',
			'achievements',
			'I did quite a lot of interesting projects in my life. Here is a list of some of them.',
			`I like to come back and remember some of them when I'm feeling down`,
		],
		2001: [
			'Deployment to <code>prod</code> finished with status <code>0</code>.<br/>All systems operational.',
			'Hello world!',
		],
		2009: [
			'Decided about my future',
			'Wrote an essay in school stating "I want to become be a computer specialist, like my dad. There is nothing difficult with that, simply sitting in front of a computer and clicking a mouse".',
		],
		2013: [
			'First contact with programming',
			"Dad showed me how to write simple console programs in Pascal. However, it didn't spur me into anything more.",
		],
		2015: [
			'Two friends told me they started learning programming',
			"I knew I couldn't be left behind, it was a healthy competition. So I started watching C++ tutorials by Mirosław Cement on YouTube too.",
			'Face of Mirosław Zelent',
		],
		2016: [
			[
				'Started Java with Android',
				"Failed attempt doesn't mean I should stop. I migrated project to Java and started working in Android Studio",
				'Icon of Android Studio',
			],
			'Tried porting C# to Android using Xamarin, but failed to make it any good.',
			[
				'Got into C#',
				"I wanted to make a program checking school substitutions for me in background, but couldn't get HTTP working in C++. C# on the other hand worked out of the box.",
			],
			[
				'Released a game',
				'It was called labyrinth, written in C++ in SFML. It had level editor made in Borland C++ Builder and graphics drawn by my friend David.',
				'Preview of the game',
			],
		],
		2017: [
			['Started technical school', 'ZSŁ Cracow as profile IT specialist', 'Logo of ZSŁ Kraków'],
			[
				'Released app in Google Play',
				'It gathered over two hundreds downloads in first month, was a garbage from development perspective, but it worked.',
				'Icon of My first Google Play App',
			],
		],
		2018: [
			[
				'Mobishit project released',
				'Alternative Android app to access electronic grade book created by me was released to the public getting few hundreds downloads.',
				'Preview of the project',
			],
		],
		2019: [
			[
				'ZSŁ Timetable got released',
				'I released a new timetable progressive web app for my school.',
				'Preview of the project',
			],
			['Got into web development', 'Started with Angular and Typescript during the internship.'],
			['First IT job: Software Engineer Intern', "I've become Intern at ES-System in Cracow."],
			[
				'3rd place at MFI competition',
				'I scored the third place on the Małopolski Festiwal Informatyczny - lokal competition for doing project. I did a system for real time vehicle tracking. Designed to track buses and providing real time information to travelers.',
				'Me presenting my project',
			],
		],
		2020: [
			[
				'Color lines created',
				'I did like a ten versions of them for my friends. My is out there for you to play.',
				'Preview of the project',
			],
			[
				'Contributed to Vanced+SponsorBlock Open Source project',
				'I was a first one who did "too hard to implement" in just three days!',
				'Preview of the project',
			],
			[
				'My first 10km run',
				'I run 10km for the first time in 55 minutes, pretty good I guess',
				'Screenshot of my stats',
			],
		],
		2021: [
			['Studying Cybersecurity at AGH'],
			[
				'New Job: Software Engineer at Sabre',
				'Started working as a software engineer at Sabre Cracow',
			],
			['Graduated high school', 'With the technical title'],
		],
		2022: [
			[
				'My first official half marathon',
				'Took part in 9th Cracovia Royal Half Marathon along with about six thousands others.<br>Did it in 01:43:51',
				'Photo of my medal',
			],
			[
				'Wojtek created',
				'Created Discord bot for recording lectures. He serves us very well to this day and has received many thanks from my colleagues.',
				'Sleeping student stock photo',
			],
			[
				'New Job: Software Engineer at IBM',
				'Started working as a software engineer at IBM Lab Cracow',
			],
		],
		2023: ['Life still continues'],
	},
} satisfies BaseTranslation

export default en
