'use client'

import { Button } from "@/components/ui/button"
import { Loader2, WandSparkles } from "lucide-react"
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          Generating
        </>
      ) : (
        <>
          <WandSparkles className="h-4 w-4 mr-2" />
          Generate
        </>
      )}
    </Button>
  )
}