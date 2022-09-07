interface BaseResponse<T = any> {
  code: number
  msg?: string
  data: T
}

declare module 'headroom.js' {
    class Headroom {
        constructor(ele: HTMLElement | null, option: any) {
        }
        init() {}
    }
    export = Headroom
}