/// nav system JavaScript 
var htnav = `
  </section>
  <!-- nav bar --->
  <section class="nav-bar">
    <!-- nav tite-->

    <div class="title-logo">
      <img style="    height: 90px;" src="/svg.png"/>
    </div>
    <!--nav mobile -->
    <div onclick="menux()" class="mobile">
      <!--  fafa menu icon -->
      <span><i class="bi bi-list ti"></i>
      </span>
    </div>

    <!-- nav pc system-->
    <div id="top-nav" class="nav-top">
      <!-- all menu button-->
      <!-- home button-->
      <button onclick="home()"><i class="bi bi-house"></i> HOME</button>

      &nbsp;
      <!-- projects button -->
      <button onclick="project()">
        <i class="bi bi-stars"></i>
        Projects
      </button>

      &nbsp;
      <!-- about button -->
      <button onclick="about()">
        <i class="bi bi-person"></i>
        About
      </button>

      &nbsp;
      <!-- blogs button -->
      <button onclick="blogs()">
        <i class="bi bi-rss"></i>
        blogs
      </button>

      &nbsp;
      <!-- skill button -->
      <button onclick="skills()">
        <i class="bi bi-cpu"></i>
        Skills
      </button>
      <!--- close button -->
      <div onclick="cko()" id="close" class="close">
        <!-- fafa close icon -->
        <i class="bi bi-x-lg ti"></i>
      </div>
    </div>


  </section>
`;

var load = `  <!-- load function -->
  <section id="load" class="lod-ff" hidden>
    <!-- side effects data-->
    <!-- items center -->
    <div class="center6">
      <!-- img show documents -->
      <div class="img-logo">
        <!-- tavi top img system tag -->
        <img class="logo-im" src="/logo.png" />
      </div>
      <!-- loading effects-->
      <div class="load-ani">
        <!--pointer--->
        <div class="laod-xl"></div>
      </div>


    </div>
    `;
    
  
  
  
  navi();
 function navi(){
  // blogs/index.html
  document.getElementById("blognav").innerHTML= htnav;
  
 
 }
    document.getElementById("skill").innerHTML= htnav;
