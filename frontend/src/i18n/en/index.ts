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
	readMore: 'Read More...',

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
		description: "Redefining simplicity and reliability for students, parents and teachers. <br/>Offline ready, fast and easy to use app for checking timetables.",
	},
	wojtek: {
		title: 'Wojtek',
		url: '/sleepy-student',
		date: 'Oct 2022 - now',
		description: "Wojtek is this one student that is always on time, never misses remote lectures to record and publish them on his webpage...",
	},
	upload: {
		title: 'FireFile upload',
		date: 'Apr 2021',
		description: "I've always wanted to have fast and simple way to store and share files online. That's my answer to the problem...",
	},

	articles: {
		wojtek: {
			title: "Wojtek · Discordowy Bot nagrywający wykłady",
			description: 'Stworzyłem Discord bota, któremu można kazać nagrywać zdalny wykład w Webex lub Teams. Sam wejdzie, wyciszy się i po zakończeniu wyśle linka do nagrania.',
			heading: "Wojtek, czyli bot nagrywający wykłady",
			quote: "Myślę, że każdej osobie zdarzyło się w życiu choć raz zaspać na lekcję.<br/>Po prostu czasami nie chce się wstać, może by tak wykorzystać technologię by żyło się łatwiej?",
			sections: [
				{
					title: 'Ale po co?', content: [
						'Rozpoczął się październik, nowy rok akademicki, nowe przedmioty, nowe wykłady.',
						'Na mojej uczelni wykłady są zazwyczaj nieobowiązkowe równocześnie „góra” sugeruje robienie wykładów stacjonarnych, do tego często są one po prostu niepotrzebne na ćwiczeniach i egzaminach. Takie połączenie skutkuje niską frekwencją',
						'Na szczęście większość prowadzących zajęcia na moim kierunku poszła po rozum do głowy z zdecydowała się robić wykłady zdalnie.',
						'Taka sytuacja pozwala na dużo wygodniejszą konsumpcję wiedzy co przyczynia się do zwiększenia zadowolenia studentów. A przynajmniej w teorii...',
						'W praktyce i tak nie wszyscy uczestniczą w wykładach, bo liczą że ktoś je nagra i będą mogli sobie obejrzeć kiedy chcą i na przyspieszonym tempie. Problem zaczyna się gdy ten „ktoś” nie istnieje, bo nikomu się nie chciało włączyć nagrywania, bo „ktoś” kto zazwyczaj nagrywał zaspał itd...',
						'Fajnie byłoby mieć kogoś, na kimś można polegać, kogoś kto zawsze nagra i udostępni wykład... Powitajcie <em>Wojtka</em> - naszego nowego kolegę.',
						'Mem z Patrykiem wpychającym dużą dynię SpongeBobowi przez lejek; podpisane, że studenci przed sesją oglądający wykłady',
					]
				},
				{
					title: 'Czy to jest możliwe?', content: [
						'Przed wykonaniem projektu zawsze zadaję sobie to pytanie: <em>Czy jestem w stanie w ogóle zrobić coś takiego?</em>.',
						'Aby lepiej zaplanować sobie próbę stworzenia rozwiązania problem rozbijam na kilka mniejszych etapów, w tym przypadku były to:',
						[
							'Uruchomić Chrome w trybie kontrolowanym przez JS',
							'Wejść na spotkanie na Webexie - przejść przez proces wpisywania imienia oraz Captcha',
							'Nagrać przeglądarkę - zarówno obraz jak i dźwięk',
							'Umożliwić zatrzymanie nagrywania oraz wykryć zakończenie spotkania',
							'Umożliwić wywoływanie nagrywania przez dowolną osobę na serwerze Discord',
							'Zrobić to w miarę intuicyjne i odporne na błędy człowieka',
							'Powtórzyć wszystko dla Microsoft Teams',
							'Umożliwić łatwy dostęp do nagrań zaufanym osobom',
						],
						'Tak więc, rozpocząłem pracę, docelowo bot będzie uruchomiony gdzieś w chmurze. Aby umożliwić przenośność kodu skorzystałem z Dockera. ',
						'Docker to ciekawe i bardzo użyteczne narzędzie jednak na początku nie było mi przydatne. Ciężko pisze się kod, który dokonuje interakcji z użytkownikiem jeżeli wszystko działa bez interfejsu użytkownika. Dlatego uruchamiałem mojego bota lokalnie na komputerze. Wykorzystałem bibliotekę <a href="https://pptr.dev/">Puppeteer</a> w celu łatwego kontrolowania przeglądarki.',
						'Teraz należy wejść na spotkanie. Webex oczekuje rozwiązania Captchy 😔 Początkowo myślałem, że to nie do obejścia, ale przecież mógłbym wysłać zdjęcie Captchy do przepisania komuś na Discordzie - ktoś mi odpisze i wejdę na spotkanie.',
						'Zrzut ekranu wejścia na spotkanie Webexa',
						'Używając komendy /nagraj mogę kazać Wojtkowi wejść na spotkanie, on po chwili odpisuje mi prośbą o rozwiązanie Captchy',
						'Teraz potrzebuję włączyć nagrywanie. Bardzo szybko natrafiłem na bibliotekę <a href="https://www.npmjs.com/package/puppeteer-screen-recorder">puppeteer-screen-recorder</a>. Działała ona praktycznie out of the box, ale nie nagrywała dźwięku. Po dłuższym googlowaniu dowiedziałem sie, że puppeteer nie ma możliwości przechwytywania dźwięku 😐',
						'Nie wszystko stracone, pomyślałem że mogę uruchomić w dockerze serwer dźwięku PulseAudio z wirtualnym głośnikiem, który będę mógł osobno przechwycić używając programu ffmpeg a po skończonym wykładzie połączyć obraz i dźwięk w jeden finalny plik mając nadzieje, że nic się nie rozjedzie 😅',
					]
				},
				{ title: 'To działa!', content: ['xddd'] },
				{ title: 'Trochę walki z błędami', content: ['xddd'] },
				{ title: 'Kilka sugestii', content: ['xddd'] },
				{ title: 'Podsumowanie', content: ['xddd'] },
			],
		}
	}

} satisfies BaseTranslation

export default en
