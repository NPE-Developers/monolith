/**
 * class ChecklistWidgetView
 * The view for ChecklistWidget.
 *
 * Created by Francesco Bazzerla on 21/03/17.
 * Version 1.0.7 - Completed
*/

import {BaseWidget} from '../BaseWidget'

export class ChecklistItemWidgetView extends BaseWidget{

    /**
     * Public constructor
     */
    constructor(){
        super();
        if (this.constructor ===  ChecklistItemWidgetView) {
            throw new TypeError("Cannot construct ChecklistWidgetView instances directly");
        }
    }

    /**
     * @method
     * It allows you to remove an item from a checklist
     */
    removeOption(){} //NOSONAR

    /**
     * @method
     * It returns the _id of the checklist
     * @return {string}: The id of the checklist
     */
    getId(){} //NOSONAR

    /**
     * @method
     * It allows you to modify the text of an item
     * @param text {string}: The text that will be replaced to the existing one
     */
    setText(text){} //NOSONAR

    /**
     * @method
     * Sets the visualization of tick with a character or with a color.
     * @param useMark {boolean}: Check-mark will be shown by a symbol if this field is true; if this field is false the check-mark
     * wiil be shown by a color
     */
    setUseSelectionMark(useMark){} //NOSONAR

    /**
     * @method
     * Sets the color of checkbox when it's not selected.
     * @param color {string}: It represents the color that will be assigned to checkbox when it's not selected.
     */
    setNotSelectedColor(color){}//NOSONAR

    /**
     * @method
     * Sets the color of checkmarks.
     * @param color {String}: It represents the color of the check-mark
     */
    setSelectionColor(color) {} //NOSONAR

    /**
     * @method
     * _notSelectedColor getter
     * @return {string}: The string represents the color stored into _notSelectedColor
     */
    getNotSelectedColor(){}

    /**
     * @method
     * Sets the symbol of checkmarks.
     * @param character {String}: The symbol to represent the selection
     */
    setSelectionCharacter(character){} //NOSONAR

    /**
     * @method
     * It allows you to set the function that will be called when a longClick on a checklist item is performed
     * @param func {function}
     */
    setOnLongClick(func){} //NOSONAR

    /**
     * @method
     * _textColor getter
     * @return {string}: The string represents the color stored into _textColor
     */
    getTextColor(){}

    /**
     * @method
     * Sets the color of text
     * @param color {String}: It represents the color of text
     */
    setTextColor(color){}

    /**
     * @method
     * It allows you to set the function that will be called when a normal click on a checklist item is performed
     * @param func {function}
     */
    setOnClick(func){} //NOSONAR

    /**
     * @method
     * It allows you to check an item on the checklist or to remove a tick from it.
     * @param checked {boolean}: A boolean value that represents the state of the item: checked or not
     */
    setChecked(checked){} //NOSONAR

    /**
     * @method
     * _isChecked getter
     * @return {boolean}: The boolean status of the option
     */
    isChecked(){}

    /**
     * @method
     * _eventClick getter
     * @return {Object}: The ChecklistUpdate object associated to the checklist
     */
    getChecklistUpdate(){}

    /**
     * @method
     * It returns the name of the itemwidget
     * @return  {String}
     */
    getText(){}
}
