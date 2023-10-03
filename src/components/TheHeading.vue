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
import LoginButton from "@/components/LoginButton.vue";
import { ref } from "vue";

const visible = ref(false);
</script>

<template>
  <CNavbar expand="lg" color-scheme="dark" color="dark" class="navbar">
    <CContainer fluid>
      <CNavbarBrand href="/" class="brand"></CNavbarBrand>
      <CNavbarToggler @click="visible = !visible" />
      <CCollapse class="navbar-collapse" :visible="visible">
        <CNavbarNav class="ms-auto">
          <CNavItem>
            <CNavLink href="/">Главная</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://docs.modbot.xyz">Команды</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://www.donationalerts.com/r/relanit">
              Поддержать разработчика
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink>
              <LoginButton />
            </CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>

<style lang="scss">
body {
  background-color: #242424;
}

.navbar {
  z-index: 1;
  background-color: #242424 !important;
  box-shadow: 0 1px 2px 0 #0000001a;
  margin-top: 4px;
  height: 56px;
}

.navbar-toggler:active {
  background-color: #1a1a1a;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler {
  transition: background-color 0.2s;
}

.brand {
  background: url("../assets/logo1.svg") no-repeat;
  background-size: contain;
  width: 133px;
  height: 40px;
  background-position: 2px 4px;
}

.nav-link {
  color: #e3e3e3;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;

  &:hover {
    color: #78ba52;
  }
}

.show,
.collapsing {
  margin-left: -13px;
  min-width: 100vw;
  background-color: #1a1a1a;
  margin-top: 9px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 1px 2px 1px #0000001a;
  border-width: 1px;
}

.navbar-collapse:not(.show):not(.collapsing) {
  ul .nav-item {
    display: flex;
    align-items: center;
  }
}
</style>
