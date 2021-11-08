import './AsyncList.css';

const AsyncList = props => (
	<ul className="AsyncList">
		{[...props.jobs].reverse().map(t => (
			<li key={t.key}>
				{t.state[0]} | {t.key}
			</li>
		))}
	</ul>
);
export default AsyncList;
