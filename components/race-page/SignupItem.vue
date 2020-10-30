<template>
  <li id="signup-item">
    <div class="d-flex justify-content-between">
      <div>
        <h6 class="mb-2">10K Elite Race</h6>
        <div class="small my-0">
          <fa icon="birthday-cake" fixed-width />2003 and older
        </div>
        <div class="small my-0"><fa icon="euro-sign" fixed-width />16.30€</div>
        <b-button size="sm" variant="link"> More Information </b-button>
      </div>
      <b-form-radio></b-form-radio>
    </div>
    <hr />
  </li>
</template>

<script>
export default {
  name: 'SignupItem',
};
</script>