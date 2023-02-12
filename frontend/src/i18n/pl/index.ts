import type { Translation } from '../i18n-types'

const pl = {
	hiThere: 'Witaj!',
	iam: 'Jestem',
	cracow: 'Kraków',
	softwareEngineer: 'Inżynier oprogramowania',
	featuredProjects: 'Wybrane projekty',
	checkoutGithub: 'Zobacz mojego GitHuba',
	messageTelegram: 'Napisz na Telegramie',
	siteDescription: 'Cześć! Jestem Jakub, młody i ambitny programista, obecnie pracuję w IBM. Robię wiele projektów w różnorodnych technologiach. Uwielbiam też biegać 💪',
	webGame: 'Gra internetowa',
	nativeApp: 'Natywna aplikacja',
	discordBot: 'Bot Discordowy',
	pwa: 'Aplikacja internetowa',
	readMore: 'Zobacz więcej...',


	colorLines: {
		title: 'Kulki',
		date: 'Paź 2020 - teraz',
		description: "Prosta gra logiczna. Ułóż minimum 5 kulek w tym samym kolorze w linii, ale co każdy ruch się pojawiają trzy nowe<br/>Jak dużo dasz rady zbić?",
	},
	checkers: {
		title: 'Warcaby',
		date: 'Kwi 2020',
		description: "To miał być prosty, szkolny projekt gry 3D. Ale ja go wziąłem poziom wyżej!<br/>Wieloosobowe warcaby w stylu <em>Minecrafta</em>.",
	},
	mcwallpaper: {
		title: 'Generator tapet',
		date: 'Mar 2021',
		description: "Kiedyś zastanawiałem się jakby wyglądał mój pulpit gdyby tak ułożyć całą tapetę z jednego bloku. <br/>Więc napisałem generator tapet i rezultat wygląda świetnie ❤️",
	},
	planZsl: {
		title: 'Plan lekcji ZSŁ',
		date: 'Paź 2021',
		description: "Prostota i niezawodność - definiowane na nowo - dla uczniów, nauczycieli i rodziców. <br/>Działające offline, szybkie i łatwe w użyciu plany lekcji...",
	},
	wojtek: {
		title: 'Wojtek',
		url: '/pl/wojtek/',
		date: 'Paź 2022 - teraz',
		description: "Wojtek to ten jeden pilny student, który jest punktualnie na każdym zdalnym wykładzie, nagra go a potem udostępni całemu kierunkowi za piwo.",
	},
	upload: {
		title: 'Dysk FireFile',
		date: 'Kwi 2021',
		description: "Od zawsze potrzebowałem wygodnego sposobu udostępniania plików i skracania linków. To moje rozwiązanie tego problemu...",
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
				{ title: 'Czy to jest możliwe?', content: ['xddd'] },
				{ title: 'To działa!', content: ['xddd'] },
				{ title: 'Trochę walki z błędami', content: ['xddd'] },
				{ title: 'Kilka sugestii', content: ['xddd'] },
				{ title: 'Podsumowanie', content: ['xddd'] },
			],
		}
	}
} satisfies Translation

export default pl
