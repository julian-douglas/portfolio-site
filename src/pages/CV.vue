<template>
  <Layout>
    <h1>CV</h1>
    <div class="cv-text">
      <p>Please find my CV below.</p>
      <object :data="pdfUrl" type="application/pdf" width="100%" height="600px">
      </object>
      <p>If you are unable to view the PDF, you can download it <a class="downloadlink" :href="pdfUrl"
          download="Julian_Douglas_CV.pdf">here</a>.
      </p>
    </div>

    <div class="cv-button">
      <a :href="pdfUrl" download="Julian_Douglas_CV.pdf">Download</a>
    </div>




  </Layout>
</template>

<script>
export default {
  data() {
    return {
      pdfUrl: '/Julian_CV.pdf',
    };
  },
  metaInfo: {
    title: 'CV'
  }
}
</script>

<style>
.cv-button {
  display: none;
}

.downloadlink {
  text-decoration: underline;
}

@media only screen and (max-width: 768px) {
  .cv-text {
    display: none;
  }

  .cv-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    background-color: var(--font-color);
    border: 2px solid var(--font-color);
    border-radius: 2.5rem;
    height: 50px;
  }

  .cv-button a {
    color: var(--background-color);
    text-decoration: none;
  }
}
</style>
