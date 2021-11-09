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
	const _track = (tag, p) => hookedPromise(
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
	const { isLoading, isAuthenticated, user, getAccessTokenSilently } = useAuth0();

	const clicked = async () => {
		const v = await _track('valueErrInMs', valueErrInMs('a', 2000));
		setMsgs(msgsPrev => [...msgsPrev, v+msgsPrev.length]);
	};
	const req = async () => {
		const domain = "dev-9vl71yeh.us.auth0.com";
		const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
		const accessToken = await _track('getAT', getAccessTokenSilently({
			audience: `https://${domain}/api/v2/`,
			scope: "read:current_user",
		}));
		const metadataResponse = await _track('f$user', fetch(userDetailsByIdUrl, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}));
		const { user_metadata } = await _track('j$user', metadataResponse.json());
		console.log(user_metadata);
	};

	return (<div>
		<AsyncList jobs={jobsView.ordered} />
		<button onClick={clicked}>X</button>
		<LoginButton />
		{isLoading?'loading':(!isAuthenticated?'unAuth':(
			<button onClick={req}>{user.email}</button>
		))}
		<LogoutButton />
		<p>{msgsView.join(' | ')}</p>
	</div>);
};
export default UnusedName;
