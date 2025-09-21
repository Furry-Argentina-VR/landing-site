<script setup lang="ts">
const { data: galleryCollectionList } = await useLazyAsyncData<GalleryCollectionItem[]>(
  () => useContent('collections/gallery.json')
);

useSeoMeta({
  title: 'Galería'
})
</script>

<template>
  <div id="favr_gallery_hall">
    <UContainer>
      <div class="prose">
        <h1>Galería</h1>
        <p>Aquí puedes encontrar una colección de fotos de nuestras meetups y eventos. Si tienes fotos que te gustaría compartir, no dudes en enviarlas a nuestro equipo.</p>
      </div>
      <div>
        <article v-for="collection in galleryCollectionList" :key="collection.name">
          <div class="prose">
            <h2 v-text="collection.name" />
          </div>
          <ul class="grid gap-8">
            <li v-for="picture in collection.pictures" :key="picture.url" class="mb-8">
              <figure>
                <NuxtImg :src="picture.url" :alt="`Imagen de la colección ${collection.name}`" class="w-full rounded-lg shadow-lg" />
              </figure>
            </li>
          </ul>
        </article>
      </div>
    </UContainer>
  </div>
</template>