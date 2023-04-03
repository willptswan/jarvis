// Sheet
exports.sheet = () => {

	return [
		{
			title: "Effects",
			items: [
				{
					title: "Basics",
					values: [
						".hide()",
						".show()",
						".toggle()"
					]
				},
				{
					title: "Custom",
					values: [
						".animate()",
						".clearQueue()",
						".delay()",
						".dequeue()",
						"jQuery.dequeue()",
						"jQuery.fx.interval",
						"jQuery.fx.off",
						".queue()",
						"jQuery.queue()",
						".stop()"
					]
				},
				{
					title: "Fading",
					values: [
						".fadeIn()",
						".fadeOut()",
						".fadeTo()",
						".fadeToggle()"
					]
				},
				{
					title: "Sliding",
					values: [
						".slideDown()",
						".slideToggle()",
						".slideUp()"
					]
				}
			]
		},
		{
			title: "Selectors",
			items: [
				{
					title: "Attributes",
					values: [
						'[name|="value"]',
						'[name*="value"]',
						'[name~="value"]',
						'[name$="value"]',
						'[name="value"]',
						'[name!="value"]',
						'[name^="value"]',
						'[name]',
						'[name="value"][name2="value2"]'
					]
				},
				{
					title: "Forms",
					values: [
						":button",
						":checkbox",
						":checked",
						":disabled",
						":enabled",
						":focus",
						":file",
						":image",
						":input",
						":password",
						":radio",
						":reset",
						":selected",
						":submit",
						":text"
					]
				},
				{
					title: "Basics",
					values: [
						"*",
						".class",
						"element",
						"#id",
						"selector1, selectorN, ..."
					]
				},
				{
					title: "Visibility Filters",
					values: [
						":hidden",
						":visible"
					]
				},
				{
					title: "Basic Filters",
					values: [
						":animated",
						":eq()",
						":even",
						":first",
						":gt()",
						":header",
						":last",
						":lt()",
						":not()",
						":odd"
					]
				},
				{
					title: "Child Filters",
					values: [
						":first-child",
						":last-child",
						":nth-child()",
						":only-child"
					]
				},
				{
					title: "Content Filters",
					values: [
						":contains()",
						":empty",
						":has()",
						":parent"
					]
				},
				{
					title: "Hierarchy",
					values: [
						"parent > child",
						"ancestor descendant",
						"prev + next",
						"prev ~ siblings"
					]
				}
			]
		},
		{
			title: "Attributes CSS",
			items: [
				{
					title: "Attributes",
					values: [
						".attr()",
						".prop()",
						".removeAttr()",
						".removeProp()",
						".val()"
					]
				},
				{
					title: "CSS",
					values: [
						".addClass()",
						".css()",
						"jQuery.cssHooks",
						".hasClass()",
						".removeClass()",
						".toggleClass()"
					]
				},
				{
					title: "Dimensions",
					values: [
						".height()",
						".innerHeight()",
						".innerWidth()",
						".outerHeight()",
						".outerWidth()",
						".width()"
					]
				},
				{
					title: "Offset",
					values: [
						".offset()",
						".offsetParent()",
						".position()",
						".scrollLeft()",
						".scrollTop()"
					]
				},
				{
					title: "Data",
					values: [
						"jQuery.data()",
						".data()",
						"jQuery.hasData()",
						"jQuery.removeData()",
						".removeData()"
					]
				}
			]
		},
		{
			title: "Utilities",
			items: [
				{
					title: "Utilities",
					values: [
						"jQuery.browser",
						"jQuery.contains()",
						"each",
						"jQuery.each()",
						"jQuery.extend()",
						"jQuery.globalEval()",
						"jQuery.grep()",
						"jQuery.inArray()",
						"jQuery.isArray()",
						"jQuery.isEmptyObject()",
						"jQuery.isFunction()",
						"jQuery.isNumeric()",
						"jQuery.isPlainObject()",
						"jQuery.isWindow()",
						"jQuery.isXMLDoc()",
						"jQuery.makeArray()",
						"jQuery.map()",
						"jQuery.merge()",
						"jQuery.noop()",
						"jQuery.now()",
						"jQuery.parseJSON()",
						"jQuery.parseXML()",
						"jQuery.proxy()",
						"jQuery.support",
						"jQuery.trim()",
						"jQuery.type()",
						"jQuery.unique()"
					]
				}
			]
		},
		{
			title: "Manipulation",
			items: [
				{
					title: "Copying",
					values: [
						".clone()"
					]
				},
				{
					title: "DOM Insertion Around",
					values: [
						".wrap()",
						".wrapAll()",
						".wrapInner()"
					]
				},
				{
					title: "DOM Insertion Inside",
					values: [
						".append()",
						".appendTo()",
						".html()",
						".prepend()",
						".prependTo()",
						".text()"
					]
				},
				{
					title: "DOM Insertion Outside",
					values: [
						".after()",
						".before()",
						".insertAfter()",
						".insertBefore()"
					]
				},
				{
					title: "DOM Removal",
					values: [
						".detach()",
						".empty()",
						".remove()",
						".unwrap()"
					]
				},
				{
					title: "DOM Replacement",
					values: [
						".replaceAll()",
						".replaceWith()"
					]
				}
			]
		},
		{
			title: "Core",
			items: [
				{
					title: "jQuery Object",
					values: [
						"jQuery()",
						"jQuery.noConflict()",
						"jQuery.sub()",
						"jQuery.when()"
					]
				},
				{
					title: "DOM Element Methods",
					values: [
						".get()",
						".index()",
						".size()",
						"toArray()"
					]
				},
				{
					title: "Internals",
					values: [
						".jquery",
						".context",
						"jQuery.error",
						".length",
						".pushStack()",
						".selector"
					]
				},
				{
					title: "Deferred Object",
					values: [
						"deferred.always()",
						"deferred.done()",
						"deferred.fail()",
						"deferred.isRejected()",
						"deferred.isResolved()",
						"deferred.notify()",
						"deferred.notifyWith()",
						"deferred.pipe()",
						"deferred.progress()",
						"deferred.promise()",
						"deferred.reject()",
						"deferred.rejectWith()",
						"deferred.resolve()",
						"deferred.resolveWith()",
						"deferred.state()",
						"deferred.then()",
						".promise()"
					]
				},
				{
					title: "Callbacks Object",
					values: [
						"jQuery.Callbacks()",
						"callbacks.add()",
						"callbacks.disable()",
						"callbacks.empty()",
						"callbacks.fire()",
						"callbacks.fired()",
						"callbacks.fireWith()",
						"callbacks.has()",
						"callbacks.lock()",
						"callbacks.locked()",
						"callbacks.remove()"
					]
				}
			]
		},
		{
			title: "Traversing",
			items: [
				{
					title: "Filtering",
					values: [
						".eq()",
						".filter()",
						".first()",
						".has()",
						".is()",
						".last()",
						".map()",
						".not()",
						".slice()"
					]
				},
				{
					title: "Miscellaneous Traversing",
					values: [
						".add()",
						".andSelf()",
						".contents()",
						".end()"
					]
				},
				{
					title: "Tree Traversal",
					values: [
						".children()",
						".closest()",
						".find()",
						".next()",
						".nextAll()",
						".nextUntil()",
						".parent()",
						".parents()",
						".parentsUntil()",
						".prev()",
						".prevAll()",
						".prevUntil()",
						".siblings()"
					]
				}
			]
		},
		{
			title: "AJAX",
			items: [
				{
					title: "Global AJAX Event Handlers",
					values: [
						".ajaxComplete()",
						".ajaxError()",
						".ajaxSend()",
						".ajaxStart()",
						".ajaxStop()",
						".ajaxSuccess()"
					]
				},
				{
					title: "Helper Functions",
					values: [
						"jQuery.param()",
						".serialize()",
						".serializeArray()"
					]
				},
				{
					title: "Low Level Interface",
					values: [
						"jQuery.ajax()",
						"jQuery.ajaxSetup()"
					]
				},
				{
					title: "Shorthand Methods",
					values: [
						"jQuery.get()",
						"jQuery.getJSON()",
						"jQuery.getScript()",
						".load()",
						"jQuery.post()"
					]
				}
			]
		},
		{
			title: "Events",
			items: [
				{
					title: "Event Object",
					values: [
						"event.currentTarget",
						"event.data",
						"event.isDefaultPrevented()",
						"event.isImmediatePropagationStopped()",
						"event.isPropagationStopped()",
						"event.namespace",
						"event.pageX",
						"event.pageY",
						"event.preventDefault()",
						"event.relatedTarget",
						"event.result",
						"event.stopImmediatePropagation()",
						"event.stopPropagation()",
						"event.target",
						"event.timeStamp",
						"event.type",
						"event.which"
					]
				},
				{
					title: "Mouse Events",
					values: [
						".click()",
						".dblclick()",
						".focusin()",
						".focusout()",
						".hover()",
						".mousedown()",
						".mouseenter()",
						".mouseleave()",
						".mousemove()",
						".mouseout()",
						".mouseover()",
						".mouseup()",
						".toggle()"
					]
				},
				{
					title: "Browser Events",
					values: [
						".error()",
						".resize()",
						".scroll()"
					]
				},
				{
					title: "Document Loading",
					values: [
						".holdReady()",
						".load()",
						".ready()",
						".unload()"
					]
				},
				{
					title: "Event Handler Attachment",
					values: [
						".bind()",
						".delegate()",
						".die()",
						".live()",
						".off()",
						".on()",
						".one()",
						".trigger()",
						".triggerHandler()",
						".unbind()",
						".undelegate()"
					]
				},
				{
					title: "Form Events",
					values: [
						".blur()",
						".change()",
						".focus()",
						".select()",
						".submit()"
					]
				},
				{
					title: "Keyboard Events",
					values: [
						".keydown()",
						".keypress()",
						".keyup()"
					]
				}
			]
		}
	];
};
