import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type componentProps = {
  label: string
  placeHolder?: string
  type: string
}

export default function InputWithLabel(props: componentProps) {
  return (
    <div className="mt-3">
      <Label htmlFor="inputWithLabel">{props.label}</Label>
      <Input
        type={props.type}
        id="inputWithLabel"
        placeholder={props.placeHolder || props.label}
      />
    </div>
  )
}
