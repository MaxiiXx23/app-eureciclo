import { Label } from "./styles"

interface IProps {
    label: string
}

export function TitleSubHeader({ label }: IProps) {
    return <Label>{label}</Label>
}