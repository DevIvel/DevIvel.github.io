<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
  },
};
</script>

<template>
  <nav
    class="navbar border navbar-expand-xxl position-fixed w-100 p-0"
    data-bs-theme="dark"
  >
    <div
      class="navbar-container container-fluid py-4"
      :class="{ 'primary-bg': isScrolled }"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navItems"
        aria-controls="navItems"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse py-2" id="navItems">
        <ul
          class="navbar-nav me-auto mb-2 text-white mb-lg-0 justify-content-center w-100"
        >
          <li class="nav-item mx-1">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown mx-1" data-bs-theme="light">
            <a
              class="nav-link dropdown-toggle text-white"
              class-active="active"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <router-link class="text-white text-decoration-none" to="/about"
                >About Us</router-link
              >
            </a>
            <ul class="dropdown-menu rounded-0">
              <li>
                <router-link class="dropdown-item my-2" to="/about/objectives"
                  >View, Mission, Quality Policy & Mandate</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item my-2"
                  to="/about/citizen's-charter"
                  >Citizen's Charter - 2022 Edition</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item my-2"
                  to="/about/organizational-structure"
                  >Organizational Structure</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown mx-1" data-bs-theme="light">
            <a
              class="nav-link dropdown-toggle text-white"
              class-active="active"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <router-link
                class="text-white text-decoration-none"
                to="/officials"
                >Municipality Officials</router-link
              >
            </a>
            <ul class="dropdown-menu rounded-0">
              <li>
                <router-link
                  class="dropdown-item my-2"
                  to="/officials/vice-governors"
                  >Vice Governor</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item my-2"
                  to="/officials/board-members"
                  >Board Members</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item my-2"
                  to="/officials/panlungsod-members"
                  >20th Sangguniang Panlungsod Members</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item mx-1">
            <router-link
              class="nav-link text-white"
              to="/calendar-of-activities"
              >Calendar Of Activities</router-link
            >
          </li>
          <li class="nav-item dropdown mx-1" data-bs-theme="light">
            <a
              class="nav-link dropdown-toggle text-white"
              class-active="active"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <router-link
                class="text-white text-decoration-none"
                to="/legislative"
                >Legislative</router-link
              >
            </a>
            <ul class="dropdown-menu rounded-0">
              <li>
                <router-link class="dropdown-item my-2" to="/legislative/elis"
                  >ELIS</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item my-2"
                  to="/legislative/online-tracking"
                  >Online Tracking</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item my-2"
                  to="/legislative/resolution/ordinance-esubmission"
                  >Resolution/Ordinance e-Submission</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link text-white" to="/order-of-business"
              >Order of Business</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link text-white" to="/municipalities"
              >Municipalities</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link class="nav-link text-white" to="/contact-us"
              >Contact Us</router-link
            >
          </li>
          <li class="nav-item mx-1" v-if="authToken">
            <button
              class="border-0 btn btn-sidebar secondary-bg d-flex justify-content-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i class="bi bi-person-fill me-2"></i>
              <p class="text-truncate m-0">
                {{ name }}
              </p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Custom Styles */
.navbar {
  background-color: transparent;
}

.navbar-container {
  transition: 0.3s ease-in-out;
}

.navbar {
  z-index: 3;
}

.navbar-brand img {
  max-height: 50px; /* Adjust as needed */
}

.navbar-nav .nav-link {
  color: #fff; /* Text color */
}

.navbar-nav .nav-link:hover {
  color: var(--primary-color);
  text-decoration: underline;
  text-decoration-color: var(--primary-color);
}

/* Add background color on hover for better contrast */
.navbar-nav .nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
