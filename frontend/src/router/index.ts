import { createRouter, createWebHistory } from 'vue-router';
import Quiz from '../pages/Quiz.vue';
import Gallery from '../pages/Gallery.vue';
import MoodBoards from '../pages/MoodBoards.vue';
import Compare from '../pages/Compare.vue';
import Profile from '../pages/Profile.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/quiz' },
    { path: '/quiz', component: Quiz },
    { path: '/gallery', component: Gallery },
    { path: '/moodboards', component: MoodBoards },
    { path: '/compare', component: Compare },
    { path: '/profile', component: Profile }
  ]
});
