/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/f/semantic/SemanticButton'], function(SemanticButton) {
	"use strict";

	/**
	* Constructor for a new MainAction.
	* @param {string} [sId] ID for the new control, generated automatically if no ID is given
	* @param {object} [mSettings] Custom initial settings for the new control
	*
	* @class
	* Serves as a base class for the {@link sap.f.semantic.TitleMainAction} and {@link sap.f.semantic.FooterMainAction} controls.
	*
	* @extends sap.f.semantic.SemanticButton
	*
	* @author SAP SE
	* @version 1.52.22
	*
	* @constructor
	* @public
	* @since 1.46.0
	* @alias sap.f.semantic.MainAction
	* @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	*/
	var MainAction = SemanticButton.extend("sap.f.semantic.MainAction", /** @lends sap.f.semantic.MainAction.prototype */ {
		metadata: {
			library: "sap.f",
			properties: {

				/**
				* Defines <code>MainAction</code> text
				*/
				text: {type: "string", group: "Misc", defaultValue: null}
			}
		}
	});

	return MainAction;
});
