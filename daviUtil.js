/*
 * daviUtil 1.1 - modulo com algumas funcoes auxiliares.
 * 
 * ESTE REPOSITORIO SERA EXCLUIDO EM BREVE. FAVOR OLHAR O REPO JS_HELPERS
 *
 * https://github.com/inforocha
 *
 */
var dvUtil = (function($) {
	var array = {
					arrayCompare: function(a1, a2) {
					    var length = a2.length;

					    if (a1.length != length) return false;

					    for (var i = 0; i < length; i++) {
					        if (a1[i] !== a2[i]) return false;
					    }
					    return true;
					},

					inArray: function(needle, haystack) {
					    var length = haystack.length;

					    for(var i = 0; i < length; i++) {
					        if(typeof haystack[i] == 'object') {
					            if(this.arrayCompare(haystack[i], needle)) return true;
					        } else {
					            if(haystack[i] == needle) return true;
					        }
					    }
					    return false;
					},

					// @deprecated - ver a funcao array_unique do arquivo array_helper.js do repo js_helpers
					array_unic: function(arr) {
			            var index;
			            for (var i = 0; i < arr.length; i += 1) {
			                while ((index = arr.indexOf(arr[i], i + 1)) != -1) {
			                    arr.splice(index, 1);
			                }
			            }

			            return arr;
			        },
				};

	var dom = {
					tag_a: function(obj) {
						var a = document.createElement('a');
						a = dom.tag_atributes(obj,a);
						a.setAttribute('title', (obj.title) ? obj.title : '');
						a.setAttribute('href', (obj.href) ? obj.href : '#');
						return a;
					},
					tag_p: function(obj) {
						var p = document.createElement('p');
						p = dom.tag_atributes(obj,p);
						return p;
					},
					tag_ul: function(obj) {
						var ul = document.createElement('ul');
						ul = dom.tag_atributes(obj,ul);
						return ul;
					},
					tag_li: function(obj) {
						var li = document.createElement('li');
						li = dom.tag_atributes(obj,li);
						return li;
					},
					tag_i: function(obj) {
						var i = document.createElement('i');
						i = dom.tag_atributes(obj,i);
						return i;
					},
					tag_atributes: function(obj,element) {
						if(obj.prependElement) {
							element.appendChild(obj.prependElement);
						}
						element.innerHTML = (obj.html) ? obj.html : '';
						element.className = (obj.className) ? obj.className : '';
						element.id = (obj.id) ? obj.id : '';
						if(obj.apendElement) {
							element.appendChild(obj.apendElement);
						}
						return element;
					},
					/**
					* gera um link que az o download do arquivo na mesma pagina e depois exclui o elemento
					*/
					createDownload: function(path) {
						var url  = window.location.href; 
						var absolute = url.split("/");
						absolute = absolute[0]+'//'+absolute[2]+'/'+absolute[3];
				        var path = absolute+path;

				        var link = document.createElement('a');
						link.href = path;
						link.download = '';
						document.body.appendChild(link);
						link.click();
						link.remove;
					}
				};

	return {
		// ARRAY
		inArray: array.inArray,
		arrayCompare: array.arrayCompare,
		array_unic:array_unic,
		// DOM
		tag_a: dom.tag_a,
		tag_p: dom.tag_p,
		tag_i: dom.tag_i,
		tag_ul: dom.tag_ul,
		tag_li: dom.tag_li,
		createDownload: dom.createDownload
	}
})(jQuery)
