<script lang="ts">
import Born from '@components/icon/born.svelte'
import EsSystemLogo from '@components/icon/es-system.svelte'
import IbmLogo from '@components/icon/ibm.svelte'
import PascalLogo from '@components/icon/pascal.svelte'
import SabreLogo from '@components/icon/sabre.svelte'
import EventImage from './event-image.svelte'
import LifeEvent from './life-event.svelte'
import YearContainer from './year-container.svelte'

import cement2 from '$lib/g/cement.m.avif'
import cement1 from '$lib/g/cement.s.avif'

import zsl2 from '$lib/g/zsl.m.avif'
import zsl1 from '$lib/g/zsl.s.avif'

import zslPlan1 from '$lib/g/zslPlan.es.webp'
import zslPlan2 from '$lib/g/zslPlan.m.webp'

import kulki1 from '$lib/g/kulki.es.webp'
import kulki2 from '$lib/g/kulki.m.webp'

import vanced2 from '$lib/g/vanced.m.avif'
import vanced1 from '$lib/g/vanced.s.avif'

import mobishit2 from '$lib/g/mobishit.m.avif'
import mobishit1 from '$lib/g/mobishit.s.avif'

import labirynt2 from '$lib/g/labirynt.m.avif'
import labirynt1 from '$lib/g/labirynt.s.avif'

import sp2dobczyce2 from '$lib/g/sp2dobczyce.m.avif'
import sp2dobczyce1 from '$lib/g/sp2dobczyce.s.avif'

import mfi2 from '$lib/g/mfi.m.avif'
import mfi1 from '$lib/g/mfi.s.avif'

import androidStudio2 from '$lib/g/android-studio.m.avif'
import androidStudio1 from '$lib/g/android-studio.s.avif'

import wojtek2 from '$lib/g/wojtek-profile.m.avif'
import wojtek1 from '$lib/g/wojtek-profile.s.avif'

import endomondo2 from '$lib/g/endomondo.m.avif'
import endomondo1 from '$lib/g/endomondo.s.avif'

import halfmarathon2 from '$lib/g/halfmarathon.m.avif'
import halfmarathon1 from '$lib/g/halfmarathon.s.avif'
</script>

<svelte:head>
	<title>Timeline of my advancements</title>
	<meta
		name="description"
		content="Here is the timeline of my major life advancements. Theses include my career choices, developed projects and running achievements."
	/>
</svelte:head>
<header>
	<h1>My advancements</h1>
</header>
<main>
	<YearContainer year="2023">
		<LifeEvent title="Life still continues" />
	</YearContainer>
	<YearContainer year="2022">
		<LifeEvent
			title="My first official half marathon"
			content="Took part in 9th Cracovia Royal Half Marathon, did it in 01:43:51"
			date="Oct"
		>
			<svelte:fragment slot="year">
				<EventImage small="{halfmarathon1}" large="{halfmarathon2}" alt="Photo of my medal" />
			</svelte:fragment>
		</LifeEvent>

		<LifeEvent
			title="Wojtek created"
			content="Created Discord bot for recording lectures "
			date="Oct"
		>
			<svelte:fragment slot="year">
				<EventImage small="{wojtek1}" large="{wojtek2}" alt="Sleeping student stock photo" />
			</svelte:fragment>
		</LifeEvent>

		<LifeEvent
			major
			title="New Job: Software Engineer at IBM"
			content="Started working as a software engineer at IBM Lab Cracow"
			date="July"
		>
			<svelte:fragment slot="year">
				<IbmLogo />
			</svelte:fragment>
		</LifeEvent>
	</YearContainer>

	<YearContainer year="2021">
		<LifeEvent title="Studying Cybersecurity at AGH" content="" date="Oct" />

		<LifeEvent
			major
			title="New Job: Software Engineer at Sabre"
			content="Started working as a software engineer at Sabre Cracow"
			date="July"
		>
			<svelte:fragment slot="year">
				<SabreLogo />
			</svelte:fragment>
		</LifeEvent>

		<LifeEvent title="Graduated high school" content="With the technical title" date="Apr" />
	</YearContainer>

	<YearContainer year="2020">
		<LifeEvent
			title="Color lines created"
			content="I did like a ten versions of them. My is out there for you to play."
			date="Dec"
		>
			<svelte:fragment slot="year">
				<EventImage small="{kulki1}" large="{kulki2}" alt="Preview of the project" />
			</svelte:fragment>
		</LifeEvent>

		<LifeEvent
			title="Contributed to Vanced+SponsorBlock Open Source project"
			content="{'I was a first one who did "too hard to implement" in just three days!'}"
			date="May"
		>
			<svelte:fragment slot="year">
				<EventImage small="{vanced1}" large="{vanced2}" alt="Preview of the project" />
			</svelte:fragment>
		</LifeEvent>

		<LifeEvent
			title="My first 10km run"
			content="I run 10km for the first time in 55 minutes, pretty good I guess"
			date="Apr"
		>
			<svelte:fragment slot="year">
				<EventImage small="{endomondo1}" large="{endomondo2}" alt="Screenshot of my stats" />
			</svelte:fragment>
		</LifeEvent>
	</YearContainer>

	<YearContainer year="2019">
		<LifeEvent
			major
			title="ZSŁ Plan got released"
			content="I released a new timetable progressive web app for my school."
			date="Nov"
		>
			<svelte:fragment slot="year">
				<EventImage small="{zslPlan1}" large="{zslPlan2}" alt="Preview of the project" />
			</svelte:fragment>
		</LifeEvent>
		<LifeEvent
			title="Got into web development"
			content="Started with Angular and Typescript during the internship"
			date="July"
		/>
		<LifeEvent
			major
			title="First IT job: Software Engineer Intern"
			content="I've become Intern at ES-System in Cracow"
			date="Apr"
		>
			<svelte:fragment slot="year">
				<EsSystemLogo />
			</svelte:fragment>
		</LifeEvent>
		<LifeEvent
			title="3rd place at MFI competition"
			content="I scored the third place on the Małopolski Festiwal Informatyczny - lokal competition for doing project. I did a system for real time vehicle tracking. Designed to track buses and providing real time information to travelers."
			date="Apr"
		>
			<svelte:fragment slot="year">
				<EventImage large="{mfi2}" small="{mfi1}" alt="Me presenting my project" />
			</svelte:fragment>
		</LifeEvent>
	</YearContainer>

	<YearContainer year="2018">
		<LifeEvent
			major
			title="Mobishit project released"
			content="Alternative Android app to access electronic grade book created by me was released to the public getting few hundreds downloads. "
			date="Oct"
		>
			<svelte:fragment slot="year">
				<EventImage small="{mobishit1}" large="{mobishit2}" alt="Preview of the project" />
			</svelte:fragment>
		</LifeEvent>
	</YearContainer>

	<YearContainer year="2017">
		<LifeEvent
			major
			title="Started technical school"
			content="ZSŁ Cracow as profile IT specialist"
			date="Sep"
		>
			<svelte:fragment slot="year">
				<EventImage small="{zsl1}" large="{zsl2}" alt="Logo of ZSŁ Kraków" />
			</svelte:fragment>
		</LifeEvent>
		<LifeEvent
			major
			title="Released app in Google Play"
			content="It gathered over two hundreds downloads in first month, was a garbage from development perspective, but it worked. "
			date="Mar"
		>
			<svelte:fragment slot="year">
				<EventImage
					small="{sp2dobczyce1}"
					large="{sp2dobczyce2}"
					alt="Icon of My first Google Play App"
				/>
			</svelte:fragment>
		</LifeEvent>
	</YearContainer>

	<YearContainer year="2016">
		<LifeEvent
			title="Started Java with Android"
			content="Failed attempt doesn't mean I should stop. I migrated project to Java and started working in Android Studio"
			date="Nov"
		>
			<svelte:fragment slot="year">
				<EventImage
					small="{androidStudio1}"
					large="{androidStudio2}"
					alt="Icon of Android Studio"
				/>
			</svelte:fragment>
		</LifeEvent>
		<LifeEvent
			content="Tried porting C# to Android using Xamarin, but failed to make it any good."
			date="Oct"
		/>
		<LifeEvent
			title="Got into C#"
			content="I wanted to make a program checking scholl substitutions for me in background, but couldn't get HTTP working in C++. C# on the other hand worked out of the box."
			date="Sep"
		/>
		<LifeEvent
			major
			title="Released a game"
			content="It was called labyrinth, written in C++ in SFML. It had level editor made in Borland C++ Builder and graphics drawn by my friend David."
			date="May"
		>
			<svelte:fragment slot="year">
				<EventImage small="{labirynt1}" large="{labirynt2}" alt="Preview of the project" />
			</svelte:fragment>
		</LifeEvent>
	</YearContainer>

	<YearContainer year="2015">
		<LifeEvent
			major
			title="Two friends told me they started learning programming"
			content="I knew I couldn't be left behind, it was a healthy competition. So I started watching C++ tutorials by Mirosław Cement on YouTube too."
			date="Dec"
		>
			<svelte:fragment slot="year">
				<EventImage small="{cement1}" large="{cement2}" alt="Face of Mirosław Zelent" />
			</svelte:fragment>
		</LifeEvent>
	</YearContainer>

	<YearContainer year="2013">
		<LifeEvent
			title="First contact with programming"
			content="Dad showed me how to write simple console programs in Pascal. However, it didn't spur me into anything more."
		>
			<svelte:fragment slot="year">
				<PascalLogo />
			</svelte:fragment>
		</LifeEvent>
	</YearContainer>

	<YearContainer year="2009">
		<LifeEvent
			title="Decided about my future"
			content="{'Wrote an essay in school stating "I want to become be a computer specialist, like my dad. There is nothing difficult with that, simply sitting in front of a computer and clicking a mouse".'}"
		/>
	</YearContainer>

	<YearContainer year="2001">
		<LifeEvent
			major
			date="Nov"
			title="Hello world!"
			content="{'Deployment to <code>prod</code> finished with status <code>0</code>.<br/>All systems operational.'}"
		>
			<svelte:fragment slot="year">
				<Born />
			</svelte:fragment>
		</LifeEvent>
	</YearContainer>
</main>

<style>
main {
	--line-width: 0.4ch;
	--left-width: 88px;
	margin: 32px 0;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
}
@media (min-width: 600px) {
	main {
		--left-width: 140px;
	}
}
</style>
