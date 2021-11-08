import {useState} from 'react';
import AsyncList from './AsyncList';
import {valueErrInMs, hookedPromise} from './reuse/uncat';

const UnusedName = () => {
	const [jobsView, setJobs] = useState({
		ordered: [],
		byKey: {},
	});
	const _track = (p, tag) => hookedPromise(
		p, tag,
		key => setJobs(jobsPrev => {
			const byKey = {...jobsPrev.byKey, [key]: jobsPrev.ordered.length};
			const ordered = [...jobsPrev.ordered, {
				key,
				state: 'Pending',
			}];
			return {byKey, ordered};
		}),
		key => setJobs(jobsPrev => {
			const ordered = [...jobsPrev.ordered];
			ordered[jobsPrev.byKey[key]] = {
				key,
				state: 'Done',
			};
			return {...jobsPrev, ordered};
		}),
		key => setJobs(jobsPrev => {
			const ordered = [...jobsPrev.ordered];
			ordered[jobsPrev.byKey[key]] = {
				key,
				state: 'Err',
			};
			return {...jobsPrev, ordered};
		}),
	);
	const [msgsView, setMsgs] = useState([]);

	const clicked = async () => {
		const v = await _track(valueErrInMs('a', 2000), 'valueErrInMs');
		setMsgs(msgsPrev => [...msgsPrev, v+msgsPrev.length]);
	};

	return (<div>
		<AsyncList jobs={jobsView.ordered} />
		<button onClick={clicked}>X</button>
		<p>{msgsView.join(' | ')}</p>
	</div>);
};
export default UnusedName;
