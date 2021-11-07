const AsyncList = props => (
	<ul>
		{props.jobs.map(t => (
			<li key={t}>
				{t}
			</li>
		))}
	</ul>
);
export default AsyncList;
