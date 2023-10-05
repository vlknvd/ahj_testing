import Widget from './Widget';
import systemPayCard from './systemPayCard';
import AddEventWidget from './AddEventWidget';

const container = document.querySelector('.container');
const widget = new Widget(container);
widget.redrawWidget();
const eventWidget = new AddEventWidget(widget, systemPayCard);
eventWidget.addEvent();
