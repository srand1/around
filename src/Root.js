import {useState} from 'react';
import AsyncList from './AsyncList';

const UnusedName = () => {
	const [jobs, setJobs] = useState([]);

	return (<div>
		<AsyncList jobs={jobs} />
		<button onClick={() => {
			setJobs(j => [...j, j.length]);
		}}>X</button>
	</div>);
};
export default UnusedName;
