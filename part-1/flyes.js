class Flight {
	constructor(args) {
		this.args = args;
	}
	boarding() {}
	checkingBag(passengers) {
		let filteredArr = [];
		this.luggage = [];
		passengers.forEach((el) => {
			if (el.luggage) filteredArr.push(el);
			let luggageObj = {};
			luggageObj.ticket = el.ticket;
			luggageObj.luggage = el.luggage;
			this.luggage.push(luggageObj);
		});
		return filteredArr;
	}
	ticketControl(passengers) {
		let filteredArr = [];
		passengers.forEach((el) => {
			args.ticketList.forEach((elem) => {
				if (elem === el.ticket) {
					filteredArr.push(el);
				}
			});
		});
		return filteredArr;
	}
	baggageСlaim() {}
}

module.exports = Flight;
