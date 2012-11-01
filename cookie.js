(function(ns) {
    ns.Cookie = Backbone.Model.extend({
        initialize: function() {
            this.fetch();
        },

        fetch: function() {
            this.set(JSON.parse($.cookie(this.id)));
        },

        save: function(attributes) {
            this.set(attributes);
            $.cookie(this.id, JSON.stringify(this.toJSON()));
        },

        destroy: function(options) {
            $.removeCookie(this.id);
        },

        isEmpty: function() {
            return (_.size(this.attributes) > 1); // ignore 'id'
        }
    });
}(namespace = window || {}));
