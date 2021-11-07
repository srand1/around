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
const hookedPromise = (p, s, e0, e1) => {
	s();
	return p.then(
		v => {
			e0();
			return v;
		},
		e => {
			e1();
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
