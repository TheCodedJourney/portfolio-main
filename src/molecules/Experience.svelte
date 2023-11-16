<script lang="ts">
  import Boeing from "../lib/images/boeing-logo.png";
  import Google from "../lib/images/google-logo.png";
  import Sykes from "../lib/images/sykes-logo.png";
  import TomLegg from "../lib/images/TomLeggLogo.png";
  import Northcoders from "../lib/images/northcoders-logo.png";
  import Ems from "../lib/images/ems-logo.png";
  import Flux from "../lib/images/flux.png";
  import LJMU from "../lib/images/Liverpool-john-moores-university.png";
  import Harvard from "../lib/images/hardvard-business-school.png";
  export let sevenHundred: boolean;
</script>

<ul class="experience-list" class:min-height-binding={!sevenHundred}>
  <li class="experience-item">
    <div class="company-name-image">
      <img src={Boeing} alt="Boeing logo" />
    </div>
    <div class="experience-info">
      <h4 class="experience-name">Boeing</h4>
      <p class="experience-role">
        Market Analyst at boeing defence, supporting competitive analysis
        supporting competitive public contract tender applications
      </p>
    </div>
  </li>
  <li class="experience-item">
    <div class="company-name-image">
      <img src={Google} alt="Google logo" />
    </div>
    <div class="experience-info">
      <h4 class="experience-name">Google</h4>
      <p class="experience-role">
        Associate Account Strategist - enabling SME's growth through a
        consultative digital marketing strategy on behalf of the Google Ads Team
        in Dublin
      </p>
    </div>
  </li>
  <li class="experience-item">
    <div class="company-name-image">
      <img src={Ems} alt="EMS logo" />
    </div>
    <div class="experience-info">
      <h4 class="experience-name">Event Marketing Solutions</h4>
      <p class="experience-role">Business Development Executive</p>
    </div>
  </li>
  <li class="experience-item">
    <div class="company-name-image">
      <img src={Sykes} alt="Sykes Holiday Cottages logo" />
    </div>
    <div class="experience-info">
      <h4 class="experience-name">Sykes Holiday Cottages</h4>
      <p class="experience-role">Software Developer</p>
    </div>
  </li>
  <li class="experience-item">
    <div class="company-name-image">
      <img src={Northcoders} alt="Northcoders logo" />
    </div>
    <div class="experience-info">
      <h4 class="experience-name">Northcoders</h4>
      <p class="experience-role">
        Trainee on the software development bootcamp.
      </p>
    </div>
  </li>
  <li class="experience-item">
    <div class="company-name-image">
      <img src={TomLegg} alt="Tom Legg logo" style="width: 25%;" />
    </div>
    <div class="experience-info">
      <h4 class="experience-name">Freelance Marketing Consultant</h4>
      <p class="experience-role">
        Conducted freelance marketing consultancy services during university to
        help enable growth for SME's in the north west.
      </p>
    </div>
  </li>
  <li class="experience-item">
    <div class="company-name-image">
      <img src={Harvard} alt="Harvard Business School logo" />
    </div>
    <div class="experience-info">
      <h4 class="experience-name">Harvard Business School</h4>
      <p class="experience-role">
        This is my experience at Harvard Business School
      </p>
    </div>
  </li>
  <li class="experience-item">
    <div class="company-name-image">
      <img src={LJMU} alt="Liverpool John Moores logo" />
    </div>
    <div class="experience-info">
      <h4 class="experience-name">Liverpool John Moores</h4>
      <p class="experience-role">
        This is my experience at Liverpool John Moores University
      </p>
    </div>
  </li>
</ul>

<style>
  .experience-list {
    display: grid;
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    margin: 0;
    grid-gap: 2px;
  }

  .min-height-binding {
    min-height: 800px;
  }
  .experience-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
  }
  .experience-item:hover {
    background-color: white;
    transform: translate3d(0, 5px, 0);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.0625s,
      opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .experience-item:hover .experience-info {
    opacity: 1;
    transition-delay: 0s;
  }
  .experience-item:hover .experience-name {
    opacity: 1;
    transform: translateZ(0);
    transition-delay: 0.25s;
  }
  .experience-item:hover .experience-role {
    opacity: 1;
    transform: translateZ(0);
    transition-delay: 0.25s;
  }
  .experience-info {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    padding: 1.875rem;
    opacity: 0;
    background-color: #fff;
    pointer-events: none;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      visibility 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0.25s;
  }
  .experience-name {
    width: 100%;
    max-width: 320px;
    opacity: 0;
    transform: translate3d(0, 5px, 0);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.0625s,
      opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .experience-role {
    width: 100%;
    max-width: 320px;
    opacity: 0;
    transform: translate3d(0, 5px, 0);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.0625s,
      opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  img {
    width: 35%;
  }
  h4 {
    margin-top: 0;
  }
  .company-name-image {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  h4 + p {
    margin-top: -25px;
  }
</style>
