import {useState} from 'react';
import AsyncList from './AsyncList';
import {valueInMs} from './reuse/uncat';

const UnusedName = () => {
	const [jobs, setJobs] = useState([]);

	const clicked = async () => {
		setJobs(j => [...j, j.length]);
		const v = await valueInMs('a', 2000);
		setJobs(j => [...j, v+j.length]);
	};

	return (<div>
		<AsyncList jobs={jobs} />
		<button onClick={clicked}>X</button>
	</div>);
};
export default UnusedName;
