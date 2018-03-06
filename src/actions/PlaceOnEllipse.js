/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * Place the Game Objects in the array around the perimeter of the given ellipse.
 * 
 * Placement starts from the right of the circle, and proceeds in a counter-
 * clockwise direction. If the `startAngle` parameter is given you can offset
 * where placement begins. The objects will be placed in an arc from
 * `startAngle` (default 0 radians) to `endAngle` (default 2PI radians) with no
 * object placed at the endAngle.
 *
 * @function Phaser.Actions.PlaceOnEllipse
 * @since 3.0.0
 * 
 * @param {array} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {Phaser.Geom.Ellipse} ellipse - The ellipse upon which to place the Game Objects.
 * @param {number} [startAngle=0] - The starting angle in radians (going counterclockwise) of the Game Objects.
 * @param {number} [endAngle=2*Math.PI] - The ending angle in radians (going counterclockwise) of the Game Objects. No Game Object will be placed here.
 *
 * @return {array} The array of Game Objects that was passed to this Action.
 */
var PlaceOnEllipse = function (items, ellipse, startAngle, endAngle)
{
    if (startAngle === undefined) { startAngle = 0; }
    if (endAngle === undefined) { endAngle = 6.28; }

    var angle = startAngle;
    var angleStep = (endAngle - startAngle) / items.length;

    var a = ellipse.width / 2;
    var b = ellipse.height / 2;

    for (var i = 0; i < items.length; i++)
    {
        items[i].x = ellipse.x + a * Math.cos(angle);
        items[i].y = ellipse.y + b * Math.sin(angle);

        angle += angleStep;
    }

    return items;
};

module.exports = PlaceOnEllipse;
