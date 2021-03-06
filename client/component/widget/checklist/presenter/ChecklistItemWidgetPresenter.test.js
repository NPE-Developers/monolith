/**
 * Created by Francesco Bazzerla on 27/04/2017
 * Version 1.0.4 - Completed
 */


import {ChecklistItemWidgetPresenter} from './ChecklistItemWidgetPresenter'
import {ChecklistItemWidget} from '../view/ChecklistItemWidget'
import { sinon } from 'meteor/practicalmeteor:sinon';


describe('ChecklistItemWidgetPresenter', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ChecklistItemWidgetPresenter('test',false,4); //NOSONAR
            }
        ).to.not.throw();
    });
    it('[TU23] Check that the checkbox can be instantiated with "not checked" status', function () {
        const cWidget = new ChecklistItemWidget('test');
        const input = cWidget._presenter.renderView().childNodes[0].childNodes[0];
        const box = cWidget._presenter.renderView().childNodes[0].childNodes[1];
        const symbol = cWidget._presenter.renderView().childNodes[0].childNodes[1].childNodes[0];
        const check= cWidget._presenter._options.isChecked();
        expect(check).to.be.eq(false);
        expect(input.getAttribute('checked')).to.be.eq(null);
        expect(box.getAttribute('class')).to.be.eq('spanNotCheckBef spanEmptyBef');
        expect(symbol.innerHTML).to.be.eq('');
        expect(box.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
        expect(symbol.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
    });
    it('[TU24] Check that the checkbox can be instantiated with "checked" status', function () {
        const cWidget = new ChecklistItemWidget('test',true);
        const input = cWidget._presenter.renderView().childNodes[0].childNodes[0];
        const box = cWidget._presenter.renderView().childNodes[0].childNodes[1];
        const symbol = cWidget._presenter.renderView().childNodes[0].childNodes[1].childNodes[0];
        const check= cWidget._presenter._options.isChecked();
        expect(check).to.be.eq(true);
        expect(input.getAttribute('checked')).to.be.eq('checked');
        expect(box.getAttribute('class')).to.be.eq('spanCheckBef spanEmptyBef');
        expect(symbol.innerHTML).to.be.eq('✓');
    });
    it('[TU25] Check that the checkbox status change correctly', function () {
        const cWidget = new ChecklistItemWidget('test');
        const cWidget2 = new ChecklistItemWidget('test2',true);
        cWidget._presenter.setChecked(true);
        cWidget2._presenter.setChecked(false);
        const input = cWidget._presenter.renderView().childNodes[0].childNodes[0];
        const box = cWidget._presenter.renderView().childNodes[0].childNodes[1];
        const symbol = cWidget._presenter.renderView().childNodes[0].childNodes[1].childNodes[0];
        const input2 = cWidget2._presenter.renderView().childNodes[0].childNodes[0];
        const box2 = cWidget2._presenter.renderView().childNodes[0].childNodes[1];
        const symbol2 = cWidget2._presenter.renderView().childNodes[0].childNodes[1].childNodes[0];
        const check= cWidget._presenter._options.isChecked();
        const check2 = cWidget2._presenter._options.isChecked();
        expect(check).to.be.eq(true);
        expect(check2).to.be.eq(false);
        expect(input.getAttribute('checked')).to.be.eq('checked');
        expect(box.getAttribute('class')).to.be.eq('spanCheckBef spanEmptyBef');
        expect(symbol.innerHTML).to.be.eq('✓');
        expect(box.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
        expect(symbol.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
        expect(input2.getAttribute('checked')).to.be.eq(null);
        expect(box2.getAttribute('class')).to.be.eq('spanNotCheckBef spanEmptyBef');
        expect(symbol2.innerHTML).to.be.eq('');
    });
    it('[TU26] Check that the checkbox check-mark is represented by ✓', function () {
        const cWidget = new ChecklistItemWidget('test',true);
        const symbol = cWidget._presenter.renderView().childNodes[0].childNodes[1].childNodes[0];
        expect(symbol.innerHTML).to.be.eq('✓');
    });
    it('[TU27] Check that the checkbox check-mark is represented by ✗ or another symbol', function () {
        const cWidget = new ChecklistItemWidget('test',true);
        cWidget._presenter.setSelectionCharacter('&#x2717;');
        const symbolLogic = cWidget._presenter._style.getSelectionCharacter();
        const symbol = cWidget._presenter.renderView().childNodes[0].childNodes[1].childNodes[0];
        expect(symbol.innerHTML).to.be.eq('✗');
        expect(symbolLogic).to.be.eq('&#x2717;');
    });
    it('[TU28] Check that the type checkbox color of the selected items are displayed with the color set', function () {
        const cWidget = new ChecklistItemWidget('test',true);
        cWidget._presenter.setUseSelectionMark(false);
        cWidget._presenter.setSelectionColor('#00f');
        const symbolLogic = cWidget._presenter._style.getSelectionCharacter();
        const box = cWidget._presenter.renderView().childNodes[0].childNodes[1];
        const symbol = cWidget._presenter.renderView().childNodes[0].childNodes[1].childNodes[0];
        expect(box.style.backgroundColor).to.be.eq('rgb(0, 0, 255)');
        expect(symbol.style.backgroundColor).to.be.eq('rgb(0, 0, 255)');
        expect(symbol.innerHTML).to.be.eq('');
        expect(symbolLogic).to.be.eq('');
    });
    it('Check that is called the action when long pres an item [TU29]', function () {
        const cWidget = new ChecklistItemWidget('test',true);
        const mockAction = sinon.spy();
        cWidget.setOnLongClick(mockAction);
        const label = cWidget.renderView().childNodes[0];
        label.onmousedown();
        const start = (new Date()).getTime();
        while ((new Date().getTime() - start) <= 1000);
        label.onmouseup();
        expect(mockAction.called).to.be.ok;
    });
    it('Check the long pressure threshold [TU30]', function () {
        const cWidget = new ChecklistItemWidget('test',true);
        const mockAction = sinon.spy();
        cWidget.setOnLongClick(mockAction);
        const label = cWidget.renderView().childNodes[0];

        label.onmousedown();
        let start = (new Date()).getTime();
        while ((new Date().getTime() - start) <= 100);
        label.onmouseup();
        expect(mockAction.called).to.not.be.ok;

        label.onmousedown();
        start = (new Date()).getTime();
        while ((new Date().getTime() - start) <= 1000);
        label.onmouseup();
        expect(mockAction.called).to.be.ok;
    });
});
