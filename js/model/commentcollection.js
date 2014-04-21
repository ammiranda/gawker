/**
 * Collection for storing comment models
 * Default sorting methods (comparator method) can be specified here
 *
 * @class CommentCollection
 * @extends Backbone.Collection
 * @author Bodnar Istvan <istvan@gawker.com>
 */
/*global CommentModel */
define(['jquery', 'backbone','underscore', 'commentmodel'], function($, Backbone, _, CommentModel){

var CommentCollection = Backbone.Collection.extend(
/** @lends CommentCollection.prototype */
	{
		/**
		 * Sets the allowed type of contained models
		 * @type Backbone.Model
		 */
		model: CommentModel,
		initialize: function () {
			this.on('edit:clicked', this.enforceOnlyOneIsEdited)
		},
		enforceOnlyOneIsEdited: function(modelBeingEdited) {
 			_.each(
 				_.without(this.where({beingEdited:true}), modelBeingEdited)
   				, function(model) {
     				model.set('beingEdited', false)
   				  }
 			);
		}
	});

	return CommentCollection;
});