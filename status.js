
function validateStatusChange(service, currState) {
	/**
	 * provision: changes the status from created to provisioned.
	 * activate: changes the status from provisioned, hibernating or suspended to active.
	 * suspend: changes the status from active, hibernating or provisioned to suspended.
	 * shelve: changes the status from suspended to shelved.
	 * restore: changes the status from shelved to suspended.
	 * delete: changes the status from suspended, shelved, created, provisioned to deleted.
	 */
	var validStates = {
		'provision': ['created'],
		'activate': ['provisioned', 'hibernating', 'suspended'],
		'suspend': ['active', 'hibernating', 'provisioned'],
		'shelve': ['suspended'],
		'restore': ['shelved'],
		'delete': ['suspended', 'shelved', 'created', 'provisioned'],
	}

	return ~validStates[service].indexOf(currState);
}
var valid = !!validateStatusChange('activate', 'suspended');
console.log(valid);
