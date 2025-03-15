interface SocialOptionsInterface {
    isShowLabel: boolean
}

export interface SocialInterface {
    icon: string
    label: string
    url: string
    options: SocialOptionsInterface
}