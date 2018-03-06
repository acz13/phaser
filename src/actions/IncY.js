/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * Increase the vertical position of the Game Objects in the array.
 *
 * @function Phaser.Actions.IncY
 * @since 3.0.0
 * 
 * @param {array} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {number} value - The amount to increase the vertical position of the Game Objects by.
 *
 * @return {array} The array of Game Objects that was passed to this Action.
 */
var IncY = function (items, value)
{
    for (var i = 0; i < items.length; i++)
    {
        items[i].y += value;
    }

    return items;
};

module.exports = IncY;
