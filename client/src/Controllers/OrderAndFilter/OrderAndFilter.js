export const A_Z = 'A-Z';
export const Z_A = 'Z-A';
export const MORE_WEIGHT = 'More Weight';
export const LESS_WEIGHT = 'Less Weight';

export const getFilteredDogs = (value, array) => {
	switch (value) {
		case A_Z:
			return array.sort(({name: a}, {name: b}) => {
				if (a > b) {
					return 1;
				}
				if (a < b) {
					return -1;
				}
				return 0;
			});
		case Z_A:
			return array.sort(({name: a}, {name: b}) => {
				if (a > b) {
					return -1;
				}
				if (a < b) {
					return 1;
				}
				return 0;
			});

		case MORE_WEIGHT:
			if (typeof array[0].weight.imperial !== 'number') {
				array.forEach((e) => {
					let metrSplit = e.weight.imperial && e.weight.imperial.split(' ');
					let resp = parseInt(metrSplit && metrSplit[metrSplit.length - 1]);
					e.weight.imperial && (e.weight = resp);
					return e;
				});
			}
			return array.sort(({weight: a}, {weight: b}) => {
				if (a > b) {
					return -1;
				}
				if (a < b) {
					return 1;
				}
				return 0;
			});

		case LESS_WEIGHT:
			if (typeof array[0].weight.imperial !== 'number') {
				array.forEach((e) => {
					let metrSplit = e.weight.imperial && e.weight.imperial.split(' ');
					let resp = parseInt(metrSplit && metrSplit[metrSplit.length - 1]);
					e.weight.imperial && (e.weight = resp);
					return e;
				});
			}
			return array.sort(({weight: a}, {weight: b}) => {
				if (a > b) {
					return 1;
				}
				if (a < b) {
					return -1;
				}
				return 0;
			});

		default:
			return array;
	}
};

export const filterByTemp = (value, array) => {
	return array.filter(({temperament, temperaments}, i) => {
		if (temperament) {
			return temperament.includes(value);
		} else if (temperaments) {
			return temperaments[0].name.includes(value);
		}
		return null;
	});
};

export const filterByOwner = (value, array) => {
	if (value === 'OWN') {
		let ownFilter = array.filter(
			({id}) => typeof id === 'string' && id.includes('-')
		);
		return ownFilter;
	}
	return array.filter(({id}) => {
		return typeof id === 'number';
	});
};
