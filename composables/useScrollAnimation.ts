import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  animationClass?: string
  once?: boolean
}

export function useScrollAnimation(
  elementRef: Ref<HTMLElement | null>,
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    animationClass = 'scroll-fade-in',
    once = true,
  } = options

  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            entry.target.classList.add(animationClass)

            if (once && observer) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            isVisible.value = false
            entry.target.classList.remove(animationClass)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    isVisible,
  }
}

export function useScrollAnimationMultiple(
  containerRef: Ref<HTMLElement | null>,
  selector: string = '.scroll-animate',
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'scroll-fade-in',
    once = true,
  } = options

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!containerRef.value) return

    const elements = containerRef.value.querySelectorAll(selector)
    if (elements.length === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass)

            if (once && observer) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            entry.target.classList.remove(animationClass)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    elements.forEach((element) => {
      observer?.observe(element)
    })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
