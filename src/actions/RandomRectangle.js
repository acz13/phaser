/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var Random = require('../geom/rectangle/Random');

/**
 * Randomly place the Game Objects in the array inside the given rectangle.
 *
 * @function Phaser.Actions.RandomRectangle
 * @since 3.0.0
 * 
 * @param {array} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {Phaser.Geom.Rectangle} rect - The rectangle to place the Game Objects inside.
 *
 * @return {array} The array of Game Objects that was passed to this Action.
 */
var RandomRectangle = function (items, rect)
{
    for (var i = 0; i < items.length; i++)
    {
        Random(rect, items[i]);
    }

    return items;
};

module.exports = RandomRectangle;
