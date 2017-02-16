/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/f/semantic/SemanticButton'], function(SemanticButton) {
	"use strict";

	/**
	* Constructor for a new <code>DiscussInJamAction</code>.
	* @param {string} [sId] ID for the new control, generated automatically if no ID is given
	* @param {object} [mSettings] Custom initial settings for the new control
	*
	* @class
	* A <code>DiscussInJamAction</code> button has default semantic-specific properties
	* and it`s placed in the <code>SemanticPage</code> share menu within the title.
	* The <code>DiscussInJamAction</code> is eligible for aggregation content of a {@link sap.f.semantic.SemanticPage}.
	*
	* @extends <code>sap.f.semantic.SemanticButton</code>
	*
	* @author SAP SE
	* @version 1.46.1
	*
	* @constructor
	* @public
	* @since 1.46.0
	* @alias sap.f.semantic.DiscussInJamAction
	* @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	*/
	var DiscussInJamAction = SemanticButton.extend("sap.f.semantic.DiscussInJamAction", /** @lends sap.f.semantic.DiscussInJamAction.prototype */ {
		metadata: {
			library: "sap.f"
		}
	});

	return DiscussInJamAction;
}, /* bExport= */ true);