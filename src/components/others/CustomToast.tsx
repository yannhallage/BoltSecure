"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { CircleCheckIcon, XIcon, AlertTriangleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

interface UseProgressTimerProps {
  duration: number
  interval?: number
  onComplete?: () => void
}

function useProgressTimer({ duration, interval = 100, onComplete }: UseProgressTimerProps) {
  const [progress, setProgress] = useState(duration)
  const timerRef = useRef(0)
  const timerState = useRef({ startTime: 0, remaining: duration, isPaused: false })

  const cleanup = useCallback(() => window.clearInterval(timerRef.current), [])

  const reset = useCallback(() => {
    cleanup()
    setProgress(duration)
    timerState.current = { startTime: 0, remaining: duration, isPaused: false }
  }, [duration, cleanup])

  const start = useCallback(() => {
    const state = timerState.current
    state.startTime = Date.now()
    state.isPaused = false

    timerRef.current = window.setInterval(() => {
      const elapsedTime = Date.now() - state.startTime
      const remaining = Math.max(0, state.remaining - elapsedTime)
      setProgress(remaining)
      if (remaining <= 0) {
        cleanup()
        onComplete?.()
      }
    }, interval)
  }, [interval, cleanup, onComplete])

  const pause = useCallback(() => {
    const state = timerState.current
    if (!state.isPaused) {
      cleanup()
      state.remaining = Math.max(0, state.remaining - (Date.now() - state.startTime))
      state.isPaused = true
    }
  }, [cleanup])

  const resume = useCallback(() => {
    const state = timerState.current
    if (state.isPaused && state.remaining > 0) start()
  }, [start])

  useEffect(() => cleanup, [cleanup])

  return { progress, start, pause, resume, reset }
}

type CustomToastProps = {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
  description?: string
  duration?: number
  actionLabel?: string
  onAction?: () => void
  variant?: "success" | "error" | "warning"
}

export function CustomToast({
  open,
  setOpen,
  title,
  description,
  duration = 5000,
  actionLabel,
  onAction,
  variant = "success",
}: CustomToastProps) {
  const { progress, start, pause, resume, reset } = useProgressTimer({
    duration,
    onComplete: () => setOpen(false),
  })

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen)
      if (isOpen) {
        reset()
        start()
      }
    },
    [reset, start, setOpen]
  )

  const icon =
    variant === "success" ? (
      <CircleCheckIcon className="mt-0.5 shrink-0 text-emerald-500" size={16} />
    ) : variant === "error" ? (
      <XIcon className="mt-0.5 shrink-0 text-red-500" size={16} />
    ) : (
      <AlertTriangleIcon className="mt-0.5 shrink-0 text-yellow-500" size={16} />
    )

  return (
    <ToastProvider swipeDirection="left">
      <Toast open={open} onOpenChange={handleOpenChange} onPause={pause} onResume={resume}>
        <div className="flex w-full justify-between gap-3">
          {icon}

          <div className="flex grow flex-col gap-3">
            <div className="space-y-1">
              <ToastTitle>{title}</ToastTitle>
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {/* {actionLabel && (
              <ToastAction altText={actionLabel} asChild>
                <Button size="sm" onClick={onAction}>
                  {actionLabel}
                </Button>
              </ToastAction>
            )} */}
          </div>

          <ToastClose asChild>
            <Button
              variant="ghost"
              className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
              aria-label="Close notification"
            >
              <XIcon size={16} className="opacity-60 transition-opacity group-hover:opacity-100" />
            </Button>
          </ToastClose>
        </div>

        <div className="contents" aria-hidden="true">
          <div
            className={`pointer-events-none absolute bottom-0 left-0 h-1 w-full ${variant === "success"
                ? "bg-emerald-500"
                : variant === "error"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              }`}
            style={{
              width: `${(progress / duration) * 100}%`,
              transition: "width 100ms linear",
            }}
          />
        </div>
      </Toast>

      <ToastViewport className="sm:right-auto sm:left-0" />
    </ToastProvider>
  )
}
