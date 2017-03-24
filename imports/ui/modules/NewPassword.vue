<template>
  <div class="auth new-password">

    <h1 class="uk-article-title">
      <span>New Password</span>
      <hr class="uk-divider-icon">
    </h1>

    <div class="uk-flex uk-flex-center">
        <div class="uk-card uk-card-default uk-card-body">

          <form class="form-model">

              <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: lock"></span>
                      <input class="uk-input" type="password" placeholder="New Password">
                  </div>
              </div>

              <div class="uk-margin">
                  <div class="uk-inline">
                      <span class="uk-form-icon" uk-icon="icon: lock"></span>
                      <input class="uk-input" type="password" placeholder="Repeat New Password">
                  </div>
              </div>

              <footer class="uk-margin">
                <button class="uk-button button-confirm full-width">
                  New Password
                </button>
              </footer>

          </form>

        </div>
    </div>

  </div>
</template>
