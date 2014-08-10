var classes = require('classes')
  , css = require('css')
  , Emitter = require('emitter')
  , events = require('events')
  , modal = require('modal');

/**
 * Expose Zoom
 */
module.exports = Zoom;

/**
 * Initialize new Zoom instance
 * @param {Element} element to make zoomable (must be an image)
 * @return {Zoom}
 */
function Zoom (el) {
  if (!(this instanceof Zoom)) return new Zoom(el);
  classes(el).add('zoomable');
  this._margin = 0;
  this.thumb = el;
  this.events = events(this.thumb, this);
  this.bind();

  return this;
}

/**
 * Mixin emitter
 */
Emitter(Zoom.prototype);

/**
 * Sets margin around modal
 * @param  {Number} amount in px
 * @return {Zoom}
 */
Zoom.prototype.margin = function (num) {
  this._margin = num;
  return this;
}