<script setup lang="ts">
defineProps({
  projects: {
    type: Array,
    default: null,
  }
})

const apiUrl = useRuntimeConfig().public.apiUrl

</script>

<template>
  <section v-if="projects">
    <div class="projects">
      <div class="paragraphe">
        <h3 class="paragraphe-title-span to-right">Nos projets</h3>
        <h1 class="paragraphe-title to-right">
          Quand la créativité prends forme
        </h1>
      </div>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="projects-grid-project"
             :class="{'main__project': project.id === 1,
        'left-side__project': project.id === 2,
        'right-side__project': project.id === 3
        }">
          <div class="projects-grid-project-img">
            <img :src="apiUrl+project.attributes.Poster.data.attributes.url" alt="Image d'un rêve">
          </div>
          <div class="projects-grid-project-content">
            <h2>{{ project.attributes.Name }} <span>- {{ project.attributes.Type }}</span></h2>
            <p>
              {{ project.attributes.Tagline }}
            </p>
            <div class="projects-grid-project-content-categories">
              <ul>
                <li v-for="tag in project.attributes.Tags" :key="tag.id">{{ tag.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button class="projects-cta">Voir toutes les réalisations</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
@mixin right-position($right, $good-padding) {
  right: calc($right - $good-padding);
  padding: 0 $good-padding;
}

.projects {
  padding: 40px 16.66%;
  margin: 100px 0;
  border-top: 1px solid #c6c6c6;
  position: relative;
  display: flex;
  flex-direction: column;

  .paragraphe {
    .paragraphe-title {
      margin-bottom: 80px;
    }

    .paragraphe-title-span {
      position: absolute;
      top: -14px;
      background-color: white;
      @include right-position(16.66%, 20px);
    }
  }

  &-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content max-content;
    gap: 20px;

    &-project {
      &-img {
        width: 100%;
        aspect-ratio: 16/9;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &-content {
        h2 {
          font-family: 'DT Getai Grotesque Display', sans-serif;
          font-weight: 900;
          font-size: 30px;
          margin-bottom: 10px;
          text-transform: uppercase;

          span {
            font-family: 'Roboto', sans-serif;
            color: #BDBDBD;
            font-weight: 200;
            text-transform: initial;
          }
        }

        p {
          font-size: 12px;
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          margin-bottom: 30px;
        }

        &-categories {
          ul {
            display: flex;
            margin-bottom: 20px;

            li {
              font-family: 'Roboto', sans-serif;
              font-size: 12px;
              font-weight: 500;
              margin: 0 15px 0 0;
              width: 107px;
              padding: 6px 0;
              text-align: center;
              border-radius: 25px;
              border: 1px solid #000;
            }
          }
        }
      }
    }
  }


}

.main__project {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.left-side__project {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.right-side__project {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

</style>