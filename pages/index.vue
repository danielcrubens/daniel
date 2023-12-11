<template>
  <body class="bg-black">
  <div>
    <header :class="{ open: isOpen }">
      <button @click="toggleNav" class="menu-button absolute right-14 top-10 bg-white">
        <svg v-show="!isOpen" class="h-8 w-8 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-show="isOpen" class="h-8 w-8 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </header>
    <nav :class="{ 'hidden': !isOpen }" class="h-screen">
      <ul class=" flex items-center justify-center h-screen">
        <li class="text-white text-4xl font-semibold" @click="showSection(0); toggleNav()">Front-end</li>
        <li class="text-white text-4xl font-semibold" @click="showSection(1); toggleNav()">SKills</li>
        <li class="text-white text-4xl font-semibold" @click="showSection(2); toggleNav()">Projetos</li>
        <li class="text-white text-4xl font-semibold" @click="showSection(3); toggleNav()">Contatos</li>

      </ul>
    </nav>
    <main class="">
      <Front v-show="!isOpen && activeSection === 0"/>
      <Skill v-show="!isOpen && activeSection === 1"/>
      <Project v-show="!isOpen && activeSection === 2"/>
      <Contact v-show="!isOpen && activeSection === 3"/>
      <!-- Adicione mais seções conforme necessário -->
    </main>
  </div>
</body>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const activeSection = ref(0);

function toggleNav() {
  isOpen.value = !isOpen.value;
}

function showSection(index) {
  activeSection.value = index;
}
</script>

<style lang="scss">
/* Seus estilos Tailwind e personalizados aqui */


.open nav {
  display: flex; /* Quando isOpen for true, o menu será exibido */
  position: absolute; /* Para ocupar toda a altura da tela */
  top: 0;
  left: 0;
  width: 100%;
  background-color: white; /* Cor de fundo do menu */
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  cursor: pointer;
}
</style>
