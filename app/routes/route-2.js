import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.$.get("https://jsonplaceholder.typicode.com/posts");
	}
});
