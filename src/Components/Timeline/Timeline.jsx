import React, { useEffect, useState } from 'react';
import './Timeline.css'; // Ensure the CSS file path is correct

const Timeline = ()=>{
return(
<div class='body'>
<div class="timeline">
  <div id="overlay"></div>
  <div class="event">
    <div class="event__date">
      01
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">01</a>
      01
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      second
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">second</a>
      second
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link</a>
      Test
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      04
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link 2</a>
      Test 2
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      05
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link</a>
      Test
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link 2</a>
      Test 2
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      ??
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link 2</a>
      Test 2
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link 2</a>
      Test 2
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link</a>
      Test
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link 2</a>
      Test 2
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link</a>
      Test
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link 2</a>
      Test 2
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link</a>
      Test
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link 2</a>
      Test 2
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link</a>
      Test
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link 2</a>
      Test 2
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link</a>
      Test
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link 2</a>
      Test 2
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      15. Februar 2017
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">Test Link</a>
      Test
    </div>
  </div>
  <div class="event">
    <div class="event__date">
      last
    </div>
    <div class="event__timeline">
      <div class="event__dot"></div>
      <div class="event__line"></div>
    </div>
    <div class="event__description">
      <a class="event__link" href="#">last</a>
      last
    </div>
  </div>
</div>
</div>
)
}

export default Timeline;
