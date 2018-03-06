/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

//  compare = Object:
//  {
//      scaleX: 0.5,
//      scaleY: 1
//  }

/**
 * Get the first Game Object in the array that matches the given properties.
 * You can optionally specify the index at which to begin comparing.
 *
 * @function Phaser.Actions.GetFirst
 * @since 3.0.0
 * 
 * @param {array} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {object} compare - An object containing the properties and values to match
 * @param {integer} index - An optional start index
 * 
 * @return {object|null} The first Game Object that matches properties of the comparison object. `null` if none are found.
 */
var GetFirst = function (items, compare, index)
{
    for (var i = index; i < items.length; i++)
    {
        var item = items[i];

        var match = true;

        for (var property in compare)
        {
            if (item[property] !== compare[property])
            {
                match = false;
            }
        }

        if (match)
        {
            return item;
        }
    }

    return null;
};

module.exports = GetFirst;
