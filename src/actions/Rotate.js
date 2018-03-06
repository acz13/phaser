/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * Increase the rotation on each of the Game Objects in the array.
 * 
 * You can successively increase the rotational speed of the later Game Objects
 * by specifying a value for `step`.
 *
 * @function Phaser.Actions.Rotate
 * @since 3.0.0
 * 
 * @param {array} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {number} value - The base value to add to the rotation.
 * @param {number} [step=0] - Additional amount to increase the rotation by for every next Game Object in the array.
 *
 * @return {array} The array of Game Objects that was passed to this Action.
 */
var Rotate = function (items, value, step)
{
    if (step === undefined) { step = 0; }

    for (var i = 0; i < items.length; i++)
    {
        items[i].rotation += value + (i * step);
    }

    return items;
};

module.exports = Rotate;
