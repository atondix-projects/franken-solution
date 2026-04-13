"use client";

import { useEffect, useState } from "react";

type TypewriterAccentProps = {
  texts: readonly string[];
  className?: string;
};

function randomBetween(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

export function TypewriterAccent({
  texts,
  className,
}: TypewriterAccentProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(texts[0]?.length ?? 0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const currentText = texts[textIndex] ?? "";
  const visibleText = currentText.slice(0, visibleLength);
  const longestText = texts.reduce(
    (longest, candidate) =>
      candidate.length > longest.length ? candidate : longest,
    texts[0] ?? "",
  );

  useEffect(() => {
    if (prefersReducedMotion || texts.length < 2) {
      return;
    }

    const hasFinishedTyping = visibleLength === currentText.length;
    const hasFinishedDeleting = visibleLength === 0;
    const deleteProgress =
      currentText.length === 0 ? 1 : 1 - visibleLength / currentText.length;

    let delay = 0;

    if (hasFinishedTyping && !isDeleting) {
      delay = randomBetween(1900, 2500);
    } else if (hasFinishedDeleting && isDeleting) {
      delay = randomBetween(320, 520);
    } else if (isDeleting) {
      const acceleratingDeleteDelay = 155 - deleteProgress * 65;
      delay = Math.max(70, randomBetween(acceleratingDeleteDelay - 10, acceleratingDeleteDelay + 14));
    } else {
      delay = randomBetween(115, 170);
    }

    const timeoutId = window.setTimeout(() => {
      if (hasFinishedTyping && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (hasFinishedDeleting && isDeleting) {
        setIsDeleting(false);
        setTextIndex((currentIndex) => (currentIndex + 1) % texts.length);
        return;
      }

      setVisibleLength((currentLength) => currentLength + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [currentText, isDeleting, prefersReducedMotion, texts.length, visibleLength]);

  const displayedText = prefersReducedMotion ? texts[0] ?? "" : visibleText;

  return (
    <span
      className={`font-accent text-accent ${className ?? ""}`.trim()}
    >
      <span className="sr-only">{texts[0] ?? ""}</span>
      <span
        aria-hidden="true"
        className="inline-flex items-baseline"
        style={{ minWidth: `${longestText.length + 1}ch` }}
      >
        <span>{displayedText}</span>
        {prefersReducedMotion ? null : (
          <span className="terminal-caret ml-[0.12em] block w-[0.58em] self-end rounded-sm bg-current" />
        )}
      </span>
    </span>
  );
}
