<!-- <script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';  

  const options = {
      rewind: true,
      fixedWidth : '400px',
      fixedHeight: '532px',
      gap: '1rem',
      width: '50vw',
      type: 'loop', 
      overflow: 'hidden',
      arrows: false,
      pagination: false,
      autoplay: false,
      easing: 'ease-in-out',
      flickPower: 400,
      flickMaxPages: 1,
      updateOnMove: true,
      padding: '2rem',
      perMove: 2,
      breakpoints: {
        1200: {
          width: '100vw',
        },
        550: {
          width: '100vw',
          fixedWidth : '300px',
          fixedHeight: '60vh'
        }
      }
  }
</script>

<h1 class="project-header">Projects</h1>
<h2 class="project-subheader">Swipe or drag below to see a small selection of projects I've worked on.</h2>

<div class="wrapper">
    <Splide options={ options } aria-label="My Projects Images" >
      <SplideSlide>
        <a href="https://www.tomlegg.com" class="link-settings">
          <img src='https://picsum.photos/400/600?random=1' aria-hidden="true" alt="random picture 1" class="image-settings"/>
          <div class="slide-content">
            <h1 class="slide-header">Project 1</h1>
            <p class="slide-description">This is a test. I want to tell you a story about how i am conducting a test for the sake of understanding how it behaves within its container</p>
          </div>
        </a>
      </SplideSlide>
      <SplideSlide>
      <a href="https://www.tomlegg.com" class="link-settings">
        <img src='https://picsum.photos/400/600?random=2' aria-hidden="true" alt="Image 2" class="image-settings"/>
        <div class="slide-content">
          <h1 class="slide-header">Project 2</h1>
          <p class="slide-description">Voluptas adipisci facere accusantium eius autem eius et unde. Qui dolore porro soluta tempora eveniet inventore. Corrupti quia alias ipsum. Quia delectus quam aut. Voluptas qui eos est expedita. Culpa alias tempore qui accusamus eum voluptate eligendi omnis dolor.</p>
        </div>
      </a>
      </SplideSlide>
      <SplideSlide>
      <a href="https://www.tomlegg.com" class="link-settings">
        <img src='https://picsum.photos/400/600?random=3' aria-hidden="true" alt="Image 1" class="image-settings"/>
        <div class="slide-content">
          <h1 class="slide-header">Project 3</h1>
          <p class="slide-description">Est quia alias cumque aut hic. Ipsa explicabo modi.</p>
        </div>
      </a>  
      </SplideSlide>  
      <SplideSlide>
      <a href="https://www.tomlegg.com" class="link-settings">
        <img src='https://picsum.photos/400/600?random=4' aria-hidden="true" alt="Image 2" class="image-settings"/>
        <div class="slide-content">
          <h1 class="slide-header">Project 4</h1>
          <p class="slide-description">Quod consequatur dolor ullam optio. Est accusantium numquam doloribus consequatur perspiciatis ut sit. Cumque dolor error odio aut nisi. Nemo sint esse est sit in qui dignissimos eos. Voluptas nemo quidem qui repudiandae et culpa eum facilis atque.</p>
        </div>
      </a>  
      </SplideSlide>
      <SplideSlide>
        <a href="https://www.tomlegg.com" class="link-settings">
          <img src='https://picsum.photos/400/600?random=5' aria-hidden="true" alt="Image 1" class="image-settings"/>
        <div class="slide-content">
          <h1 class="slide-header" >Project 5</h1> 
          <p class="slide-description">Qui quo omnis et. Perferendis explicabo veritatis ex eum. Illum assumenda esse dolor asperiores tempora voluptatibus laudantium. Blanditiis aut assumenda et iure impedit. Voluptatum sed aliquid quos ex officiis velit inventore et.</p>
        </div>
      </a>  
      </SplideSlide>
      <SplideSlide>
      <a href="https://www.tomlegg.com" class="link-settings">
        <img src='https://picsum.photos/400/600?random=6' aria-hidden="true" alt="Image 2" class="image-settings"/>
        <div class="slide-content">
          <h1 class="slide-header">Project 6</h1>
          <p class="slide-description">Et vel deserunt in est. Non molestiae magnam consequuntur. Et modi esse suscipit dicta reiciendis numquam nulla earum fuga. Soluta sit qui vero tempora quis.</p>
        </div>
      </a>  
      </SplideSlide>
    </Splide>
</div> 


<style>
  .project-header {
    font-size: 30px; 
    font-weight: 1000;
  }
  .project-subheader {
    font-size: 15px; 
    color: #6b6c7b
  }
  /* .slide {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    border-radius: 20px; 
    overflow: hidden;
  } */
  .wrapper {
    position: absolute;
    right: 0;
    top: 4rem;
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    align-items: center;
  }
  .link-settings {
    height: auto; 
    width: auto;
  }
  .image-settings {
    border-radius: 20px; 
    height: 100%; 
    width: 100%;
    filter: brightness(70%);  
    transition: ease-in-out 1s;
    box-shadow: 5px 5px 10px rgba(46,48,75,.15);
  }
  .image-settings:hover {
    filter: brightness(90%);
    transition: ease-in-out 1s;
  }
  .slide-content {
    position: absolute; 
    bottom: 10%; 
    left: 2rem; 
    right: 2rem;
    display: flex; 
    flex-direction: column; 
    gap: 1rem;
  }
  .slide-header {
    color: white;
    margin: 0;
  }
  .slide-description {
    color: white; 
    margin: 0;
  }
</style> -->
