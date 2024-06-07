<!-- src/components/TemplateList.vue -->
<template>
  <div class="container mt-24 md:px-40 text-[#282938]">
    <div class="text-center mb-6">
      <button v-for="(filter, index) in filters" :key="index" @click="setActiveFilter(filter)"
              :class="{'text-blue-500': activeFilter === filter, 'text-gray-500': activeFilter !== filter}"
              class="mx-2 px-4 py-2 font-semibold">
        {{ filter }}
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
      <div v-for="(template, index) in filteredTemplates" :key="index" class="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
        <img :src="template.image" class="w-full h-52 object-cover" />
        <div class="p-6">
          <h2 class="text-lg font-bold mb-2">{{ template.title }}</h2>
          <p class="text-gray-600 mb-4">{{ template.description }}</p>
          <a href="#" class="text-blue-500 font-semibold hover:underline">View Portfolio →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFilter: 'All',
      filters: ['All', 'UI Design', 'Webflow Design', 'Figma Design'],
      templates: [
        { title: 'Template 1', description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.', category: 'UI Design', image: '../../../public//img/worktemplate1.png' },
        { title: 'Template 2', description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.', category: 'Webflow Design', image: '../../../public//img/workteplate2.png' },
        { title: 'Template 3', description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.', category: 'UI Design', image: '../../../public//img/worktemplate3.png' },
        { title: 'Template 4', description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.', category: 'Figma Design', image: '../../../public//img/worktemplate4.png' },
        { title: 'Template 5', description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.', category: 'Webflow Design', image: '../../../public//img/worktemplate5.png' },
        { title: 'Template 6', description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.', category: 'Figma Design', image: '../../../public//img/worktemplate6.png' }
      ]
    };
  },
  computed: {
    filteredTemplates() {
      if (this.activeFilter === 'All') {
        return this.templates;
      }
      return this.templates.filter(template => template.category === this.activeFilter);
    }
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    }
  }
};
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
