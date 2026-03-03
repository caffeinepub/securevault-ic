import { useEffect, useRef } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {},
) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>(".animate-on-scroll");

    if (targets.length === 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              if (triggerOnce) observer.unobserve(entry.target);
            }
          }
        },
        { threshold, rootMargin },
      );
      observer.observe(el);
      return () => observer.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (triggerOnce) observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin },
    );

    for (const target of targets) {
      observer.observe(target);
    }
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
}

export function useScrollAnimation() {
  useEffect(() => {
    const targets =
      document.querySelectorAll<HTMLElement>(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    for (const target of targets) {
      observer.observe(target);
    }
    return () => observer.disconnect();
  }, []);
}
