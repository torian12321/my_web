import fancyFunctions  from './fancyFunctions';
import SmoothScroll  from './SmoothScroll';

export default (function () {
    fancyFunctions();
    new SmoothScroll('a[href*="#"]');
})();