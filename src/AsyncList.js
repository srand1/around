const AsyncList = props => (
	<ul>
		{props.jobs.map(t => (
			<li key={t.key}>
				{t.state[0]} | {t.key}
			</li>
		))}
	</ul>
);
export default AsyncList;
