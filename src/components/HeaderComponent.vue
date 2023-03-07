<template>
  <CNavbar expand="lg" color-scheme="dark" color="dark" class="bg-dark">
    <CContainer fluid>
      <CNavbarBrand href="/" class="brand">ModBoty</CNavbarBrand>
      <CNavbarToggler @click="visible = !visible" />
      <CCollapse class="navbar-collapse" :visible="visible">
        <CNavbarNav class="ms-auto">
          <CNavItem>
            <CNavLink href="/">Главная</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://docs.modbot.xyz">Команды</CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<script setup lang="ts">
import {
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CContainer,
  CNavLink,
} from "@coreui/vue";
import "@coreui/coreui/dist/css/coreui.min.css";

import { ref } from "vue";

const visible = ref(false);
</script>

<style lang="scss">
$--cui-dark-rgb: #242424;

.bg-dark {
  color: red;
  background-color: rgba($--cui-dark-rgb, var(--cui-bg-opacity)) !important;
  box-shadow: 0 1px 2px 0 #0000001a;
  position: relative;
  z-index: 10;
  height: 60px;
}

.brand {
  text-indent: -9999px;
  background: url("../assets/logo1.svg") no-repeat;
  background-size: contain;
  width: 133px;
  background-position: 2px 4px;
}

.nav-link {
  color: #e3e3e3;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  padding: 10px;

  &:hover {
    color: #78ba52;
  }
}

.navbar-collapse {
  margin-top: 0px;
}

.show,
.collapsing {
  background-color: #1a1a1a;
  margin-top: 12px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 1px 2px 1px #0000001a;
  border-width: 1px;
}

.navbar-toggler:focus {
  box-shadow: none;
}
</style>
