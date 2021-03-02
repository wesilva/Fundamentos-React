import { TOGGLE_LESSON } from '../../store/constantes/action-types'

export function toggleLesson(module, lesson) {
    return {
        type: TOGGLE_LESSON,
        module,
        lesson
    };
}