/*
 * daviUtil 1.0 - modulo com algumas funcoes auxiliares.
 *
 * https://github.com/inforocha
 *
 */
var daviUtil = (function() {
	var array = {
					arrayCompare: function (a1, a2) {
					    var length = a2.length;

					    if (a1.length != length) return false;

					    for (var i = 0; i < length; i++) {
					        if (a1[i] !== a2[i]) return false;
					    }
					    return true;
					},

					inArray: function (needle, haystack) {
					    var length = haystack.length;

					    for(var i = 0; i < length; i++) {
					        if(typeof haystack[i] == 'object') {
					            if(this.arrayCompare(haystack[i], needle)) return true;
					        } else {
					            if(haystack[i] == needle) return true;
					        }
					    }
					    return false;
					}
				}
	return {
		inArray: array.inArray,
		arrayCompare: array.arrayCompare
	}
})()