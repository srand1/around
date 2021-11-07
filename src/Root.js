import {useState} from 'react';
import AsyncList from './AsyncList';
import {valueErrInMs, hookedPromise} from './reuse/uncat';

const UnusedName = () => {
	const [jobs, setJobs] = useState([]);

	const clicked = async () => {
		const v = await hookedPromise(
			valueErrInMs('a', 2000),
			() => setJobs(j => [...j, 'v|'+j.length]),
			() => setJobs(j => [...j, 'e0|'+j.length]),
			() => setJobs(j => [...j, 'e1|'+j.length]),
		);
		setJobs(j => [...j, v+j.length]);
	};

	return (<div>
		<AsyncList jobs={jobs} />
		<button onClick={clicked}>X</button>
	</div>);
};
export default UnusedName;
