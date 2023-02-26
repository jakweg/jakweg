<script lang="ts">
import IbmLogo from '@components/icon/ibm.svelte'
import SabreLogo from '@components/icon/sabre.svelte'
import EventContainer from './event-container.svelte'
import LifeEvent from './life-event.svelte'

let reverse: boolean = false
</script>

<label style:position="fixed">
	<input type="checkbox" bind:checked="{reverse}" />
	Reverse
</label>
<p>xd</p>

<main class:reverse="{reverse}">
	<EventContainer year="2022">
		<LifeEvent
			title="Wojtek created"
			content="Created Discord bot for recording lectures "
			date="Oct"
		/>

		<svelte:fragment slot="year">
			<IbmLogo />
		</svelte:fragment>
		<LifeEvent
			major
			title="New Job: Software Engineer at IBM"
			content="Started working as a software engineer at IBM Lab Cracow"
			date="July"
		/>
	</EventContainer>

	<EventContainer year="2021">
		<LifeEvent title="Studying Cybersecurity at AGH" content="" date="Oct" />
	</EventContainer>

	<EventContainer>
		<svelte:fragment slot="year">
			<SabreLogo />
		</svelte:fragment>

		<LifeEvent
			major
			title="New Job: Software Engineer at Sabre"
			content="Started working as a software engineer at Sabre Cracow"
			date="July"
		/>
	</EventContainer>

	<EventContainer>
		<LifeEvent title="Graduated high school" content="With the technical title" date="Apr" />
	</EventContainer>
	<EventContainer year="2020">
		<LifeEvent
			title="Color lines created"
			content="I did like a ten versions of them. My is out there for you to play."
			date="Dec"
		/>
	</EventContainer>
	<EventContainer>
		<LifeEvent
			title="Contributed to Vanced+SponsorBlock Open Source project"
			content="{'I was a first one who did "too hard to implement" in just three days!'}"
			date="May"
		/>
	</EventContainer>

	<EventContainer year="2019">
		<LifeEvent
			major
			title="ZSŁ Plan got released"
			content="I released a new timetable progressive web app for my school."
			date="Nov"
		/>
	</EventContainer>
	<EventContainer>
		<LifeEvent
			title="Got into web development"
			content="Started with Angular and Typescript during the internship"
			date="July"
		/>
	</EventContainer>
	<EventContainer>
		<LifeEvent
			major
			title="First IT job: Software Engineer Intern"
			content="I've become Intern at ES-System in Cracow"
			date="Apr"
		/>
	</EventContainer>

	<EventContainer year="2017">
		<LifeEvent
			major
			title="Started technical school"
			content="ZSŁ Cracow as profile IT specialist"
			date="Sep"
		/>
	</EventContainer>
	<EventContainer>
		<LifeEvent
			major
			title="Released app in Google Play"
			content="It gathered over two hundreds downloads, was a garbage from development perspective, but it worked. "
			date="Mar"
		/>
	</EventContainer>

	<EventContainer year="2016">
		<LifeEvent
			title="Started Java with Android"
			content="Failed attempt doesn't mean I should stop. I migrated project to Java and started working in Android Studio"
			date="Nov"
		/>
	</EventContainer>
	<EventContainer>
		<LifeEvent
			content="Tried porting C# to Android using Xamarin, but failed to make it any good."
			date="Oct"
		/>
	</EventContainer>
	<EventContainer>
		<LifeEvent
			title="Got into C#"
			content="I wanted to make a program checking scholl substitutions for me in background, but couldn't get HTTP working in C++. C# on the other hand worked out of the box."
			date="Sep"
		/>
	</EventContainer>
	<EventContainer>
		<LifeEvent
			major
			title="Released a game"
			content="It was called labyrinth, written in C++ in SFML. It had level editor made in Borland C++ Builder and graphics drawn by my friend David."
			date="May"
		/>
	</EventContainer>

	<EventContainer year="2015">
		<LifeEvent
			major
			title="Two friends told me they started learning programming"
			content="I knew I couldn't be left behind, it was a healthy competition. So I started watching C++ tutorials by Mirosław Cement on YouTube too."
			date="Dec"
		/>
	</EventContainer>

	<EventContainer year="~2013">
		<LifeEvent
			title="First contact with programming"
			content="Dad showed me how to write simple console programs in Pascal. However, it didn't spur me into anything more."
		/>
	</EventContainer>

	<EventContainer year="~2009">
		<LifeEvent
			title="Decided about my future"
			content="{'Wrote an essay in school stating "I want to become be a computer specialist, like my dad. There is nothing difficult with that, simply sitting in front of a computer and clicking a mouse".'}"
		/>
	</EventContainer>

	<EventContainer year="2001">
		<LifeEvent
			major
			date="Nov"
			title="Hello world!"
			content="{'Deployment to <code>prod</code> finished with status <code>0</code>.<br/>All systems operational.'}"
		/>
	</EventContainer>
</main>

<style>
main {
	margin: 32px 0;
	border-top: 16px solid white;
	border-bottom: 16px solid white;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
}
main.reverse {
	flex-direction: column-reverse;
}
</style>
