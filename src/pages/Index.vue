<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image class="banner" alt="Example image" src="./coverpic2.jpg" style="width: 100%; height: auto;" />

    <h1>Hello, world!</h1>

    <p>
      Welcome to my website. This is a small foray into who I am as a person and my skillset. 
    </p>

    <p>
      I am a data scientist with two years of experience, with a special interests in machine learning and software development.
    </p>

    <p>
      I love Python, SQL, being creative, and anything where I get to learn new things. I had a blast creating this website.
    </p>

    <p>
      Click the links in the nav bar to access the different parts of the website!
    </p>

    <p>
      The images on this page, my logo, and my favicon were created using the <strong><a href="https://www.bing.com/images/create" target="_blank">Bing Image Generator</a></strong>. Honestly, I have so much fun with those, and even got my family to do it at Christmas and we had a competition to see who could come up with the best one. My mum was the winner: 
    </p>

    <figure>
      <img src="./angelpic.jpg" alt="Angel holding Earth">
      <figcaption>The prompt: "The Earth in all its splendour wrapped in the arms of an angel with a pearlescent background"</figcaption>
  </figure>

  <p>
    I hope that you enjoy my website. Feel free to give me any feedback!
  </p>
    

    
    <br><br>

    <g-image alt="Second image" class="banner" src="./resized3.jpg" style="width: 100%; height: auto;" />

  

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped>

figure {
  text-align: center;
}

img {
  height: 350px;
}

@media only screen and (max-width: 768px) {
  .banner {
    display: none;
  }

 

  img {
    max-width: 100%;
    height: auto;
  }
}

</style>
