<script>
import Line from './line.svelte'
import MajorEvent from './major-event.svelte'
import MinorEvent from './minor-event.svelte'
import YearMark from './year-mark.svelte'
</script>

<main>
	<section>
		<YearMark year="2022" />
		<Line />
		<div class="content">
			<MajorEvent
				title="New Job: Software Engineer at IBM"
				content="Started working as a software engineer at IBM Lab Cracow"
				date="July"
			/>
		</div>
	</section>

	<section>
		<YearMark year="2021" />
		<Line />
		<div class="content">
			<MinorEvent title="Studying Cybersecurity at AGH" content="" date="Oct" />

			<MajorEvent
				title="New Job: Software Engineer at Sabre"
				content="Started working as a software engineer at Sabre Cracow"
				date="July"
			/>

			<MinorEvent title="Graduated high school" content="With the technical title" date="Apr" />
		</div>
	</section>

	<section>
		<YearMark year="2020" />
		<Line />
		<div class="content">
			<MinorEvent
				title="Color lines created"
				content="I did like a ten versions of them. My is out there for you to play."
				date="Dec"
			/>

			<MinorEvent
				title="Contributed to Vanced+SponsorBlock Open Source project"
				content="{'I was a first one who did "too hard to implement" in just three days!'}"
				date="May"
			/>
		</div>
	</section>

	<section>
		<YearMark year="2019" />
		<Line />
		<div class="content">
			<MajorEvent
				title="ZSŁ Plan got released"
				content="I released a new timetable progressive web app for my school."
				date="Nov"
			/>

			<MinorEvent
				title="Got into web development"
				content="Started with Angular and Typescript during the internship"
				date="July"
			/>

			<MajorEvent
				title="First IT job: Software Engineer Intern"
				content="I've become Intern at ES-System in Cracow"
				date="Apr"
			/>
		</div>
	</section>

	<section>
		<YearMark year="2017" />
		<Line />
		<div class="content">
			<MajorEvent
				title="Started technical school"
				content="ZSŁ Cracow as profile IT specialist"
				date="Sep"
			/>
			<MajorEvent
				title="Released app in Google Play"
				content="It gathered over two hundreds downloads, was a garbage from development perspective, but it worked. "
				date="Mar"
			/>
		</div>
	</section>

	<section>
		<YearMark year="2016" />
		<Line />
		<div class="content">
			<MinorEvent
				title="Started Java with Android"
				content="Failed attempt doesn't mean I should stop. I migrated project to Java and started working in Android Studio"
				date="Nov"
			/>
			<MinorEvent
				content="Tried porting C# to Android using Xamarin, but failed to make it any good."
				date="Oct"
			/>
			<MinorEvent
				title="Got into C#"
				content="I wanted to make a program checking scholl substitutions for me in background, but couldn't get HTTP working in C++. C# on the other hand worked out of the box."
				date="Sep"
			/>

			<MajorEvent
				title="Released a game"
				content="It was called labyrinth, written in C++ in SFML. It had level editor made in Borland C++ Builder and graphics drawn by my friend David."
				date="May"
			/>
		</div>
	</section>

	<section>
		<YearMark year="2015" />
		<Line />
		<div class="content">
			<MajorEvent
				title="Two friends told me they started learning programming"
				content="I knew I couldn't be left behind, it was a healthy competition. So I started watching C++ tutorials by Mirosław Cement on YouTube too."
				date="Dec"
			/>
		</div>
	</section>

	<section>
		<YearMark year="~2013" />
		<Line />
		<div class="content">
			<MinorEvent
				title="First contact with programming"
				content="Dad showed me how to write simple console programs in Pascal. However, it didn't spur me into anything more."
			/>
		</div>
	</section>

	<section>
		<YearMark year="~2009" />
		<Line />
		<div class="content">
			<MinorEvent
				title="Decided about my future"
				content="{'Wrote an essay in school stating "I want to become be a computer specialist, like my dad. There is nothing difficult with that, simply sitting in front of a computer and clicking a mouse".'}"
			/>
		</div>
	</section>
</main>

<style>
main {
	margin: 32px 0;
	border-top: 16px solid white;
	border-bottom: 16px solid white;
	display: flex;
	flex-flow: column nowrap;
}

section {
	--line-width: 0.6ch;
	display: grid;
	grid-template-columns: 8ch var(--line-width) 1fr;
}

.content {
	--left-margin: 1.5ch;
	margin-top: 0.8em;
	margin-left: var(--left-margin);
	margin-right: 1ch;
	display: flex;
	flex-flow: column nowrap;
}
</style>
