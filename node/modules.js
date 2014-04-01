var customer = require('../node/models/customer');

function newCustomer (req, res) {
	var nameFirst = req.param("nameFirst"),
		nameLast = req.param("nameLast"),
		email = req.param("email"),
		street = req.param("street"),
		city = req.param("city"),
		zip = req.param("zip");

	customer.add(nameFirst, nameLast, email, street, city, zip);

	console.log(nameFirst);
	res.json({'success':true});

}

function returnCustomers (req, res) {
	customer.find({}, '', function(err, data) {
		res.json(data);
	});
}


function customerId (req, res) {
	var id = req.param("id");
	console.log(id);
	customer.findById(id, function(err, data){
		res.json(data);
	});
}

function newEquipment (req, res) {
	var customerid = req.param("customerid"),
		type = req.param("type"),
		make = req.param("make"),
		model = req.param("model"),
		serial = req.param("serial"),
		install = req.param("install"),
		equipmentCounter;

	customer.findById(customerid, function(err, data){
		equipmentCounter = data.equipmentCounter;
		console.dir(data.equipmentCounter);
		updateCustomer();
	});

	console.log("equipmentCounter");
	console.log(equipmentCounter);
	function updateCustomer () {
		var equipment = {
			type: type,
			make: make,
			model: model,
			serial: serial,
			install: install,
			equipmentid: equipmentCounter
		}

		equipmentCounter ++;
		
		console.log("equipmentCounter");
		console.log(equipmentCounter);
		
		var conditions = { _id: customerid },
		    options = { multi: false },
		   	update = { $addToSet: { equipment: equipment }, $set: {equipmentCounter: equipmentCounter}};

		customer.update(conditions, update, options, callback);
	}

	function callback (err, numAffected) {
		if(err) throw err;
		res.end();
	}	

}

function addpm (req, res) {
	console.dir(req.body);
	var customerid = req.body.customerid,
		ticket = req.body.ticket,
		t = new Date();

	ticket.date = t;

	console.dir(ticket);

	var conditions = { _id: customerid },
	    options = { multi: false },
	   	update = { $push: { pm: ticket }};

	customer.update(conditions, update, options, callback);

	function callback (err, numAffected) {
		if(err) throw err;
		res.end();
	}

}


exports.addpm = addpm;
exports.newCustomer = newCustomer;
exports.customerId = customerId;
exports.returnCustomers = returnCustomers;
exports.newEquipment = newEquipment;
