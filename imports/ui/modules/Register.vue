<template>
  <div class="auth register">

    <h1 class="uk-article-title">
      <span>Register</span>
      <hr class="uk-divider-icon">
    </h1>

    <div class="uk-flex uk-flex-center">
        <div class="uk-card uk-card-default uk-card-body">

          <button type="button" class="uk-button button-facebook full-width" @click="handleFacebook">
            <i class="uk-margin-small-left" uk-icon="icon: facebook"></i>
            <span>Register with facebook</span>
          </button>

          <hr class="uk-divider-icon">

          <form class="form-model">

              <div class="uk-margin">
                <div class="avatar-upload uk-placeholder uk-text-center">
                  <span class="icon" uk-icon="icon: cloud-upload"></span>
                  <span class="uk-text-middle">Attach pictures by dropping them here or</span>
                  <div uk-form-custom>
                      <input type="file" multiple>
                      <span class="uk-link">selecting one</span>
                  </div>
                </div>

                <progress id="progressbar" class="uk-progress" value="0" max="100" hidden></progress>
              </div>

              <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: user"></span>
                      <input class="uk-input" v-model="name" type="text" placeholder="Your Name">
                  </div>
              </div>

              <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: mail"></span>
                      <input class="uk-input" v-model="email" type="text" placeholder="Your Email">
                  </div>
              </div>

              <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: phone"></span>
                      <input class="uk-input" v-model="phone" type="text" placeholder="Your Call Phone">
                  </div>
              </div>

              <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: lock"></span>
                      <input class="uk-input" v-model="password" type="password" placeholder="Your Password">
                  </div>
              </div>

              <footer class="uk-margin">
                <button type="button" class="uk-button button-confirm full-width" @click="handleRegister">
                  Register
                </button>
              </footer>

          </form>

        </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'register',
    data: () => ({
      name: '',
      email: '',
      password: '',
      phone: '',
    }),
    methods: {
      handleRegister() {
        let userData = {
          name: this.$data.name,
          email: this.$data.email,
          password: this.$data.password,
          profile: {
            phone: this.$data.phone,
          }
        }
        Accounts.createUser(userData, (err) => {
    			if(err){
    				console.log(error: err.reason);
    			} else {
    				this.$router.push({ name: 'coverages-list' });
    			}
    		});
      },
      handleFacebook() {
        Meteor.loginWithFacebook({
          requestPermissions: ['user_friends', 'public_profile', 'email']
        }, (err) => {
          if (err) {
            // handle error
            Meteor.Error("Facebook login failed");
          } else {
            // successful login!
            this.$router.push({ name: 'coverages-list' });
          }
        });
      }
    },
  }
</script>
