<script>

  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let color = '#fd8e8e';
  let active = false;
  
  function changeColor(newColor) {
    color = newColor
    dispatch('colorChange', {
      color: newColor
    });
  }


  
    const handleClick = () => {
        active = !active
  }
    </script>
          <nav id="nav" class="AppReveal AppNavigation" class:is-active={active} style="transform: skew(0deg) translateX(0px) translateZ(0px); opacity: 1;">
              <div class="AppNavigation-container">
                  <header class="AppNavigation-header">
                      <button type="button" class="ButtonIcon h-3 color-theme" on:click={handleClick}>
                          <span class="ButtonIcon-icon"  role="button">
                              <img src="https://d33wubrfki0l68.cloudfront.net/5cecbe72659a7457773224755390a196abd80a2a/2ea46/icons/icon-hamburger.png" data-src="https://d33wubrfki0l68.cloudfront.net/5cecbe72659a7457773224755390a196abd80a2a/2ea46/icons/icon-hamburger.png" alt="Open navigation" width="60" height="60" class="ImageLazy lazyloaded">
                            </span>
                            <span class="ButtonIcon-label">Burger menu</span>
                      </button>
                  </header>
                  <div class="AppNavigation-content">
                      <div class="AppNavigation-inner">
                          <ul class="AppNavigation-list">
                              <a href="#about">
                                  <li class="AppNavigation-item">
                                      <h4 class="AppNavigation-title">About</h4> 
                                      <p class="AppNavigation-description"> Delicately tender with a slice of cheese.</p>
                                  </li>
                              </a>
                              <a href="#experience">
                                  <li class="AppNavigation-item">
                                      <h4 class="AppNavigation-title">Clients</h4> 
                                      <p class="AppNavigation-description"> Our great selection from the best in town.</p>
                                  </li>
                              </a>
                              <a href="#references">
                                  <li class="AppNavigation-item">
                                      <h4 class="AppNavigation-title">References</h4>
                                      <p class="AppNavigation-description">Hear what our happy customers say.</p>
                                  </li>
                              </a>
                              <a href="#projects">
                                  <li class="AppNavigation-item">
                                      <h4 class="AppNavigation-title">Projects</h4> 
                                      <p class="AppNavigation-description">Served on a bed of frontend tech.</p>
                                  </li>
                              </a>
                              <a href="#contact">
                                  <li class="AppNavigation-item">
                                      <h4 class="AppNavigation-title">Contact</h4> 
                                      <p class="AppNavigation-description">A superb choice to finish the day.</p>
                                  </li>
                              </a>
                          </ul> 
                          <ul class="ThemeSwitcher AppNavigation-switcher">
                              <li class="ThemeSwitcher-item"><button type="button" class="ThemeSwitcher-swatch is-red" on:click={() => changeColor("#fd8e8e")}>Red</button></li>
                              <li class="ThemeSwitcher-item"><button type="button" class="ThemeSwitcher-swatch is-green" on:click={() => changeColor("#8efdb0")}>Green</button></li>
                              <li class="ThemeSwitcher-item"><button type="button" class="ThemeSwitcher-swatch is-amber" on:click={() => changeColor("#fde58e")}>Amber</button></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
      
  <style>
  
  
  a {
    color: black;
    text-decoration: none;
  }
  h4 {
    font-size: 18px;
    line-height: 1.4;
    font-weight: 500;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 16px;
    margin-bottom: 30px;
    color: #6b6c7b;
  }
  ul {
    list-style: none;
    padding-left: 0;
    padding-bottom: 1rem;
  }
  
  

.AppReveal {
    opacity: 0
    }
    
    
.AppNavigation {
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 30;
    background-color: transparent;
    pointer-events: none
}
    
.AppNavigation.is-active {
    pointer-events: auto
}
    
.AppNavigation-container {
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(46,48,75,.15);
    display: flex;
    flex-direction: column;
    max-width: calc(100vw - 30px);
    max-height: calc(100vh - 30px);
    padding: 0;
    margin: 0;
    opacity: 0;
    background-color: hsla(0,0%,100%,0);
    transition: opacity .25s cubic-bezier(.4,0,.2,1)
}

@supports((-webkit-clip-path: circle(0% at center)) or (clip-path:circle(0% at center))) {
.AppNavigation-container {
    opacity:1;
    -webkit-clip-path: circle(40px at 55px 55px);
    clip-path: circle(40px at 55px 55px);
    transition: background-color .25s cubic-bezier(.4,0,.2,1) .5s,-webkit-clip-path .5s cubic-bezier(.4,0,.2,1);
    transition: background-color .25s cubic-bezier(.4,0,.2,1) .5s,clip-path .5s cubic-bezier(.4,0,.2,1);
    transition: background-color .25s cubic-bezier(.4,0,.2,1) .5s,clip-path .5s cubic-bezier(.4,0,.2,1),-webkit-clip-path .5s cubic-bezier(.4,0,.2,1)
}
}

.AppNavigation.is-active .AppNavigation-container {
    opacity: 1;
    background-color: #fff;
    transition-delay: 0s
}

@supports((-webkit-clip-path: circle(0% at center)) or (clip-path:circle(0% at center))) {
.AppNavigation.is-active .AppNavigation-container {
    -webkit-clip-path:circle(100% at center);
    clip-path: circle(100% at center)
}
}

.AppNavigation-header {
    padding: 15px;
    pointer-events: auto
}

@media only screen and (min-width: 768px) {
.AppNavigation-header {
    padding:15px;
}
}

.AppNavigation-content {
    flex: 1;
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch
}

.AppNavigation-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 15px 30px 30px;
}

@media only screen and (min-width: 768px) {
.AppNavigation-inner {
    padding:0 15px 15px;
}
}

.AppNavigation-list,.AppNavigation-switcher {
    width: 100%;
    margin: 0;
    opacity: 0;
    transform: translate3d(0,5px,0);
    transition: opacity .25s cubic-bezier(.4,0,.2,1),transform .25s cubic-bezier(.4,0,.2,1)
}

.AppNavigation.is-active .AppNavigation-list,.AppNavigation.is-active .AppNavigation-switcher {
    opacity: 1;
    transform: translateZ(0)
}

.AppNavigation.is-active .AppNavigation-list {
    transition-delay: .25s
}

.AppNavigation.is-active .AppNavigation-switcher {
    transition-delay: .5s
}

.AppNavigation-item {
    width: 100%
}

.AppNavigation-description,.AppNavigation-title {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.AppNavigation-title {
    color: #2e304b
}

.AppNavigation-description {
    font-size: 14px;
    margin-bottom: 20px;
    color: #6b6c7b
}

@media only screen and (min-width: 768px) {
.AppNavigation-description {
    font-size:16px;
    margin-bottom: 30px
}
}

.ButtonIcon {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}


.ButtonIcon-icon {
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transition: background-color .25s cubic-bezier(.4,0,.2,1)
}

.ButtonIcon.color-theme .ButtonIcon-icon {
    background-color: #fd8e8e;
}

/* .ButtonIcon.color-red .ButtonIcon-icon {
    background-color: #fd8e8e
}

.ButtonIcon.color-green .ButtonIcon-icon {
    background-color: #8efdb0
}

.ButtonIcon.color-amber .ButtonIcon-icon {
    background-color: #fde58e
} */

@media only screen and (min-width: 768px) {
.ButtonIcon-icon {
    width:60px;
    height: 60px
}
}


.ThemeSwitcher {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 0 auto
}

.ThemeSwitcher-item {
    padding: 0 10px 0 0;
    margin: 0
}

.ThemeSwitcher-item:last-child {
    padding: 0
}

.ThemeSwitcher-swatch {
    width: 20px;
    height: 20px;
    text-indent: -9999em;
    margin: 0;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    background-image: none;
    border-radius: 50%;
    color: inherit;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap
}

.ThemeSwitcher-swatch:active {
    filter: brightness(50%);  
    transition: ease-in-out 0.25s
}

.ThemeSwitcher-swatch.is-red {
    background-color: #fd8e8e
}

.ThemeSwitcher-swatch.is-green {
    background-color: #8efdb0
}

.ThemeSwitcher-swatch.is-amber {
    background-color: #fde58e
}

img {
    width: 50px;
    height: 50px
}

@media only screen and (min-width: 768px) {
    .ButtonIcon-icon {
        width:60px;
        height: 60px
    }

    img {
    width: 60px;
    height: 60px
}
}

.ButtonIcon-label {
    font-weight: 500;
    text-align: left;
    margin: 0 0 -4px 15px;
    color: #2e304b
}

@media only screen and (min-width: 768px) {
    .ButtonIcon-label {
        margin-left:30px
    }
}

.ButtonIcon.h-3 .ButtonIcon-label {
    font-size: 24px;
    line-height: 1.4
}
   
</style>