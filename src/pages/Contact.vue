<template>
  <Layout>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <h1>Contact</h1>
    <p>To contact me, either email <a href="mailto:jualdouglas@gmail.com">jualdouglas@gmail.com</a>, reach out to me on LinkedIn, or just fill out the form below.</p>
    
    <div class="links">
    <a href="https://github.com/julian-douglas" target="_new"><i class="fa fa-github" style="font-size:48px;"></i></a>
    <a href="https://www.linkedin.com/in/julian-douglas/" target="_new"><i class="fa fa-linkedin-square" style="font-size:44.16px;"></i></a>
    <a href="mailto:jualdouglas@gmail.com"><i class="fa fa-envelope" style="font-size:44px"></i></a>
    </div>

    <form @submit.prevent="submitForm" action="https://formspree.io/f/xpzvqjwd" method="POST">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="company">Company:</label>
          <input type="text" id="company" name="company">
        </div>

        <div class="form-group">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
      </div>

      <button type="submit" style="display: flex; align-items: center; justify-content: center; width: 50%; margin: 0 auto;">Submit</button>
      <br><br>
    </form>
    <div v-show="success" class="success-message">
      Your message was sent successfully!
    </div>
  </Layout>
</template>

<script>


export default {
    data() {
    return {
      success: false,
    };
  },

  methods: {
    
    async submitForm() {
  try {
    const formElement = document.querySelector('form'); // Assuming you have only one form on the page
    const formData = new FormData(formElement);
    
    const formspreeEndpoint = 'https://formspree.io/f/xpzvqjwd';

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    });

    if (response.ok) {
      // Form submission was successful
      this.success = true;
    } else {
      // Form submission failed
      console.error('Form submission failed:', response.statusText);
      // Handle form submission failure here
    }
  } catch (error) {
    console.error('Form submission error:', error);
    // Handle any other form submission error here
  }
},
  },

  metaInfo: {
    title: 'Contact'
  }
}
</script>

<style scoped>

form {
  max-width: 100%; /* Adjust the max-width as needed */
  margin: 0 auto;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 24px; /* Increase the margin */
}

.form-group {
  flex: 1;
  margin: 16px; /* Increase the margin */
}

label {
  display: block;
  margin-bottom: 8px;
}

input,
textarea {
  width: 100%;
  padding: 10px; /* Adjust the padding */
  margin-bottom: 16px;
}

.success-message {
  background-color: #28a745;
  color: #fff;
  padding: 10px;
  margin-top: 16px;
  border-radius: 5px;
  text-align: center;
}


label {
  font-weight: bold;
}

.links {
  margin: 20px;
  display: flex;
  justify-content: center; /* Center the links horizontally */
  align-items: center; /* Center the links vertically */
}

.links a {
  color: var(--font-color);
  text-decoration: none;
  font-size: 24px; /* Adjust the font size to make the links bigger */
  margin: 0 15px; /* Add some margin between the links */
}

button {
  background-color: var(--font-color);
  font-family: 'Poppins';
  font-weight: bold;
  color: var(--background-color);
  border-radius: 1rem;
  padding: 12px 20px; /* Adjust the padding */
  border: none;
  cursor: pointer;
  width: 100%; /* Make the button occupy the full width */
}


@media only screen and (max-width: 768px) {

  .links {
    margin-top: 20px;
  }

  .links a {
    margin: 0px 15px;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    margin: 0px;
  }

  .form-group {
    margin: 10px;
  }
}


</style>