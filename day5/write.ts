/**
 * 请计算出时钟的时针和分针的角度（两个角度的较小者，四舍五入）。时间以HH:mm的格式传入。
 * @param {string} time
 * @returns {number}
 */
function angle(time: string): number {
    // your code here
    const [h, m] = time.split(':').map((item: string) => +item);
    const hAngle = (h * 30 + m / 2) % 360;
    const mAngle = m * 6;
    let ang = Math.abs(hAngle - mAngle);
    if (ang > 180) ang = 360 - ang;
    return Math.round(ang);
}
