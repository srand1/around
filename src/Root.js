import {useState} from 'react';
import AsyncList from './AsyncList';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
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
	const { user, isAuthenticated, isLoading } = useAuth0();

	const clicked = async () => {
		const v = await _track(valueErrInMs('a', 2000), 'valueErrInMs');
		setMsgs(msgsPrev => [...msgsPrev, v+msgsPrev.length]);
	};

	return (<div>
		<AsyncList jobs={jobsView.ordered} />
		<button onClick={clicked}>X</button>
		<LoginButton />
		{isLoading?'loading':(!isAuthenticated?'unAuth':user.email)}
		<LogoutButton />
		<p>{msgsView.join(' | ')}</p>
	</div>);
};
export default UnusedName;
