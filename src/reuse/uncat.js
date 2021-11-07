const valueInMs = (v, ms) => new Promise((okFn, errFn) => {
	setTimeout(() => okFn(v), ms);
});

export {valueInMs};
