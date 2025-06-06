import kaboom from "kaboom";
kaboom()

/** Configure your Game Setup Here **/

// Game with and height are the resolution used in
// your game code. Actual canvas size is determined
// by the scale multiplier.
const GAME_WIDTH = 320;
const GAME_HEIGHT = 232;
const GAME_SCALE = 1;

const BACKGROUND_COLOR = [0, 0, 0, 1];
const ROOT_ELEMENT_ID = "kaboom";
const DISABLE_ANTIALIAS = false;

const ENABLE_DEBUG = true;

/*************************************************************************/
export default kaboom({
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  scale: GAME_SCALE,
  background: BACKGROUND_COLOR,
  root: document.getElementById(ROOT_ELEMENT_ID) || undefined,
  global: false,
  stretch: true,           // allow stretching to fit screen
  letterbox: true,         // keep aspect ratio with black bars if needed
  debug: ENABLE_DEBUG,
  crisp: DISABLE_ANTIALIAS, // now actually disabling anti-aliasing
});