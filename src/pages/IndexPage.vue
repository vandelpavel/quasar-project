<template>
  <q-page class="row items-center justify-evenly">
    <test-component :form-items="testArray"></test-component>
  </q-page>
</template>

<script setup lang="ts">
import testComponent from 'src/components/TestComponent.vue';
import { FormMakerAllowedcomponents } from 'src/models/test-models';
import { ref } from 'vue';

const testArray = ref<
  FormMakerAllowedcomponents<{ ciao: string; modno: string }>[]
>([]);
</script>
