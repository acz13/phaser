/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var MarchingAnts = require('../geom/rectangle/MarchingAnts');
var RotateLeft = require('../utils/array/RotateLeft');
var RotateRight = require('../utils/array/RotateRight');

/**
 * Place the items in the array around the perimeter of the given rectangle.

 * Placement starts from the top-left of the rectangle, and proceeds in a
 * clockwise direction. If the `shift` parameter is given you can offset where
 * placement begins.
 *
 * @function Phaser.Actions.PlaceOnRectangle
 * @since 3.0.0
 * 
 * @param {array} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {Phaser.Geom.Rectangle} rect - The rectangle upon which to replace the Game Objects.
 * @param {integer} [shift=1] - The offset of the first Game Object placed.
 *
 * @return {array} The array of Game Objects that was passed to this Action.
 */
var PlaceOnRectangle = function (items, rect, shift)
{
    if (shift === undefined) { shift = 0; }

    var points = MarchingAnts(rect, false, items.length);

    if (shift > 0)
    {
        RotateLeft(points, shift);
    }
    else if (shift < 0)
    {
        RotateRight(points, Math.abs(shift));
    }

    for (var i = 0; i < items.length; i++)
    {
        items[i].x = points[i].x;
        items[i].y = points[i].y;
    }

    return items;
};

module.exports = PlaceOnRectangle;
