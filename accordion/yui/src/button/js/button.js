// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_accordion
 * @copyright  EDUdigital
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_accordion-button
 */


/**
 * Atto text editor accordion plugin.
 *
 * @namespace M.atto_accordion
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

var COMPONENTNAME = 'atto_accordion';
var OPTIONCONTROL = 'accordion_option';
var LOGNAME = 'atto_accordion';

var CSS = {
        INPUTSUBMIT: 'atto_media_urlentrysubmit',
        INPUTCANCEL: 'atto_media_urlentrycancel',
        OPTIONCONTROL: 'optioncontrol'
    },
    SELECTORS = {
        OPTIONCONTROL: '.optioncontrol'
    };
	
Y.namespace('M.atto_accordion').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {

  
	/**
     * Initialize the button
     *
     * @method Initializer
     */
    initializer: function() {
        // If we don't have the capability to view then give up.
        if (this.get('disabled')){
            return;
        }

        var icons = ['accordion'];

        Y.Array.each(icons, function(theicon) {
            // Add the accordion icon/buttons
            this.addButton({
                icon: 'ed/' + theicon,
                iconComponent: 'atto_accordion',
                buttonName: theicon,
                callback: this._doInsert,
                callbackArgs: theicon
            });
        }, this);

    },

 
    /**
     * Inserts the accordeon code onto the page
     * @method _getDialogueContent
     * @private
     */
    _doInsert : function(e){
        e.preventDefault();

        this.editor.focus();

		this.get('host').insertContentAtFocusPoint(this.get('accordioncode'));
        this.markUpdated();

    }
}, { ATTRS: {
		disabled: {
			value: false
		},

		usercontextid: {
			value: null
		},

		accordioncode: {
			value: ''
		}
	}
});

