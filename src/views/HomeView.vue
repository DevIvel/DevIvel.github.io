<template>
  <!-- Navigation Bar -->
  <nav
    class="navbar navbar-expand-xxl position-fixed w-100"
    data-bs-theme="dark"
    :class="{ 'navbar-scrolled': scrolled }"
  >
    <div class="navbar-container text-header container-fluid py-4">
      <a class="navbar-brand" href="#"
        ><img src="../assets/logo.png" alt="" srcset=""
      /></a>
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }">
        <ul
          class="navbar-nav me-auto mb-2 text-white mb-lg-0 justify-content-end w-100"
        >
          <li class="nav-item me-4">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link class="nav-link text-white" to="/">About</router-link>
          </li>
          <li class="nav-item me-4">
            <router-link class="nav-link text-white" to="/"
              >Projects</router-link
            >
          </li>
          <li class="nav-item me-4">
            <router-link class="nav-link text-white" to="/"
              >Contact Me</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Particles Bg -->
  <div class="particles-container" style="z-index: -1">
    <Particles></Particles>
  </div>

  <!-- Hero Section -->
  <div
    class="hero-section text-center vh-100 d-flex justify-content-center align-items-center"
  >
    <div class="blobs"></div>
    <div class="container-md hero text-white">
      <h1 class="text-header">Hello There!</h1>
      <h4>
        This is Levi Laudico and I'm a
        <span class="text-highlight" id="textwriter">{{ displayText }}</span>
      </h4>
    </div>
  </div>

  <!-- About Section -->
  <div
    class="about-section d-flex flex-wrap align-items-center justify-content-center mb-5"
  >
    <div class="py-5">
      <div class="container-md">
        <div class="row">
          <div class="col-lg-6">
            <img
              src="../assets/about.png"
              alt=""
              srcset=""
              style="width: 100%; max-width: 500px"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="section-header text-header">
              Know <span class="text-highlight">Me</span>
            </h1>
            <hr
              class="black-blue-gradient"
              style="height: 4px; max-width: 306px"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              corporis deserunt harum nobis sequi incidunt, neque ad enim
              praesentium? Enim repellendus et sequi itaque voluptatibus
              asperiores dignissimos labore. Delectus recusandae iure voluptatem
              perferendis maxime blanditiis ab soluta numquam voluptates ut
              beatae expedita dicta ex ipsa necessitatibus illo, ea, quo
              excepturi, placeat quis consequatur officia reprehenderit quidem!
              Porro accusamus commodi explicabo nam cumque quaerat autem beatae,
              labore, veniam aspernatur minus, voluptates consequuntur pariatur
              eum numquam ratione! Doloribus ea expedita laboriosam soluta iure,
              odit itaque? Ipsa itaque illo aperiam nesciunt necessitatibus
              magnam mollitia, voluptatibus quidem, aut porro nulla perferendis
              numquam odio quos?
            </p>
            <div class="icon-group d-flex pt-4">
              <div
                class="skill-icon first-i-bg d-flex align-items-center justify-content-center me-4"
                style="height: 48px; width: 48px"
              >
                <img src="../assets/icons/Figma.png" alt="" />
              </div>
              <div
                class="skill-icon second-i-bg d-flex align-items-center justify-content-center me-4"
                style="height: 48px; width: 48px"
              >
                <img src="../assets/icons/CSS.png" alt="" />
              </div>
              <div
                class="skill-icon first-i-bg d-flex align-items-center justify-content-center me-4"
                style="height: 48px; width: 48px"
              >
                <img src="../assets/icons/HTML.png" alt="" />
              </div>
              <div
                class="skill-icon second-i-bg d-flex align-items-center justify-content-center me-4"
                style="height: 48px; width: 48px"
              >
                <img src="../assets/icons/Photoshop.png" alt="" />
              </div>
              <div
                class="skill-icon first-i-bg d-flex align-items-center justify-content-center me-4"
                style="height: 48px; width: 48px"
              >
                <img src="../assets/icons/React.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Project -->
  <div class="blobs"></div>
  <div class="container-xxl text-white text-center pt-5">
    <div class="row justify-content-center text-center mb-3">
      <h1 class="section-header text-header">
        Personal <span class="text-highlight">Projects</span>
      </h1>
      <hr class="white-blue-gradient" style="height: 4px; max-width: 306px" />
    </div>

    <div class="row">
      <div v-for="(card, index) in cardsContent" :key="index" class="col-md-4">
        <div class="cards pt-3">
          <figure class="c4-izmir c4-image-zoom-in c4-border-cc-3">
            <img
              src="../assets/thumbnails/Behance Thumbnail CR8IVE.png"
              alt="Sample Image"
            />
            <figcaption>
              <div class="c4-rotate-up-left">
                <h3>{{ card.cardTitle }}</h3>
              </div>
              <div class="c4-rotate-down-left">
                <p>{{ card.cardDescription }}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Particles from "@/components/Particles.vue";
</script>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
      scrolled: false,
      texts: ["Frontend Developer", "UI/UX Designer", "Graphics Designer"],
      currentText: "",
      index: 0,
      isDeleting: false,
      typingSpeed: 100,
      cardsContent: [
        {
          cardTitle: "CR8IVE GEOMETRY",
          cardDescription: "Web Design",
          cardImage: "../assets/thumbnails/Behance Thumbnail CR8IVE.png",
        },
        {
          cardTitle: "Electronic Shop",
          cardDescription: "Web Design",
          cardImage: "../assets/thumbnails/Behance Thumbnail CR8IVE.png",
        },
        {
          cardTitle: "Mobile App",
          cardDescription: "Mobile Design",
          cardImage: "../assets/thumbnails/Behance Thumbnail CR8IVE.png",
        },
        {
          cardTitle: "Cover Photos",
          cardDescription: "Graphics Design",
          cardImage: "../assets/thumbnails/Behance Thumbnail CR8IVE.png",
        },
        {
          cardTitle: "Cover Photos",
          cardDescription: "Graphics Design",
          cardImage: "../assets/thumbnails/Behance Thumbnail CR8IVE.png",
        },
        {
          cardTitle: "Cover Photos",
          cardDescription: "Graphics Design",
          cardImage: "../assets/thumbnails/Behance Thumbnail CR8IVE.png",
        },
      ],
    };
  },
  methods: {
    typeText() {
      const currentWord = this.texts[this.index];
      if (this.isDeleting) {
        // Deleting text
        this.currentText = currentWord.substring(
          0,
          this.currentText.length - 1
        );
      } else {
        // Typing text
        this.currentText = currentWord.substring(
          0,
          this.currentText.length + 1
        );
      }

      // Check if word fully typed or deleted
      if (!this.isDeleting && this.currentText === currentWord) {
        this.isDeleting = true;
        this.typingSpeed = 100; // Pause at end of word
      } else if (this.isDeleting && this.currentText === "") {
        this.isDeleting = false;
        this.index = (this.index + 1) % this.texts.length;
        this.typingSpeed = 50;
      }

      // Continue typing/deleting
      setTimeout(() => this.typeText(), this.typingSpeed);
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    handleScroll() {
      if (window.scrollY > 10) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.typeText();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    displayText() {
      return this.currentText;
    },
  },
};
</script>

<style scoped>
.navbar {
  transition: background-color 0.3s ease-in-out;
  position: fixed;
  z-index: 9999;
}

.navbar.navbar-scrolled {
  border: 1px solid rgba(78, 78, 78, 0.28);
  background: rgba(74, 74, 74, 0.1);
  backdrop-filter: blur(100px);
}

nav {
  padding: 0 10rem;
}

.blobs {
  background-image: url("../assets/blobpurple.png");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  width: 100%;
  height: 2500px;
  position: absolute;
}

.hero h1 {
  font-size: 128px;
}

.hero h4 {
  font-size: 24px;
}

.hero span {
  font-weight: bold;
}

.section-header {
  font-size: 64px;
}

.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.typewriter {
  font-family: monospace;
  font-size: 24px;
  border-right: 2px solid #333;
  padding-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #333;
  }
}

.about-section {
  background-color: #fff;
  height: fit-content;
}

.cards {
  width: 100%;
}

.c4-izmir {
  --border-width: 8px;
  --primary-color: #7303c0;
  --secondary-color: #ec38bc;
}

hr {
  opacity: 100%;
}
</style>
