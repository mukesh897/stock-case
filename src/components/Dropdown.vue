<template>
    <div class="card-wrap">
        <div>
        <b-dropdown style=" width: 100%;" id="dropdown-1" text="Stockcase" class="m-md-2">
            <b-dropdown-item>potfolio</b-dropdown-item>
            <b-dropdown-item>Social Giants</b-dropdown-item>
            <b-dropdown-item>Stockcase</b-dropdown-item>
        </b-dropdown>
        </div>
    </div>
</template>



<style>
    .card-wrap {
      height: 360px;
      border-radius: 5px;
      box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
      background-color: #252834 !important;
    }

    .btn-group > .btn {
        background: transparent;
        border: 0px;
    }
    .dropdown-menu.show {
        background-color: #252834 !important;
        width: 100%;
    }
    .v-application ul {
        padding-left: 0px !important;
    }
    .v-application a {
        color: #ffffff !important;
        font-size: 20px;
    }
    .show > .btn-secondary.dropdown-toggle {
        background-color: transparent;
        border: 0px;
    }

</style>