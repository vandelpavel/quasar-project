<template>
  <div>Hi world</div>
</template>

<script setup lang="ts">
import { FormMakerAllowedcomponents } from 'src/models/test-models';

defineProps<{
  // This comment includes the current type that I'm currently using in order to avoid that error
  // formItems: BasicComponentType<
  //   FormMakerAllowedcomponentNames,
  //   Record<string, unknown>,
  //   Record<string, unknown>
  // >[];
  formItems: FormMakerAllowedcomponents<Record<string, unknown>>[];
}>();
</script>
