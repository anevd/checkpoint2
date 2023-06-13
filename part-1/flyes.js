class Flight {
	constructor(args = {}) {
		this.ticketList = args.ticketList;
		this.passengers = args.passengers;
		this.luggage = args.luggage;
	}
	boarding(passengers) {
		this.checkingBag(this.ticketControl(passengers));
	}
	checkingBag(passengers) {
		this.luggage = passengers.map((el) => {
			if (el.luggage.length !== 0) return { ticket: el.ticket, luggage: el.luggage };
		});
		this.passengers = passengers.map((el) => {
			el.luggage = [];
			return el;
		});
		return this.passengers;
	}
	ticketControl(passengers) {
		this.passengers = passengers.filter((el) => this.ticketList.includes(el.ticket));
		return this.passengers;
	}
	baggageСlaim() {
		this.passengers = this.passengers.map((elem) => {
			this.luggage.forEach((el) => {
				if (elem.ticket.ticket === el.ticket.ticket) {
					elem.luggage = el.luggage;
				}
			});
			return elem;
		});
		this.luggage = [];
		return this.passengers;
	}
}

module.exports = Flight;
