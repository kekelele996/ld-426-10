import { computed, ref } from 'vue';
import { mockQuiz } from '../api/mockQuiz';
import { QuizOption } from '../types';
import { calculateStyleProfile } from '../utils/styleCalculator';

export function useQuiz() {
  const currentIndex = ref(0);
  const answers = ref<QuizOption[]>([]);
  const currentQuestion = computed(() => mockQuiz[currentIndex.value]);
  const progress = computed(() => Math.round((answers.value.length / mockQuiz.length) * 100));

  function answer(option: QuizOption) {
    if (currentIndex.value < mockQuiz.length - 1) currentIndex.value += 1;
    answers.value[currentIndex.value] = option;
  }

  function result() {
    return calculateStyleProfile('local-user', answers.value);
  }

  return { questions: mockQuiz, currentQuestion, currentIndex, answers, progress, answer, result };
}
