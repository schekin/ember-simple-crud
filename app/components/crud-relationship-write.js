import Ember from 'ember';
import layout from '../templates/components/crud-relationship-write';

export default Ember.Component.extend({

    actions: {
        change( selected ) {
            this.sendAction( 'onchange', selected );
        }
    },

    layout,

    kind: null,

    label: null,

    modelName: null,

    selectedRelationship: null,

    componentExists: Ember.computed(
        'modelName',
        function() {
            const modelName = this.get( 'modelName' );
            return Ember.getOwner( this ).hasRegistration( 'component:' + modelName + '-write' );
        }
    ),

    isMultiple: Ember.computed(
        'kind',
        function() {
            return this.get( 'kind' ) === 'hasMany';
        }
    ),

    models: Ember.computed(
        'modelName',
        function() {
            const store = this.get( 'targetObject.store' );
            return store.findAll( this.get( 'modelName' ) );
        }
    )
});