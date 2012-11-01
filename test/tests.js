var COOKIE = '__backbone_cookie__'
var KEY = 'key'
var DATA = '{data: "data"}'

var newCookie = function() {
    return new Cookie({ id: COOKIE });
};

test('Dependencies', function() {
    ok(jQuery, 'jQuery');
    ok(_, 'Underscore.js');
    ok(Backbone, 'Backbone.js');
    ok($.cookie, 'jquery.cookie');
    ok(JSON, 'JSON');
});

test('Create', function() {
    $.removeCookie(COOKIE);
    var c = newCookie();
    equal($.removeCookie(COOKIE), false, 'unsaved cookie does not exist');
    c.save()
    ok($.removeCookie(COOKIE), 'saved cookie exists');
});

test('Read', function() {
    $.removeCookie(COOKIE);
    var c = new Cookie({ id: COOKIE, data: DATA });
    c.save();
    var d = newCookie();
    equal(d.get('id'), COOKIE, 'read id');
    equal(d.get('data'), DATA, 'read data');
    c.set('data', 'foo');
    c.fetch();
    equal(newCookie().get('data'), DATA, 'read fetched data');
    $.removeCookie(COOKIE);
});

test('Update', function() {
    $.removeCookie(COOKIE);
    var c = new Cookie({ id: COOKIE, data: DATA });
    c.save();
    c.set('data', 'foo');
    equal(newCookie().get('data'), DATA, 'staged data not written');
    c.save();
    equal(newCookie().get('data'), 'foo', 'saved data written');
    $.removeCookie(COOKIE);
});

test('Destroy', function() {
    $.removeCookie(COOKIE);
    var c = new Cookie({ id: COOKIE, data: DATA });
    c.save();
    c.destroy();
    equal($.removeCookie(COOKIE), false, 'destroyed cookie does not exist');
});


