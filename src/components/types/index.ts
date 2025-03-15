import { ReactElement } from "react"

interface SocialOptionsInterface {
    isShowLabel: boolean
}

export interface SocialInterface {
    icon: ReactElement
    label: string
    url: string
    options: SocialOptionsInterface
}