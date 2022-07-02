<template>
  <button :class="myClass">
    <slot>Click</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  outline: {
    type: Boolean,
    required: false,
    default: false,
  }
})

const myClass = computed(() => {
  return [
    'px-6',
    'py-1',
    'text-white',
    'border-2',
    'border-blue-500',
    'rounded-md',
    'shadow-lg',
    'bg-gradient-to-b',
    'from-blue-600',
    'to-blue-400',
    'hover:from-blue-500',
    'hover:to-blue-300',
    {
      'border-pink-200': props.outline,
    }
  ]
})
</script>