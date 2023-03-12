import type { Translation } from '../i18n-types'

const pl = {
	rootUrl: '/pl/',
	mainPage: 'Strona główna',
	hiThere: 'Witaj!',
	iam: 'Jestem',
	cracow: 'Kraków',
	softwareEngineer: 'Inżynier oprogramowania',
	featuredProjects: 'Wybrane projekty',
	checkoutGithub: 'Zobacz mojego GitHuba',
	messageTelegram: 'Napisz na Telegramie',
	siteDescription:
		'Cześć! Jestem Jakub, młody i ambitny programista, obecnie pracuję w IBM. Robię wiele projektów w różnorodnych technologiach. Uwielbiam też biegać 💪',
	webGame: 'Gra internetowa',
	nativeApp: 'Natywna aplikacja',
	discordBot: 'Bot Discordowy',
	pwa: 'Aplikacja internetowa',
	contents: 'Spis treści',
	funFact: 'Ciekawostka',
	androidApp: 'Androidowa aplikacja',
	404: {
		title: 'Ta strona nie istnieje',
		link: 'Powrót na stronę główną',
	},

	colorLines: {
		title: 'Kulki',
		date: 'Paź 2020 - teraz',
		description:
			'Prosta gra logiczna. Ułóż minimum 5 kulek w tym samym kolorze w linii, ale co każdy ruch się pojawiają trzy nowe<br/>Jak dużo dasz rady zbić?',
	},
	checkers: {
		title: 'Warcaby',
		date: 'Kwi 2020',
		description:
			'To miał być prosty, szkolny projekt gry 3D. Ale ja go wziąłem poziom wyżej!<br/>Wieloosobowe warcaby w stylu <em>Minecrafta</em>.',
	},
	mcwallpaper: {
		title: 'Generator tapet',
		date: 'Mar 2021',
		description:
			'Jakby wyglądał mój pulpit gdyby tak ułożyć całą tapetę z jednego bloku? Rezultat wygląda wspaniale ❤️',
	},
	planZsl: {
		title: 'Plan lekcji ZSŁ',
		date: 'Paź 2021',
		description:
			'Prostota i niezawodność - definiowane na nowo - dla uczniów, nauczycieli i rodziców. <br/>Działające offline, szybkie i łatwe w użyciu plany lekcji…',
	},
	wojtek: {
		title: 'Wojtek',
		url: '/pl/wojtek/',
		date: 'Paź 2022 - teraz',
		description:
			'Wojtek to ten jeden pilny student, który nagra każdy zdalny wykład i udostępni całemu kierunkowi za piwo.',
	},
	upload: {
		title: 'Dysk FireFile',
		date: 'Kwi 2021',
		description:
			'Od zawsze potrzebowałem wygodnego sposobu udostępniania plików i skracania linków. To moje rozwiązanie tego problemu…',
	},
	wonder: {
		title: 'Wonder RTS',
		date: 'ciągle rozwijana',
		description:
			'Otwartoźródłowa, wieloosobowa strategia czasu rzeczywistego. Cały czas tworzona, więc ciężko na razie coś o niej napisać.',
	},
	mobishit: {
		title: 'Mobishit',
		date: 'Od 2019',
		description:
			'Napędzany społecznością, otwartoźródłowy alternatywny klient to dziennika elektronicznego Mobireg. Aplikacja używana przez setki uczniów w całej Polsce.',
	},
	articles: {
		wojtek: {
			title: 'Wojtek · Discordowy Bot nagrywający wykłady',
			description:
				'Stworzyłem bota na Discorda, któremu można kazać nagrywać zdalny wykład w Webex lub Teams. Sam wejdzie, wyciszy się i po zakończeniu wyśle linka do nagrania.',
			heading: 'Wojtek, czyli bot nagrywający wykłady',
			quote:
				'Myślę, że każdej osobie zdarzyło się w życiu choć raz zaspać na lekcję.<br/>Po prostu czasami nie chce się wstać, może by tak wykorzystać technologię by żyło się łatwiej?',
			sections: [
				{
					title: 'Ale po co?',
					content: [
						'Rozpoczął się październik, nowy rok akademicki, nowe przedmioty, nowe wykłady.',
						'Na mojej uczelni wykłady są zazwyczaj nieobowiązkowe, równocześnie „góra” sugeruje robienie wykładów stacjonarnych, do tego często są one po prostu niepotrzebne na ćwiczeniach i do zdania egzaminu. Takie połączenie skutkuje niską frekwencją.',
						'Na szczęście większość prowadzących zajęcia na moim kierunku poszła po rozum do głowy i zdecydowała się robić wykłady zdalnie.',
						'Taka sytuacja pozwala na dużo wygodniejszą konsumpcję wiedzy co przyczynia się do zwiększenia zadowolenia studentów. A przynajmniej w teorii…',
						'W praktyce i tak nie wszyscy uczestniczą w wykładach, bo liczą że ktoś je nagra i będą mogli sobie obejrzeć kiedy chcą i na przyspieszonym tempie. Problem zaczyna się gdy ten „ktoś” nie istnieje, bo nikomu się nie chciało włączyć nagrywania, bo „ktoś” kto zazwyczaj nagrywał zaspał itp...',
						'Fajnie byłoby mieć kogoś, na kim można polegać, kogoś kto zawsze nagra i udostępni wykład… Powitajcie <em>Wojtka</em> - naszego nowego kolegę.',
						'Mem z Patrykiem wpychającym dużą dynię SpongeBobowi przez lejek; podpisane, że studenci przed sesją oglądający wykłady',
					],
				},
				{
					title: 'Czy to jest możliwe?',
					content: [
						'Przed wykonaniem projektu zawsze zadaję sobie to pytanie: <em>Czy jestem w stanie w ogóle zrobić coś takiego?</em>',
						'Aby lepiej zaplanować sobie próbę stworzenia rozwiązania, problem rozbijam na kilka mniejszych etapów, w tym przypadku były to:',
						[
							'Uruchomić Chrome tak, aby kontrolować go z kodu',
							'Wejść na spotkanie na Webexie - przejść przez proces wpisywania imienia oraz Captcha',
							'Nagrać przeglądarkę - zarówno obraz jak i dźwięk',
							'Umożliwić zatrzymanie nagrywania oraz wykryć zakończenie spotkania',
							'Umożliwić wywoływanie nagrywania przez dowolną osobę na serwerze Discord',
							'Zrobić to w miarę intuicyjne i odporne na błędy człowieka',
							'Powtórzyć wszystko dla Microsoft Teams',
							'Umożliwić łatwy dostęp do nagrań',
						],
						'Tak więc, rozpocząłem pracę, docelowo bot będzie uruchomiony gdzieś w chmurze. Aby umożliwić przenośność kodu skorzystałem z Dockera. ',
						'Docker to ciekawe i bardzo użyteczne narzędzie jednak na początku nie było mi przydatne. Ciężko pisze się kod, który dokonuje interakcji z graficzną stroną internetową jeżeli wszystko działa bez interfejsu użytkownika. Dlatego uruchamiałem mojego bota lokalnie na komputerze. Wykorzystałem bibliotekę <a href="https://pptr.dev/">Puppeteer</a> w celu łatwego kontrolowania przeglądarki.',
						'Teraz należy wejść na spotkanie. Webex oczekuje rozwiązania Captchy 😔 Początkowo myślałem, że to nie do obejścia, ale przecież mógłbym wysłać zdjęcie Captchy do przepisania komuś na Discordzie - ktoś mi odpisze i wejdę na spotkanie.',
						'Zrzut ekranu wejścia na spotkanie Webexa',
						'Używając komendy /nagraj mogę kazać Wojtkowi wejść na spotkanie, on po chwili odpisuje mi prośbą o rozwiązanie Captchy',
					],
				},
				{
					title: 'To działa!',
					content: [
						'Teraz potrzebuję włączyć nagrywanie. Bardzo szybko natrafiłem na bibliotekę <a href="https://www.npmjs.com/package/puppeteer-screen-recorder">puppeteer-screen-recorder</a>. Działała ona praktycznie out of the box, ale nie nagrywa dźwięku. Po dłuższym googlowaniu dowiedziałem sie, że puppeteer nie ma możliwości przechwytywania dźwięku 😐',
						'Nie wszystko stracone, mogę przecież uruchomić w dockerze serwer dźwięku PulseAudio z wirtualnym głośnikiem, który będę mógł osobno przechwycić używając programu ffmpeg. ',
						'Po skończonym wykładzie można zamknąć kartę z webexem, połączyć pliki z obrazem i dźwiękiem w jeden finalny mając nadzieje, że nic się nie rozjedzie 😅 A następnie wysłać wiadomość na kanał na Discordzie.',
						'W taki sposób wypełniłem 5 kroków i stworzyłem MVP. Czas na testy w prawdziwym środowisku',
					],
				},
				{
					title: 'Trochę walki z błędami',
					content: [
						'Oczywiście nigdy nie jest tak, że program działa bezbłędnie po napisaniu. Wojtek tak samo miał swoje problemy, nie raz potrafił się wywalić i potrzebował licznych poprawek.',
						'Sama implementacja wchodzenia na spotkanie na Teamsach nie była problematyczna. Jednak pojawił się zupełnie niewyjaśniony błąd. Po około 5 sekundach nagrywania ekranu z Microsoft Teams ekran był kompletnie biały. Wiele nieudanych prób naprawy zmusiły mnie do porzucenia biblioteki nagrywającej na rzecz postawienia serwera X11. W tym celu wykorzystałem program <code>Xvfb</code>.',
						'Wojtek na początku miał na imię Andrzej, ale ponieważ Webex sortuje alfabetycznie uczestników spotkania postanowiłem zmienić mu imię na Wojtek, żeby mniej rzucał się w oczy będąc na dole listy.',
						'Tak więc obecnie Wojtek uruchamia Chrome w pełnoekranowym trybie w wirtualnym pulpicie z wirtualnym głośnikiem i nagrywa jak normalny ekran. Nie obyło się bez problemów podczas włączania PulseAudio i X11, dlatego profilaktycznie przed uruchomieniem muszę usuwać tymczasowe pliki jak <code>/run/pulse*</code> czy <code>/tmp/.X1-lock</code>, oraz killować procesy X11 i pulseaudio.',
						'Jak już wszystko działało w miarę stabilnie, to Microsoft wypuścił aktualizację Teamsów znacznie zmieniającą interfejs co oczywiście wywróciło Wojtka 🙄',
						'Jednym razem spadło z rowerka nagrywanie dźwięku, jednak obraz się nagrał, co zwróciło moją uwagę to bardzo mały rozmiar finalnego pliku. Okazało się, że niepoprawnie kompresuję audio i niepotrzebnie są w nim dwa kanały (stereo). Dzięki jednemu bugowi znalazłem kolejny🤗',
						'Innym problemem, który nie był widoczny na testach było zatrzymanie nagrywania po około 4 minutach. Po dłuższym szukaniu przyczyny znalazłem: ffmpeg, którym nagrywam, stale wypisuje na ekran aktualne statystyki takie jak czas nagrania. Te dane wpisuje do bufora, ten bufor jest dostępny dla programu, który uruchomił ffmpega - Wojtka. Ale Wojtka nie obchodzi co tam sobie ffmpeg pisze, więc tego nie czyta. Po około 4 minutach cały bufor się zapycha i system wstrzymuje proces ffmpeg. Naprawienie tego to proste dodanie <code> stdio: "ignore" </code> do opcji przy uruchamianiu procesu 🤦‍♂️',
					],
				},
				{
					title: 'O kompresji',
					content: [
						'Filmy dużo ważą, tak po prostu. Na szczęście pewni mądrzy ludzie wymyślili algorytmy kompresji, które można wykorzystać.',
						'Priorytetem dla mnie jest łatwy dostęp filmu dlatego hostowane są na serwerze HTTP. To umożliwi oglądanie filmu bez konieczności pobierania całego. Format .mp4 jest szeroko wspierany w przeglądarkach internetowych co sprawia, że każde urządzenie jest w stanie taki film wyświetlić.',
						'Ale czy na pewno? Format mp4 to jedynie kontener, to jak zapisany jest obraz w nim to sprawa innego kodeku. Naturalnie najpierw spróbowałem możliwie najlepszego kodeku - h255, jednak okazuje się, że nie jest on natywnie wspierany na wszystkich urządzeniach. System Windows nawet każe sobie zapłacić w 2022 roku za możliwość otwarcia takiego pliku 🤯',
						'Dlatego zdecydowałem sie użyć h254, który oferuje gorszy współczynnik jakości do rozmiaru, ale lepszą kompatybilność.',
						'A skoro o rozmiarach mowa. 90 minut wykładu waży… około 25 MB, przy czym wszystko na slajdach jest czytelne. Jeżeli wykładowca oprócz slajdów pokaże kamerkę lub coś innego co się rusza to rozmiar wzrasta o kilka MB.',
						'Aby osiągnąć taki wynik używam takiej komendy:',
						['# Nagrywanie dźwięku:', '# Nagrywanie obrazu:', '# Łączenie obu nagrań:'],
						'Ja używam parametrów: WIDTH={width}, HEIGHT={height}, FRAMERATE={framerate}, CRF={crf} BITRATE={bitrate}.',
					],
				},
				{
					title: 'Jak się sprawdza po pół roku?',
					content: [
						'Minął semestr obecności Wojtka z nami. Czy było warto? Absolutnie!',
						'Jakieś statystyki? Ponad 60 wykładów w około 2GB nagrań. Najpilniejszy student kierunku.',
						'Uważam, że to fajny projekt. Dużo się nauczyłem robiąc go, choć trochę się wkurzałem gdy nie działał jak chciałem. Jednak najważniejsze, że mogłem komuś innemu pomóc umożliwiając oglądnięcie wykładu później.',
					],
				},
			],
		},
	},
	timeline: {
		months: [
			'',
			'Sty',
			'Lut',
			'Mar',
			'Kwi',
			'Maj',
			'Cze',
			'Lip',
			'Sie',
			'Wrz',
			'Paź',
			'Lis',
			'Gru',
		],
		meta: [
			'Moje osiągnięcia',
			'Oto oś moich bardziej znaczących osiągnięć życiowych. Są to wybory zawodowe, rozwijane projekty czy sukcesy w konkursach i sportach.',
		],
		title: [
			'Moje osobiste',
			'osiągnięcia',
			'W życiu wykonywałem wiele interesujących projektów. Tu jest oś czasu niektórych z nich.',
			`Lubię powracać do tej listy, bo motywuje mnie do dalszego działania`,
		],
		2001: [
			'Wdrożenie na <code>prod</code> zakończone statusem <code>0</code>.<br/>Wszystkie systemy sprawne.',
			'Witaj świecie!',
		],
		2009: [
			'Zadecydowałem o swojej przyszłości',
			'Na lekcji w szkole pisaliśmy kim byśmy chcieli być w przyszłości. Ja napisałem „Chcę zostać informatykiem, jak mój tata. To przecież nic trudnego, tylko siedzenie przed kompem i klikanie myszą”',
		],
		2013: [
			'Pierwszy kontakt z programowaniem',
			'Tata pokazał mi jak pisać proste programy konsolowe w Pascalu, ale nic z tego nie wynikło na długi czas…',
		],
		2015: [
			'Dwóch kolegów powiedziało mi, że zaczęli uczyć się programować',
			'Wiedziałem że nie mogę zostać w tyle, to była zdrowa konkurencja, więc też zacząłem oglądać kurs Mirosława Cementa o C++ na Youtube.',
			'Twarz Mirosława Zelenta',
		],
		2016: [
			[
				'Rozpocząłem przygodę z Javą na Androidzie',
				'Nieudana próba nie oznacza, że powinien przestać. Przepisałem projekt do Javy i zacząłem poznawać Android Studio',
				'Ikona Android Studio',
			],
			'Spróbowałem apkę w C# do Androida używając Xamarin, ale niestety nie szło to za dobrze.',
			[
				'Poznałem C#',
				'Chciałem napisać program sprawdzający szkolne zastępstwa w tle, ale nie umiałem tego napisać w C++. Zacząłem więc uczyć się C#, bo w nim wszystko było dużo prostsze',
			],
			[
				'Wypuściłem pierwszą grę',
				'Nazywała się Labirynt, prosta platformówka napisana w C++ w SFML. Miała edytor poziomów napisany w Borland C++ Builder oraz grafikę zrobione przez mojego przyjaciela Dawida.',
				'Zrzut ekranu z gry',
			],
		],
		2017: [
			['Rozpocząłem naukę w technikum', 'W ZSŁ Kraków jako technik informatyk', 'Logo ZSŁ Kraków'],
			[
				'Opublikowałem moją pierwszą aplikację w Google Play',
				'Zdobyła ponad dwieście pobrań w pierwszy miesiąc. Była kompletną tragedią od strony programistycznej, ale działała.',
				'Ikona mojej pierwszej apki w Google Play',
			],
		],
		2018: [
			[
				'Rozpocząłem pracę nad Mobishit',
				'Alternatywna aplikacja do dziennika elektronicznego Mobireg na Androida. Opublikowałem ją i szybko zdobyła kilkaset aktywnych użytkowników.',
				'Zrzut ekranu z aplikacji',
			],
		],
		2019: [
			[
				'Plan lekcji ZSŁ utworzony',
				'Stworzyłem PWA dla mojej szkoły. Jest to wygodna aplikacja Internetowa do dostępu do planów lekcji. Używana do dziś',
				'Zrzut ekranu z aplikacji',
			],
			[
				'Zacząłem uczyć się Webówki',
				'Pierwsze zetknięcie z Angularem i Typescriptem podczas stażu.',
			],
			[
				'Moja pierwsza praca w IT: Stażyta Inżynier Oprogramowania',
				'Zostałem stażystą w ES-System w Krakowie w dziale Inteligentnych Systemów Sterowania.',
			],
			[
				'3 miejsce na Małopolskim Festiwalu Informatycznym',
				'Zdobyłem zaszczytne trzecie miejsce w lokalnym konkursie polegającym na zrobieniu i zaprezentowaniu projektu dla ludzi. Stworzyłem system do śledzenia pojazdów przeznaczony dla busów firm prywatnych, który miał za zadanie dawać informacje na bieżąco podróżującym gdzie jest ich bus.',
				'Ja prezentujący projekt',
			],
		],
		2020: [
			[
				'Kulki!',
				'Zrobiłem z 10 takich projektów moim kolegom na zaliczenie. Moja wersja jest dostępna online do zagrania i wspierana do dzisiaj.',
				'Zrzut z gry',
			],
			[
				'Zaangażowałem się w otwarty projekt Youtube Vanced, wykorzystywany przez miliony, dodając SponsorBlocka',
				'Byłem pierwszy który to uczynił. Mówili „to jest za trudne do zrobienia”, a ja przyszedłem z zewnątrz i zrobiłem to „za trudne” w 3 dni!',
				'Ikona projektu Youtube Vanced',
			],
			[
				'Mój pierwszy bieg na 10 kilometrów',
				'Przebiegłem swoją pierwszą dychę w 55 minut z Endomondo, całkiem spoko mi się wydaje',
				'Moje statystyki',
			],
		],
		2021: [
			['Zacząłem studiować Cyberbezpieczeństwo na Akademii Górniczo Hutniczej w Krakowie'],
			['Nowa praca: Inżynier oprogramowania w Sabre', 'Rozpocząłem nową pracę w Sabre w Krakowie.'],
			['Ukończyłem technikum', 'Szkoła średnia skończona i to z technicznym tytułem Informatyka'],
		],
		2022: [
			[
				'Mój pierwszy oficjalny połmaraton',
				'Wziąłem udział w 9. Cracovia Półmaraton Królewski wraz z około sześcioma tysiącami innych. Mój wynik to 01:43:51',
				'Zdjęcie medalu',
			],
			[
				'Powstał Wojtka',
				'Stworzyłem bardzo użytecznego Discordowego bota do nagrywania zdalnych wykładów',
				'Stokowe zdjęcie zaspanej osoby',
			],
			[
				'Nowa praca: Inżynier oprogramowania w IBM',
				'Rozpocząłem nową pracę jako inżynier oprogramowania w IBM Lab w Krakowie',
			],
		],
		2023: ['Życie cały czas leci'],
	},
} satisfies Translation

export default pl
