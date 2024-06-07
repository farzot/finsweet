<template>
  <div class="container mx-auto py-8 px-4 md:px-8 lg:px-12">
    <h1 class="text-4xl font-bold text-center mb-8 md:mb-12">Our Blog</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(post, index) in posts" :key="index" class="border rounded-lg overflow-hidden shadow-lg">
        <img :src="post.image" class="w-full h-48 sm:h-64 object-cover" />
        <div class="p-6">
          <p class="text-gray-600 text-sm mb-2">{{ post.date }}</p>
          <h2 class="text-lg font-bold mb-2">{{ post.title }}</h2>
          <p class="text-gray-600 mb-4">{{ post.description }}</p>
          <a href="#" class="text-blue-500 font-semibold hover:underline">Read More →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { date: '27 Jan 2021', title: 'How one Webflow user grew his single person consultancy from $0–100k in 14 months', description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract...', image: '../../../public/img/blogGroup1.png' },
        { date: '27 Jan 2021', title: 'How one Webflow user grew his single person consultancy from $0–100k in 14 months', description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract...', image: '../../../public/img/blogGroup2.png' },
        { date: '27 Jan 2021', title: 'How one Webflow user grew his single person consultancy from $0–100k in 14 months', description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract...', image: '../../../public/img/blogGroup3.png' },
        { date: '27 Jan 2021', title: 'How one Webflow user grew his single person consultancy from $0–100k in 14 months', description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract...', image: '../../../public/img/blogGroup4.png' },
        { date: '27 Jan 2021', title: 'How one Webflow user grew his single person consultancy from $0–100k in 14 months', description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract...', image: '../../../public/img/blogGroup5.png' },
        { date: '27 Jan 2021', title: 'How one Webflow user grew his single person consultancy from $0–100k in 14 months', description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract...', image: '../../../public/img/blogGroup6.png' }
      ]
    };
  }
};
</script>

<style scoped>
img {
  transition: transform 0.3s;
}

img:hover {
  transform: scale(1.05);
}

a:focus {
  outline: none;
}
</style>
