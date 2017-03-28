<template>
  <div class="auth login">

    <h1 class="uk-article-title">
      <span>Login</span>
      <hr class="uk-divider-icon">
    </h1>

    <div class="uk-flex uk-flex-center">
        <div class="uk-card uk-card-default uk-card-body card">
          <form class="form-model">

              <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: user"></span>
                      <input class="uk-input" v-model="email" type="text" placeholder="Your Email">
                  </div>
              </div>

              <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: lock"></span>
                      <input class="uk-input" v-model="password" type="password" placeholder="Your Password">
                  </div>
              </div>

              <footer class="uk-margin">
                <button type="button" class="uk-button button-confirm full-width" @click="handleLogin">
                  Enter
                </button>
              </footer>

          </form>

        </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'login',
    data: () => ({
      email: '',
      password: [],
    }),
    methods: {
      handleLogin() {
        let email = this.$data.email;
				let password = this.$data.password;

				Meteor.loginWithPassword(email, password, (err) => {
						if (err) {
								console.log(error: err.reason);
						} else {
								this.$router.push({ name: 'home' });
						}
				});
      }
    }
  }
</script>
