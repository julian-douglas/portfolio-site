<template>
  <Layout>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="about-container">
      <div class="text-container">
        <h1>Hi, I'm Julian</h1>
        <h2>Data Scientist</h2>
        <p>I am a results-driven coder with an inclination towards software development, in my current role and also as a
          hobby.</p>
      </div>
      <div class="image-container">
        <img src="./facepic-modified.png" alt="My Image">
      </div>
    </div>
    <div class="gap">
      <br><br><br>
    </div>
    <h2>About Me</h2>
    <p>I am excited for you to view some of my work. I am passionate about using technology to improve our health and
      environment, and seek to do this every day in my career.</p>
    <p>But first, a little bit about me. I'm 27 years old and was born in York, UK. I am a keen traveller and am always
      thinking about my next trip! In my free time I like to read novels, play video games (anything FromSoftware or
      Zelda), cook, play piano, see friends and family, and go hiking. I am also part of a hiking group and love going on
      excursions with them.</p>
    <p>I am excited for you to view some of my work. I am passionate about using technology to improve our health and
      environment, and seek to do this every day in my career.</p>
    <p>My skill set spans data science, full-stack development, and team leadership to solve complex business problems. My
      key skills include:</p>
    <ul>
      <li>Languages: Python, SQL, JavaScript, TypeScript, HTML, and CSS.</li>
      <li>Libraries and Frameworks: Experienced in utilizing NumPy, Pandas, Matplotlib, Seaborn, Jupyter Notebook, Scikit,
        PyTorch, BeautifulSoup, React.js, Node.js, Flask, FastAPI, and Docker.</li>
      <li>Machine Learning Models: SVMs, Logistic and Linear Regression, Random Forest, Decision Trees, CNNs, and
        XGBoosting models.</li>
      <li>Specialisations: Natural Language Processing and Image Processing.</li>
      <li>Process Knowledge: Testing, GIT, Azure, Agile methodologies, Scrum, and Backlog to Done process.</li>
    </ul>

    <br><br>

    <h2>Contributions</h2>
    <h3>ContactEngine</h3>
    <ul>
      <li>
        <strong>Teams bot message creator</strong>: I used Flask, Docker and OpenAI to create a program to automatically
        generate a response message for agents to use, given a customer's previous interactions. This led to a reduction
        in time spent on cases by 95% where the customer's response triggered an unknown intent..
      </li>
      <li>
        <strong>Data analysis project</strong>: Conducted data analysis on unknown responses (inbound messages that did
        not trigger a known intent), and used sentiment analysis to cluster them. The addition of new intents led to a
        reduction in cases by 45%.
      </li>
      <li>
        <strong>Hackathon 2023 winner</strong>: With my idea to use OpenAI to assist agents in generating messages for
        unknown intents, our team won the hackathon, winning a prize of a $200 Amazon voucher. This gave rise to the
        implementation of it in a teams bot which I also did.
      </li>
      <li>
        <strong>Data pipeline automation</strong>: I recently took the lead on automating our pipeline deployment code,
        bolstering efficiency and accessibility to more users.
      </li>
      <li>
        <strong>Benchmarking machine learning techniques</strong>: I also compared our sophisticated transformer-based
        models against more basic models like SVMs, RFs, and CNNs. The results weren't optimal, but at least we now that
        our expensive methods are not wasted.
      </li>
      <li>
        <strong>Being recognised</strong>: I make sure to build connections wherever I go, and this did not stop at this
        company. I led training sessions, gave presentations to the company, and also led the Town Hall meeting a few
        times.
      </li>
    </ul>

    <h3>The United Nations</h3>
    <ul>
      <li>
        <strong>Relational database transition</strong>: I led the change from Google Sheets to a relational database
        system. This bolstered data integrity and ensured that data loss was kept to a minimum.
      </li>
      <li>
        <strong>Automated data analysis</strong>: I created a Python program using PySimpleGUI for automated data
        analysis. The user would then upload two csv files, and the Python program would join them, clean the data, and
        output results. I also included a troubleshooting guide. 
      </li>
      <li>
        <strong>Data analysis</strong>: I conducted data analysis on a survey using the SurveyMonkey API, summarising age,
        sex, sector and other relevant factors to assess bias across the workforce regarding overtime working. I then used
        sentiment analysis to provide insights about general attitudes/themes towards working in general to feed forward
        to management.
      </li>
      <li>
        <strong>ENZA convening team</strong>: As a key member of the ENZA (Entertainment Net Zero Accord) team, I played a
        critical role in engaging with stakeholders throughout the entertainment industry to support efforts aimed at
        reducing carbon emissions. Working with BAFTA and UNESCO, I helped reduce carbon emissions at events by 12%.
      </li>
      <li>
        <strong>CNN promotion</strong>: I led the promotion of the <a
          href="https://unfccc.int/climate-action/climate-neutral-now" target="_blank">Climate Neutral Now!</a> Initiative
        by engaging with corporations, institutions, and events. I was the contact point for the initiative, and welcomed
        any questions that stakeholders had. I increased signatories by 20%.
      </li>
      <li>
        <strong>COP26</strong>: I had the privilege of attending COP26 in Glasgow, where I played an instrumental role in
        organising and participating in various events. From booking rooms to coordinating with representatives from
        corporations, institutions, and other organisations, I was responsible for ensuring the smooth execution of each
        event.
      </li>
    </ul>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* Center the container horizontally */
  align-items: center;
}

.text-container {
  max-width: 50%;
}

.image-container {
  max-width: 50%;
  text-align: center;
}

img {
  max-width: 70%;
}

p {
  max-width: 100%;
}

@media only screen and (max-width: 768px) {
  .about-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  img {
    max-width: 200px;
    height: auto;
  }

  .image-container {
    max-width: 100%;
    align-items: center;
  }

  .text-container {
    max-width: 100%;
  }

  .gap {
    display: none;
  }
}

</style>