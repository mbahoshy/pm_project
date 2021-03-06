pm.templates.gasPM = "\
	<form id='pmform'>\
	<div><label>Make:</label><input type='text' name='make' value='<%= make %>'></div>\
	<div><label>Model:</label><input type='text' name='model' value='<%= model %>'></div>\
	<div><label>Serial:</label><input type='text' name='serial' value='<%= serial %>'></div>\
	<div><label>Pressure Switches:</label>\
		<span>\
		<div class='styled-check'>\
			<input type='checkbox' value='true' id='press1' name='pressureswitch' />\
			<label for='press1'><div class='styled-check-inner'></div></label>\
		</div>\
		</span>\
	<div><label>Fan Relay:</label>\
		<div class='styled-check'>\
			<input type='checkbox' value='true' id='flame1' name='fanrelay' />\
			<label for='flame1'><div class='styled-check-inner'></div></label>\
		</div>\
	<div><label>Clean Flame Sensor:</label>\
		<div class='styled-check'>\
			<input type='checkbox' value='true' id='cap1' name='flamesensor' />\
			<label for='cap1'><div class='styled-check-inner'></div></label>\
		</div>\
	<div><label>Hot Surface Ignitor (cold ohms):</label><input type='text' name='hsi' value=''></div>\
	<div><label>Inspect Blower Motor:</label>\
		<div class='styled-check'>\
			<input type='checkbox' value='true' id='motor1' name='blowercheck' />\
			<label for='motor1'><div class='styled-check-inner'></div></label>\
		</div>\
	<div><label>Blower Amps:</label><input type='text' name='bloweramps'></div>\
	<div><label><i>Capacitor</i></label>\
		<p><label>Rated:</label><input type='text' name='caprated1'></p>\
		<p><label>Actual:</label><input type='text' name='capact1'></p>\
	</div>\
	<div><label>Inspect Heat Exchanger:</label>\
		<div class='styled-check'>\
			<input type='checkbox' value='true' id='heat1' name='heatex' />\
			<label for='heat1'><div class='styled-check-inner'></div></label>\
		</div>\
	</div>\
	<div><label><i>Gas Pressures</i></label>\
		<p><label>High:</label><input type='text' name='highgas' value=''></p>\
		<p><label>Low:</label><input type='text' name='lowgas' value=''></p>\
	</div>\
	<input id='submit_pm' type='submit' value='Submit'>\
	</form>\
";

pm.templates.electricPM = "\
	<form>\
	<div>Make: <input type='text' name='make' value='<%= make %>'></div>\
	<div>Model: <input type='text' name='model' value='<%= model %>'></div>\
	<div>Serial: <input type='text' name='serial' value='<%= serial %>'></div>\
	<div>Inspect Blower Motor: <input type='checkbox' name='blowercheck' value=''></div>\
	<div>Blower Amps: <input type='text' name='bloweramps'></div>\
	<div>Capacitor:\
		<p>Rated: <input type='text' name='caprated1'></p>\
		<p>Actual: <input type='text' name='capact1'></p>\
	</div>\
	<div>Strips Heat:\
		<p>#1: <input type='text' name='sh1' value=''></p>\
		<p>#2: <input type='text' name='sh2' value=''></p>\
		<p>#3: <input type='text' name='sh3' value=''></p>\
		<p>#4: <input type='text' name='sh4' value=''></p>\
	</div>\
	<input id='submit_pm' type='submit' value='Submit'>\
	</form>\
";

pm.templates.acPM = "\
	<form>\
	<div>Make: <input type='text' name='make' value='<%= make %>'></div>\
	<div>Model: <input type='text' name='model' value='<%= model %>'></div>\
	<div>Serial: <input type='text' name='serial' value='<%= serial %>'></div>\
	<div>Clean Indoor Coil: <input type='checkbox' name='cleanind' value=''></div>\
	<div>Clean Outdoor Coil: <input type='checkbox' name='cleanout' value=''></div>\
	<div>Compressor amp draw: <input type='text' name='compamp'></div>\
	<div>Fan amp draw: <input type='text' name='fanamp'></div>\
	<div>Capacitor:\
		<p>Rated: <input type='text' name='caprated1'> / <input type='text' name='caprated2'></p>\
		<p>Actual: <input type='text' name='capact1'> / <input type='text' name='capact2'></p>\
	</div>\
	<div>Refrigerant : <input type='radio' name='refrigerant' value='r22'>R-22<br>\
						<input type='radio' name='refrigerant' value='r410'>R-410a<br>\
	</div>\
	<div>Pressures:\
		<p>Liquid (discharge): <input type='text' name='liquid'></p>\
		<p>Vapor (suction): <input type='text' name='vapor'></p>\
	</div>\
	<div>Condensor Temp Rise: <input type='text' name='contd'></div>\
	<div>Indoor delta T: <input type='text' name='deltat'></div>\
	<input id='submit_pm' type='submit' value='Submit'>\
	</form>\
";

pm.templates.heatpumpPM = "\
	<form>\
	<div>Make: <input type='text' name='make' value='<%= make %>'></div>\
	<div>Model: <input type='text' name='model' value='<%= model %>'></div>\
	<div>Serial: <input type='text' name='serial' value='<%= serial %>'></div>\
	<div>Clean Indoor Coil: <input type='checkbox' name='cleanind' value=''></div>\
	<div>Clean Outdoor Coil: <input type='checkbox' name='cleanout' value=''></div>\
	<div>Compressor amp draw: <input type='text' name='compamp'></div>\
	<div>Fan amp draw: <input type='text' name='fanamp'></div>\
	<div>Capacitor:\
		<p>Rated: <input type='text' name='caprated1'> / <input type='text' name='caprated2'></p>\
		<p>Actual: <input type='text' name='capact1'> / <input type='text' name='capact2'></p>\
	</div>\
	<div>Refrigerant : <input type='radio' name='refrigerant' value='r22'>R-22<br>\
						<input type='radio' name='refrigerant' value='r410'>R-410a<br>\
	</div>\
	<div>Pressures:\
		<p>Liquid (discharge): <input type='text' name='liquid'></p>\
		<p>Vapor (suction): <input type='text' name='vapor'></p>\
	</div>\
	<div>Condensor Temp Drop: <input type='text' name='contd'></div>\
	<div>Indoor delta T: <input type='text' name='deltat'></div>\
	<input id='submit_pm' type='submit' value='Submit'>\
	</form>\
";

pm.templates.airhandlerPM = "\
	<form>\
	<div>Make: <input type='text' name='make' value='<%= make %>'></div>\
	<div>Model: <input type='text' name='model' value='<%= model %>'></div>\
	<div>Serial: <input type='text' name='serial' value='<%= serial %>'></div>\
	<div>Inspect Blower Motor: <input type='checkbox' name='blowercheck' value=''></div>\
	<div>Blower Amps: <input type='text' name='bloweramps'></div>\
	<div>Capacitor:\
		<p>Rated: <input type='text' name='caprated1'></p>\
		<p>Actual: <input type='text' name='capact1'></p>\
	</div>\
	<input id='submit_pm' type='submit' value='Submit'>\
	</form>\
";

pm.templates.splitPM = "\
	<form>\
	<div>Make: <input type='text' name='make' value='<%= make %>'></div>\
	<div>Model: <input type='text' name='model' value='<%= model %>'></div>\
	<div>Serial: <input type='text' name='serial' value='<%= serial %>'></div>\
	<div>Inspect Blower Motor: <input type='checkbox' name='heatex' value=''></div>\
	<div>Strips Heat:\
		<p>#1: <input type='text' name='sh1' value=''></p>\
		<p>#2: <input type='text' name='sh2' value=''></p>\
		<p>#3: <input type='text' name='sh3' value=''></p>\
		<p>#4: <input type='text' name='sh4' value=''></p>\
	</div>\
	<input id='submit_pm' type='submit' value='Submit'>\
	</form>\
";