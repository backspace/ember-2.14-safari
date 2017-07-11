import Ember from 'ember';

export default Ember.Controller.extend({

	firstTitle: Ember.computed("model", function(){
		if (this.get("model.length")) {
			return this.get("model").objectAt(0).title;
		}

		return null;
	})
});
