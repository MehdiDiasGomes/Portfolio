import { ref, onMounted, type Ref } from 'vue'
import { useAutoAnimate as useAutoAnimateLib } from '@formkit/auto-animate/vue'

export const useAutoAnimate = (options?: any) => {
  return useAutoAnimateLib(options)
}
