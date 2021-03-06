import {ImageView, Image, Color, ImageViewLoadEvent} from 'tabris';

let widget: ImageView = new ImageView;

// Properties
let image: Image;
let scaleMode: 'auto' | 'fill' | 'fit' | 'none' | 'stretch';
let tintColor: Color;

image = widget.image;
scaleMode = widget.scaleMode;
tintColor = widget.tintColor;

widget.image = image;
widget.scaleMode = scaleMode;
widget.tintColor = tintColor;

// Events
let target: ImageView = widget;
let timeStamp: number = 0;
let type: string = 'foo';
let error: boolean = false;

let imageViewLoadEvent: ImageViewLoadEvent = {target, timeStamp, type, error};

widget.on({
  load: (event: ImageViewLoadEvent) => {}
});
