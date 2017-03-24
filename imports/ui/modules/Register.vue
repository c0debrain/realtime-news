<template>
  <div class="auth register">

    <h1 class="uk-article-title">
      <span>Register</span>
      <hr class="uk-divider-icon">
    </h1>

    <div class="uk-flex uk-flex-center">
        <div class="uk-card uk-card-default uk-card-body">

          <form class="form-model">

              <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: user"></span>
                      <input class="uk-input" type="text" placeholder="Your Email">
                  </div>
              </div>

              <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: lock"></span>
                      <input class="uk-input" type="password" placeholder="Your Password">
                  </div>
              </div>

              <footer class="uk-margin">
                <button class="uk-button button-confirm full-width">
                  Register
                </button>
              </footer>

          </form>

        </div>
    </div>

  </div>
</template>
