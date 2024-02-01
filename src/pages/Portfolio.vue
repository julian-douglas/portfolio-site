<template>
  <Layout>
    <h1>Portfolio</h1>
    <h2>Projects</h2>
    <p>See my latest Github projects below. Click in each box to be taken to the Github repository.</p>

    <div v-show="loading">Loading...</div>
    <div v-show="!loading">
      <div class="grid-container">
        <a v-for="repo in repos.slice(0, 3)" :key="repo.id" :href="repo.html_url" target="_blank" class="grid-item">
          <h2>{{ repo.name }}</h2>
          <p>{{ repo.description }}</p>
        </a>
      </div>
    </div>

    <div class="grid-container">
      <a v-for="repo in repos.slice(3, 6)" :key="repo.id" :href="repo.html_url" target="_blank" class="grid-item">
        <h2>{{ repo.name }}</h2>
        <p>{{ repo.description }}</p>
      </a>
    </div>




  </Layout>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 20px 0px;
}

.grid-item {
  border: 2px solid var(--font-color);
  border-radius: 2.5rem;
  padding: 20px;
  width: 90%;
  height: auto;
  min-height: 250px;
  /* Adjust the height as needed */
  margin-bottom: 20px;
  /* Horizontal gap between boxes */
}

@media only screen and (min-width: 768px) {
  .grid-item:hover {
    background-color: var(--font-color);
    color: var(--background-color);
  }
}

li {
  margin-bottom: 7px;
}

@media only screen and (max-width: 768px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px 0px;
  }

  .grid-item {
    max-width: 100%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      loading: false,
      repos: [
        {
          id: 1,
          name: 'Image Captioner',
          description: 'A web app that automatically generates a caption for an uploaded image.',
          html_url: 'https://github.com/julian-douglas/Image-Captioner',
        },
        {
          id: 2,
          name: 'Weather Scraping',
          description: 'A Beautiful Soup alternative to an API to scrape weather data and analyse it.',
          html_url: 'https://github.com/julian-douglas/Web-Scraping-for-Weather-Data',
        },
        {
          id: 3,
          name: 'House Prices Regression',
          description: 'My submission for the house prices competition on Kaggle.',
          html_url: 'https://github.com/julian-douglas/House-Prices-Regression',
        },
        {
          id: 4,
          name: 'Connect 4',
          description: 'Connect 4 game implemented in Java.',
          html_url: 'https://github.com/julian-douglas/Connect-4',
        },
        {
          id: 5,
          name: 'Python Database API',
          description: 'Python API for controlling a database using SQL.',
          html_url: 'https://github.com/julian-douglas/Python-Database-API',
        },
        {
          id: 6,
          name: 'Essay Hunt',
          description: 'Video game for Software Engineering module.',
          html_url: 'https://github.com/julian-douglas/Essay-Hunt',
        },

      ],
    };
  },
  metaInfo: {
    title: 'Portfolio',
  },
};
</script>
