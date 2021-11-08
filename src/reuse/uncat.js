const valueInMs = (v, ms) => new Promise((okFn, errFn) => {
	setTimeout(() => okFn(v), ms);
});
const valueErrInMs = (v, ms) => new Promise((okFn, errFn) => {
	setTimeout(() => {
		if (Math.random() < 0.5) {
			okFn(v);
		} else {
			errFn('E:'+v);
		}
	}, ms);
});
const noop = () => {};
const hookedPromise = (p, tag, s, e0, e1) => {
	const key = (new Date()).toISOString() + ' | ' + tag;
	s(key);
	return p.then(
		v => {
			e0(key);
			return v;
		},
		e => {
			e1(key);
			throw e;
		},
	);
};

export {
	valueInMs,
	valueErrInMs,
	noop,
	hookedPromise,
};
