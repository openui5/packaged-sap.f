/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['./SemanticToggleButton'], function(SemanticToggleButton) {
	"use strict";

	/**
	* Constructor for a new <code>FavoriteAction</code>.
	* @param {string} [sId] ID for the new control, generated automatically if no ID is given
	* @param {object} [mSettings] Custom initial settings for the new control
	*
	* @class
	* A semantic-specific button, eligible for the <code>favoriteAction</code> aggregation of the
	* {@link sap.f.semantic.SemanticPage} to be placed in its title.
	*
	* @extends sap.f.semantic.SemanticButton
	*
	* @author SAP SE
	* @version 1.50.3
	*
	* @constructor
	* @public
	* @since 1.46.0
	* @alias sap.f.semantic.FavoriteAction
	* @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	*/
	var FavoriteAction = SemanticToggleButton.extend("sap.f.semantic.FavoriteAction", /** @lends sap.f.semantic.FavoriteAction.prototype */ {
		metadata: {
			library: "sap.f"
		}
	});

	return FavoriteAction;
}, /* bExport= */ true);
